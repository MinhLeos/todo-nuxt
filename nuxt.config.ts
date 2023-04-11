import { NuxtPage } from "nuxt/schema"

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
        'build:done': () => { console.log('Nuxt Hooks') },
        'pages:extend' (pages) {
            // add a route
            pages.push({
              name: 'profile',
              path: '/profile',
              file: '~/extra-pages/profile.vue'
            })
            // remove routes
            // function removePagesMatching (pattern: RegExp, pages: NuxtPage[] = []) {
            //   const pagesToRemove = []
            //   for (const page of pages) {
            //     if (pattern.test(page.file)) {
            //       pagesToRemove.push(page)
            //     } else {
            //       removePagesMatching(pattern, page.children)
            //     }
            //   }
            //   for (const page of pagesToRemove) {
            //     pages.splice(pages.indexOf(page), 1)
            //   }
            // }
            // removePagesMatching(/\.ts$/, pages)
          }
    },
    // routeRules: {
    //     '/' : {ssr: false}
    // },
    // layouts: {
    //     default: '/layouts/default.vue',
    //     custom: '/layouts/custom.vue',
    // }
})
