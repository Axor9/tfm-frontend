import { useWeb3Store } from '~~/store/web3'
import Web3 from 'web3'

import { getCurrentState, getStates } from '~~/utils/functions'

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig()
    const web3Store = useWeb3Store()
    const provider = new Web3.providers.HttpProvider(
        config.public.network.provider
    )

    const web3 = new Web3(provider)
    const gameStatesJSON: any = await $fetch('/GameStates.json')
    web3Store.contractInstance = new web3.eth.Contract(
        gameStatesJSON.abi,
        config.public.contract.address
    )
    // // web3Store.contractInstance = new web3.eth.Contract(
    // //     config.public.contract.abi,
    // //     config.public.contract.address
    // // )
    web3Store.currentState = await getCurrentState()
    web3Store.states = await getStates()
})
