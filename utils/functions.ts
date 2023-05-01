import { useWeb3Store } from '~~/store/web3'
import { State } from '~~/types/type'

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
    }
    return currentState
}
