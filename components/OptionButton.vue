<script setup lang="ts">
import { useWeb3Store } from '~~/store/web3'
import { Option } from '~~/types/type'

const props = defineProps<{ option: Option }>()

const web3Store = useWeb3Store()
const config = useRuntimeConfig()

const selectOption = () => {
    web3Store.wallet?.voteOption(
        props.option.option,
        1,
        web3Store.currentState?.voting ?? '',
        web3Store.account ?? ''
    )
}
</script>
<template>
    <div>
        <button @click="selectOption">{{ option.option }}</button>
    </div>
</template>
