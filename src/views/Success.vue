<template>
    <div id="screen" class="min-h-screen flex">
        <div id="center-container-blur" class="flex flex-1 items-center px-2 backdrop-blur-xl bg-black/50 justify-center">

            <div id="message" class="text-center">
                <h1 class="text-white text-3xl">Congrats! 🎉🎉</h1>
                <p class="text-white leading-10">You have successfully signed in.</p>

                <p class="text-gray-200 py-10">Thanks for try my app. I hope you liked it! :)</p>

                <!-- social link to github project, personal web, portfolio -->


                <div class="space-y-5 pt-5">
                    <button
                        @click="signOut"
                        class="w-full text-center py-3 rounded-xl text-gray-100 bg-black/50 focus:outline-none hover:bg-black/70">
                        Sign Out
                    </button>
                    <button id="sign-with-microsoft" @click="signInWithMicrosoft" class="w-full py-3 flex border-2 bg-white/10 border-white/10 rounded-xl text-gray-100 justify-center items-center hover:bg-white/20">
                        Delete my account
                    </button>
                </div>
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