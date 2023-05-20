<script setup lang="ts">
onMounted(async () => {})
</script>

<template>
    <div class="Index">
        <options-hud />
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
