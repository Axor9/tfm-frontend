<script setup lang="ts">
import { useWeb3Store } from '~~/store/web3'

const web3Store = useWeb3Store()
const config = useRuntimeConfig()

const account = computed(() => web3Store.account)

onMounted(() => {
    window.ethereum?.on('accountsChanged', (newAccount) => {
        if (Array.isArray(newAccount)) {
            web3Store.account = newAccount[0]
        }
    })

    window.ethereum?.on('chainChanged', (chainId) => {
        if (chainId !== config.public.network.id) web3Store.account = undefined
    })

    window.ethereum?.on('disconnect', () => {
        web3Store.account = undefined
    })
})

const connect = async () => {
    if (!(await web3Store.connectWallet())) {
        alert('Wallet no detectada')
    }
}
</script>

<template>
    <button @click="connect">Connect</button>
    {{ account }}
</template>
