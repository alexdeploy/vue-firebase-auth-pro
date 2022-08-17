<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign In</h1>

            <input 
                type="text"
                v-model="email"
                class="block border w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email" />

            <input 
                type="password"
                v-model="password"
                class="block border w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password" />

            <button
                type="submit"
                @click="signIn"
                class="w-full text-center py-3 rounded text-white hover:bg-slate-400 bg-slate-500 focus:outline-none my-1">
                Sign In
            </button>
        </div>

        <div class="text-grey-dark mt-6">
            Already don't have an account? 
            <router-link class="no-underline border-b border-blue text-blue" to="/sign-up">Sign Up</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>