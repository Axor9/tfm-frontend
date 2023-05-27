<template>
    <div class="Header">
        <nav class="Header-nav">
            <a @click="$router.push('/')">Play</a>
            <a @click="$router.push('/history')">History</a>
            <a @click="$router.push('/help')">Help</a>
        </nav>
        <div class="Header-wallet">
            <wallet />
        </div>
    </div>
</template>

<style scoped lang="scss">
.Header {
    background-color: #474747;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    &-wallet {
        position: absolute;
        right: 0;
    }

    &-nav {
        font-size: xx-large;
        display: flex;
        flex-direction: row;
        gap: 20px;

        a {
            text-decoration: none;
            color: white;
            cursor: pointer;
        }
    }
}
</style>
