<template>
    <div class="grid space-y-2">
        <button class="flex border-2 bg-white/10 border-white/10 rounded-xl text-gray-100 p-3 text-sm justify-center items-center hover:bg-white/20">
            <img src="../components/icons/apple-gray.svg" alt="" class="w-6 mr-3">
            Continue with Apple
        </button>
        <button class="flex border-2 bg-white/10 border-white/10 rounded-xl text-gray-100 p-3 text-sm justify-center items-center hover:bg-white/20">
            <img src="../components/icons/google.svg" alt="" class="w-5 mr-3">
            Continue with Google
        </button>
        <button class="flex border-2 bg-white/10 border-white/10 rounded-xl text-gray-100 p-3 text-sm justify-center items-center hover:bg-white/20">
            <img src="../components/icons/microsoft.svg" alt="" class="w-4 mr-3">
            Continue with Microsoft
        </button>
        
    </div>
</template>

<script>
export default {
    name: 'SocialLogin',
}
</script>

<style>

</style>