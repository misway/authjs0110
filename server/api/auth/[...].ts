import GoogleProvider from "@auth/core/providers/google"
import type { AuthConfig } from "@auth/core/types"
import { NuxtAuthHandler } from "#auth"

const runtimeConfig = useRuntimeConfig()

export const authOptions: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  providers: [
    GoogleProvider({
      clientId: runtimeConfig.google.clientId,
      clientSecret: runtimeConfig.google.clientSecret,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('signIn called')
      console.log(profile)

      return true
    },
    async session({ session, user, token }) {
      console.log('session called')
      console.log(session)

      return session
    },
  },
}

export default NuxtAuthHandler(authOptions, runtimeConfig)
