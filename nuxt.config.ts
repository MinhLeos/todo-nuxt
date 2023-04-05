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
    app: {
        pageTransition: { name: 'page', mode: 'default' },
        layoutTransition: { name: 'layout', mode: 'default' }
    },
    hooks: {
        'build:before': () => { console.log('Nuxt Hooks before') },
        'build:done': () => { console.log('Nuxt Hooks') }
    }
})
