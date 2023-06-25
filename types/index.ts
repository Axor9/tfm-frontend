import { MetaMaskInpageProvider } from '@metamask/providers'

declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider
    }
}

declare module '@nuxt/schema' {
    interface PublicRuntimeConfig {
        network: {
            id: string
            name: string
            provider: string
            chainId: number
        }
        contract: {
            address: string
        }
    }
}

export {}
