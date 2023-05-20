import { MetaMaskInpageProvider } from '@metamask/providers'
import { Metamask, Transaction } from '@/wallets'

import Web3 from 'web3'

export default class MetamaskImpl implements Metamask {
    private wallet: Web3
    private provider: MetaMaskInpageProvider

    constructor(provider: any) {
        this.wallet = new Web3(provider)
        this.provider = provider
    }

    async connectWallet() {
        const config = useRuntimeConfig()
        console.log(await this.wallet.eth.getChainId())
        if ((await this.wallet.eth.getChainId()) !== 1337) {
            await this.provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: config.public.network.id }],
            })
        }

        return this.wallet.eth.requestAccounts().then((res) => res[0])
    }

    async sendTransaction(transaction: Transaction) {
        try {
            this.wallet.eth.sendTransaction(transaction)
        } catch (error) {
            console.error(error)
        }
    }

    async voteOption(
        candidate: string,
        amount: number,
        contractAddress: string,
        from: string
    ) {
        try {
            console.log(this.wallet.utils.toWei(amount.toString()))
            const config = useRuntimeConfig()
            const votingJson: any = await $fetch('/Voting.json')

            const contract = new this.wallet.eth.Contract(
                votingJson.abi,
                contractAddress
            )
            contract.methods.vote(candidate).send({
                from,
                value: this.wallet.utils.toWei(amount.toString(), 'ether'),
            })
        } catch (error) {
            console.error(error)
        }
    }
}
