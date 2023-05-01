<script setup lang="ts">
import { useWeb3Store } from '~~/store/web3'
import { Option } from '~~/types/type'

const web3Store = useWeb3Store()
const options = ref<Option[]>(web3Store.currentState?.options ?? [])

onMounted(async () => {})
</script>

<template>
    <div>
        <wallet />
        <div v-for="option in options" :key="option.option">
            <option-button :option="option" />
        </div>
    </div>
</template>
