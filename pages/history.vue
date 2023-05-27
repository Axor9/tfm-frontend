<script setup lang="ts">
import { useWeb3Store } from '~~/store/web3'

const web3Store = useWeb3Store()
</script>

<template>
    <div class="History">
        <ul class="History-list">
            <li>Our hero embarks on a new adventure.</li>
            <li v-for="text in web3Store.statesText" :key="text">
                {{ text }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.History {
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;

    &-list {
    }
}
</style>
