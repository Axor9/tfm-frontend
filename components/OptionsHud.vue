<script setup lang="ts">
import { useWeb3Store } from '~~/store/web3'
import { Option } from '~~/types/type'

const web3Store = useWeb3Store()
const options = ref<Option[]>(web3Store.currentState?.options ?? [])
const amount = ref<number>(0)
</script>

<template>
    <div class="Options">
        <input
            class="Options-amount"
            type="number"
            placeholder="Vote amount"
            v-model="amount"
        />
        <div v-for="option in options" :key="option.option">
            <option-button :option="option" :amount="amount" />
        </div>
    </div>
</template>

<style lang="scss">
.Options {
    background-color: #8c8686;
    border: #c6e4e2 solid 12px;
    height: 31.25rem;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    overflow-x: hidden;

    &-amount {
        width: 100%;
        height: 2.188rem;
    }
}
</style>
