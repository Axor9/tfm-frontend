<script setup lang="ts">
import { useWeb3Store } from '~~/store/web3'
import { State } from '~~/types/type'
import {
    getStates,
    generateText,
    generateWinnerOptionText,
} from '~~/utils/functions'

const web3Store = useWeb3Store()
const states = ref<State[]>([])
const statesText = ref<string[]>([])

onBeforeMount(async () => {
    states.value = await getStates()

    for (const state of states.value) {
        statesText.value.push(generateText(state))
        const winnerOptionText = await generateWinnerOptionText(state)
        if (winnerOptionText) statesText.value.push(winnerOptionText)
    }
})
</script>

<template>
    <div class="History">
        <ul class="History-list">
            <li>Our hero embarks on a new adventure.</li>
            <li v-for="text in statesText" :key="text">
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
