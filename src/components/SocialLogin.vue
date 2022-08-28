<template>
    <div class="grid space-y-2">
        <button id="sign-with-apple" @click="signInWithApple" class="flex border-2 bg-white/10 border-white/10 rounded-xl text-gray-100 p-3 text-sm justify-center items-center hover:bg-white/20">
            <img src="../components/icons/apple-gray.svg" alt="" class="w-6 mr-3">
            Continue with Apple
        </button>
        <button id="sign-with-google" @click="signInWithGoogle" class="flex border-2 bg-white/10 border-white/10 rounded-xl text-gray-100 p-3 text-sm justify-center items-center hover:bg-white/20">
            <img src="../components/icons/google.svg" alt="" class="w-5 mr-3">
            Continue with Google
        </button>
        <button id="sign-with-microsoft" @click="signInWithMicrosoft" class="flex border-2 bg-white/10 border-white/10 rounded-xl text-gray-100 p-3 text-sm justify-center items-center hover:bg-white/20">
            <img src="../components/icons/microsoft.svg" alt="" class="w-4 mr-3">
            Continue with Microsoft
        </button>
    </div>
</template>

<script>
import { signInGoogle } from '../firebase/utils'

const signInWithGoogle = () => signInGoogle()

export default {
    name: 'SocialLogin',
        methods: {
        signInWithApple() {
            console.log('sign in with apple');
        },
        signInWithGoogle,
        signInWithMicrosoft() {
            console.log('sign in with microsoft');
        }
    },
}
</script>

<style>

</style>