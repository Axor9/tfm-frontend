<script setup lang="ts">
import { useWeb3Store } from '~~/store/web3'
import { State } from '~~/types/type'

const web3Store = useWeb3Store()
const stage = ref<string>('default')
const currentState = ref<State | undefined>(web3Store.currentState)

const stageImage = computed(() => {
    if (currentState.value?.state == StatesTypes.Rest) {
        stage.value = 'level_pick'
    }

    if (currentState.value?.state == StatesTypes.Final) {
        stage.value =
            currentState.value.player.health <= 0 ? 'game_over' : 'win'
    }

    if (currentState.value?.state == StatesTypes.Battle) {
        stage.value =
            currentState.value.enemy === 'mimic'
                ? 'mimic'
                : `${currentState.value.level.name}_${currentState.value.enemy}`
    }

    if (currentState.value?.state == StatesTypes.Treasure) {
        stage.value = 'treasure'
    }

    return `images/stages/${stage.value}.png`
})

const pageMounted = ref<boolean>(false)

onMounted(() => {
    pageMounted.value = true
})
</script>

<template>
    <div class="Stage">
        <img
            v-if="pageMounted"
            class="Stage-img"
            :src="stageImage"
            alt="level image"
        />
    </div>
</template>

<style lang="scss">
.Stage {
    &-img {
        width: 35rem;
    }
}
</style>
