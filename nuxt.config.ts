// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/style.css',
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
