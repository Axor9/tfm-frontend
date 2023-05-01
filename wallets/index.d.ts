export type Metamask = {
    connectWallet(): Promise<string>
    sendTransaction(transaction: Transaction): void
    voteOption(
        candidate: string,
        amount: number,
        contractAddress: string,
        from: string
    ): void
}

export interface Transaction {
    from?: string | number
    to?: string
    value?: number | string | BN
    gas?: number | string
    gasPrice?: number | string | BN
    maxPriorityFeePerGas?: number | string | BN
    maxFeePerGas?: number | string | BN
    data?: string
    nonce?: number
    chainId?: number
    common?: Common
    chain?: string
    hardfork?: string
}
