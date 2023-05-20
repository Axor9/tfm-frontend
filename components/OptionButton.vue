<script setup lang="ts">
import { useWeb3Store } from '~~/store/web3'
import { Option } from '~~/types/type'
import { hexToString } from '~~/utils/functions'

const props = defineProps<{ option: Option; amount: number }>()

const web3Store = useWeb3Store()
const config = useRuntimeConfig()

const optionText = ref<string>(hexToString(props.option.option))

const selectOption = () => {
    web3Store.wallet?.voteOption(
        props.option.option,
        props.amount,
        web3Store.currentState?.voting ?? '',
        web3Store.account ?? ''
    )
}
</script>
<template>
    <div class="Option">
        <button class="Option-button" @click="selectOption">
            <div class="Option-button-container">
                <img
                    class="Option-button-img"
                    src="~/assets/images/frames/button.png"
                    alt=""
                />
                <span class="Option-button-text" :title="optionText">{{
                    optionText
                }}</span>
            </div>
        </button>
    </div>
</template>

<style scoped lang="scss">
.Option {
    &-button {
        display: inline-block;
        background: transparent;
        border: none;
        cursor: pointer;
    }
    &-button-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &-button-img {
        display: block;
        width: 100%;
    }

    &-button-text {
        max-width: 50%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
        font-weight: bolder;
        font-family: 'Arial', sans-serif; /* Cambia 'Arial' por la fuente que desees */
        color: black;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
