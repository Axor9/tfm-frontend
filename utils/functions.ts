import Web3 from 'web3'
import { useWeb3Store } from '~~/store/web3'
import { Option, State } from '~~/types/type'

export const getCurrentState = async (): Promise<State> => {
    const web3Store = useWeb3Store()
    const currentStateResponse = await web3Store.contractInstance?.methods
        .getCurrentState()
        .call()

    const currentState: State = {
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

export const hexToString = (data: string): string => {
    const config = useRuntimeConfig()
    const provider = new Web3.providers.HttpProvider(
        config.public.network.provider
    )

    const web3 = new Web3(provider)
    return web3.utils.hexToUtf8(data)
}
