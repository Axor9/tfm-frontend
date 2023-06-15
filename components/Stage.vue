<script setup lang="ts">
import { useWeb3Store } from '~~/store/web3'

const web3Store = useWeb3Store()
const stage = ref<string>('default')
const stageImage = computed(() => {
    if (web3Store.currentState?.state == StatesTypes.Rest) {
        stage.value = 'level_pick'
    }

    if (web3Store.currentState?.state == StatesTypes.Final) {
        stage.value =
            web3Store.currentState.player.health <= 0 ? 'game_over' : ''
    }

    if (web3Store.currentState?.state == StatesTypes.Battle) {
        stage.value =
            web3Store.currentState.enemy === 'mimic'
                ? 'mimic'
                : `${web3Store.currentState.level.name}_${web3Store.currentState.enemy}`
    }

    if (web3Store.currentState?.state == StatesTypes.Treasure) {
        stage.value = 'treasure'
    }

    return `images/stages/${stage.value}.png`
})
</script>

<template>
    <div class="Stage">
        <img class="Stage-img" :src="stageImage" alt="level image" />
    </div>
</template>

<style lang="scss">
.Stage {
    &-img {
        width: 35rem;
    }
}
</style>
