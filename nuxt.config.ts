// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/style.css',
    ],
    plugins: [
        // { src: `~/plugins/tooltip`, mode: 'client'},
        // { src: `~/plugins/noti/index.ts`, mode: 'client'},
        { src: `~/plugins/old/notification.ts`, mode: 'client'},
        { src: `~/plugins/plugin.client.ts`, mode: 'server'},
        { src: `~/plugins/plugin.server.ts`, mode: 'client'},
    ],
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': 'postcss-nesting',
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        "@nuxtjs/tailwindcss",
        '@pinia/nuxt',
        '@vueuse/nuxt',
    ],
    buildModules: [
        '@nuxtjs/style-resources',
    ],
    srcDir: 'src/',
    hooks: {
        'build:done': () => { console.log('Nuxt Hooks') }
    },
    // routeRules: {
    //     '/' : {ssr: false}
    // },
    // layouts: {
    //     default: '/layouts/default.vue',
    //     custom: '/layouts/custom.vue',
    // }
})
