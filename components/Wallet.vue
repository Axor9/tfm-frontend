<script setup lang="ts">
import { useWeb3Store } from '~~/store/web3'

const web3Store = useWeb3Store()
const config = useRuntimeConfig()

const buttonText = computed(() => web3Store.account ?? 'Connect Wallet')

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
    <button @click="connect" class="Wallet-button">
        <div class="Wallet-button-container">
            <img
                class="Wallet-button-img"
                src="~/assets/images/frames/wallet.png"
                alt=""
                @click="connect"
            />
            <span class="Wallet-button-text" :title="buttonText">{{
                buttonText
            }}</span>
        </div>
    </button>
</template>

<style scoped>
.Wallet-button {
    display: inline-block;
    background: transparent;
    border: none;
    cursor: pointer;
}

.Wallet-button-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.Wallet-button-img {
    display: block;
    width: 100%;
}

.Wallet-button-text {
    max-width: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: bolder;
    font-family: 'Arial', sans-serif; /* Cambia 'Arial' por la fuente que desees */
    color: white;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
