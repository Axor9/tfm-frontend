import Web3 from 'web3'
import { useWeb3Store } from '~~/store/web3'
import { Level, Option, State, Weapon } from '~~/types/type'

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

export const getStates = async (): Promise<State[]> => {
    const web3Store = useWeb3Store()
    const stateResponse = await web3Store.contractInstance?.methods
        .getGameStates()
        .call()

    const states = stateResponse.map((state: State) => {
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
        }
    })

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

export const generateText = (state: State): string => {
    if (state.state == StatesTypes.Treasure) {
        return 'The hero finds a treasure.'
    }

    if (state.state == StatesTypes.Rest) {
        return 'The hero finds themselves on a path that forks into three. Which path will he choose?'
    }

    if (state.state == StatesTypes.Battle) {
        return `
        The hero encounters a ${state.enemy} that attacks him. What will he do?`
    }
    return 'hola'
}

export const generateWinnerOptionText = async (
    state: State
): Promise<string | undefined> => {
    const web3Store = useWeb3Store()
    const config = useRuntimeConfig()
    const provider = new Web3.providers.HttpProvider(
        config.public.network.provider
    )
    console.log(state.id)
    const web3 = new Web3(provider)
    const winnerOption: Option = await web3Store.contractInstance?.methods
        .getWinnerOption(state.id)
        .call()

    if (winnerOption.optionType == OptionTypes.Treasure) {
        return 'The hero has opened the chest.'
    }

    if (winnerOption.optionType == OptionTypes.Weapon) {
        const weapon = web3.eth.abi.decodeParameter(
            weaponEncodeTypes,
            winnerOption.data ?? ''
        ) as Weapon
        return `The hero atacks the ${state.enemy} with a ${weapon.name}.`
    }

    if (winnerOption.optionType == OptionTypes.Level) {
        const level = web3.eth.abi.decodeParameter(
            levelEncodeTypes,
            winnerOption.data ?? ''
        ) as Level

        return `The hero embarks on a journey to the ${level.name}.`
    }

    return
}
