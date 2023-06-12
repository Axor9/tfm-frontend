<script setup lang="ts">
import { useWeb3Store } from '~~/store/web3'

const web3Store = useWeb3Store()
</script>

<template>
    <div class="History">
        <h1 class="History-title">The hero's journey</h1>
        <div class="History-info">
            <ul class="History-info-list">
                <li>Our hero embarks on a new adventure.</li>
                <li v-for="text in web3Store.statesText" :key="text">
                    {{ text }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.History {
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &-title {
        padding-bottom: 20px;
    }

    &-info {
        background-color: #8c8686;
        border: #c6e4e2 solid 12px;
        color: white;
        height: 70%;
        width: 30%;
        overflow-y: auto;
        overflow-x: hidden;

        &-list {
            font-size: large;
        }
    }
}
</style>
