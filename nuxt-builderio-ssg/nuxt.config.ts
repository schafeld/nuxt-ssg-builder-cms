// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['nuxt-builderio'],
  runtimeConfig: {
    public: {
      builderio: {
        apiKey: process.env.BUILDER_PUBLIC_KEY
      }
    }
  },
  nitro: {
    prerender: {
      routes: ['/about-me'] // Pre-render our target page
    },
    // // For continuous updates without rebuilds:
    // routeRules: {
    //   '/about-me': { swr: 3600 } // Regenerate every hour
    // }
  }
})
