<template>
  <div style="margin: 20px">
    <div>
      <a href="/api/auth/signin" style="margin-right:20px">
        Native Link Sign in
      </a>
      <button @click="signIn(`google`)" style="margin-right:20px">
        JS Google Sign In
      </button>
      <button @click="signOut()" class="btn">
        Sign Out
      </button>
    </div>
    <div class="mt-5">
      <pre>{{ status }}</pre>
      <pre>{{ session?.user }}</pre>
      <pre>{{ cookies }}</pre>
    </div>
  </div>
</template>
<script setup>
  const { signIn, signOut, session, status, cookies, getProviders } = useAuth()
</script>