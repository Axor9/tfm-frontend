// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt'],
    runtimeConfig: {
        app: {
            baseURL: '/tfm-frontend',
        },
        public: {
            network: {
                id: '',
                name: '',
                provider: '',
                chainId: 0,
            },
            contract: {
                address: '',
            },
        },
    },
})
