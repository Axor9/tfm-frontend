import Web3 from 'web3'
import { useWeb3Store } from '~~/store/web3'
import { HistoryState, Level, Option, State, Weapon } from '~~/types/type'
import stateTexts from '../data/texts.json'
import optionTexts from '../data/optionTexts.json'

export const getCurrentState = async (): Promise<State> => {
    const web3Store = useWeb3Store()
    const currentStateResponse = await web3Store.contractInstance?.methods
        .getCurrentState()
        .call()

    const currentState: State = {
        id: currentStateResponse.id,
        state: currentStateResponse.state,
        voting: currentStateResponse.voting,
        player: {
            health: currentStateResponse.player.health,
            weapons: currentStateResponse.player.weapons,
        },
        level: {
            name: currentStateResponse.level.name,
            enemies: currentStateResponse.level.enemies,
        },
        options: currentStateResponse.options,
        enemy: currentStateResponse.enemy,
    }
    return currentState
}

export const getStates = async (): Promise<HistoryState[]> => {
    const web3Store = useWeb3Store()
    const stateResponse = await web3Store.contractInstance?.methods
        .getGameStates()
        .call()

    const states: HistoryState[] = await Promise.all(
        stateResponse.map(async (state: State): Promise<HistoryState> => {
            let winnerOption: Option | undefined
            try {
                winnerOption = await web3Store.contractInstance?.methods
                    .getWinnerOption(state.id)
                    .call()
            } catch (error) {
                console.error(error)
            }

            return {
                id: state.id,
                state: state.state,
                voting: state.voting,
                player: {
                    health: state.player.health,
                    weapons: state.player.weapons,
                },
                level: {
                    name: state.level.name,
                    enemies: state.level.enemies,
                },
                options: state.options,
                enemy: state.enemy,
                winnerOption,
            }
        })
    )

    return states
}

export const hexToString = (data: string): string => {
    const config = useRuntimeConfig()
    const provider = new Web3.providers.HttpProvider(
        config.public.network.provider
    )

    const web3 = new Web3(provider)
    return web3.utils.hexToUtf8(data)
}

export const generateText = (state: HistoryState): string | undefined => {
    const text = stateTexts.find((x) => x.state == state.state)

    if (state.state == StatesTypes.Battle) {
        return text?.text.replace('{0}', state.enemy)
    }

    if (state.state == StatesTypes.Final) {
        return state.player.health <= 0 ? text?.text : text?.text2
    }

    return text?.text
}

export const generateOptionText = (option: Option) => {
    const text = optionTexts.find((x) => x.option == option.optionType)

    if (option.optionType == OptionTypes.Weapon) {
        return text?.text.replace('{0}', hexToString(option.option)) ?? ''
    }

    if (option.optionType == OptionTypes.Level) {
        return (
            text?.text.replace(
                '{0}',
                hexToString(option.option).replace('Level', '')
            ) ?? ''
        )
    }

    return text?.text ?? ''
}

export const generateWinnerOptionText = (
    state: HistoryState
): string | undefined => {
    const config = useRuntimeConfig()
    const provider = new Web3.providers.HttpProvider(
        config.public.network.provider
    )

    const web3 = new Web3(provider)
    if (!state.winnerOption) return

    const text = optionTexts.find(
        (x) => x.option == state.winnerOption?.optionType
    )

    if (state.winnerOption.optionType == OptionTypes.Weapon) {
        const weapon = web3.eth.abi.decodeParameter(
            weaponEncodeTypes,
            state.winnerOption.data ?? ''
        ) as Weapon

        return text?.text2
            .replace('{0}', state.enemy)
            .replace('{1}', weapon.name)
    }

    if (state.winnerOption.optionType == OptionTypes.Level) {
        const level = web3.eth.abi.decodeParameter(
            levelEncodeTypes,
            state.winnerOption.data ?? ''
        ) as Level

        return text?.text2.replace('{0}', level.name)
    }

    return text?.text2
}
