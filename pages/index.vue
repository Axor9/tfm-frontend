<script setup lang="ts">
import { useWeb3Store } from '~~/store/web3'

const web3Store = useWeb3Store()
</script>

<template>
    <div class="Index">
        <div
            class="Index-options"
            v-if="(web3Store.currentState?.options.length ?? 0) > 0"
        >
            <options-hud />
        </div>
        <div class="Game">
            <hud />
            <stage />
        </div>
    </div>
</template>

<style scoped lang="scss">
.Index {
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;

    &-options {
        position: absolute;
        right: 0;
        margin: 0 60px;
    }
}

.Game {
    position: relative;
    background-color: #474747;
    width: 50rem;
    height: 31.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
