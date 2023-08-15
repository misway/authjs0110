import { resolve } from "node:path"

export default defineNuxtConfig({
  modules: [
    '@hebilicious/authjs-nuxt',
  ],
  runtimeConfig: {
    authJs: {
        secret: 'temp_secret'
    },
    google: {
        clientId: process.env.NUXT_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET,
    },
    public: {
        authJs: {
            baseUrl: 'https://authjs0110.pages.dev',
            verifyClientOnEveryRequest: true
        }
    }
  },
  alias: {
    "cookie": resolve(__dirname, "node_modules/cookie"),
    "jose": resolve(__dirname, "node_modules/jose/dist/browser/index.js"),
    // "@panva/hkdf": resolve(__dirname, "node_modules/@panva/hkdf/dist/web/index.js")
  },
})
