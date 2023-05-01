// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt'],
    runtimeConfig: {
        public: {
            network: {
                id: '',
                name: '',
                provider: '',
            },
            contract: {
                address: '',
                abi: '',
            },
        },
    },
})
