<script setup lang="ts">
import { useWeb3Store } from '~~/store/web3'

const web3Store = useWeb3Store()
const weapons = ref<string[]>(web3Store.currentState?.player.weapons ?? [])

const health = ref<number>(web3Store.currentState?.player.health ?? 0)
const healthBarPath = ref<string>(
    health.value > 75
        ? 'health_full'
        : health.value <= 75 && health.value > 50
        ? 'health_mid'
        : health.value <= 50 && health.value > 25
        ? 'health_midLow'
        : 'health_low'
)
</script>

<template>
    <div class="Hud">
        <div class="Hud-health">
            <img
                class="Hud-health-player"
                src="~/assets/images/icons/player_icon.png"
                alt="player_icon"
            />
            <img
                v-if="healthBarPath === 'health_full'"
                class="Hud-health-bar"
                src="/images/health/health_full.png"
                alt="health_image"
            />
            <img
                v-if="healthBarPath === 'health_mid'"
                class="Hud-health-bar"
                src="/images/health/health_mid.png"
                alt="health_image"
            />
            <img
                v-if="healthBarPath === 'health_midLow'"
                class="Hud-health-bar"
                src="/images/health/health_midLow.png"
                alt="health_image"
            />
            <img
                v-if="healthBarPath === 'health_low'"
                class="Hud-health-bar"
                src="/images/health/health_low.png"
                alt="health_image"
            />
        </div>
        <div class="Hud-weapons">
            <div
                class="Hud-weapons-weapon"
                v-for="weapon in weapons"
                :key="weapon"
            >
                <img
                    class="Hud-health-bar"
                    :src="`/images/weapons/${weapon}.png`"
                    alt="health_image"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.Hud {
    &-health {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        &-player {
            width: 35%;
        }
        &-bar {
            width: 65%;
            padding: 25px 0;
        }
    }

    &-weapons {
        position: absolute;
        bottom: 0;
        left: 0;

        margin: 0px 30px;

        display: flex;
        flex-direction: row;
        &-weapon {
            width: 100%;
        }
    }
}
</style>
