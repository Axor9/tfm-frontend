import { defineStore } from 'pinia'
import { State } from '~~/types/type'
import Metamask from '~~/wallets/Metamask'
import { Contract } from 'web3-eth-contract'

export const useWeb3Store = defineStore('web3', () => {
    const contractInstance = ref<Contract>()
    const wallet = ref<Metamask>()
    const account = ref<string>()

    const currentState = ref<State>()
    const states = ref<State[]>()

    const statesText = computed(() => {
        const texts: string[] = []
        if (!states.value) return []

        for (const state of states.value) {
            const text = generateText(state)
            const winnerOptionText = generateWinnerOptionText(state)

            if (text) texts.push(text)
            if (winnerOptionText) texts.push(winnerOptionText)
        }

        return texts
    })

    const connectWallet = async () => {
        if (window.ethereum === undefined) return
        wallet.value = new Metamask(window.ethereum)

        account.value = await wallet.value?.connectWallet()

        return 1
    }

    return {
        contractInstance,

        wallet,
        account,
        connectWallet,

        currentState,
        states,
        statesText,
    }
})
