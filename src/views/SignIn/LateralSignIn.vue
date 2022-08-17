<template>
  <div id="screen" class="min-h-screen flex">
    <div class="flex-1 w-full">
        <h1>Title</h1>
    </div>
    <div class="flex flex-1 items-center px-2 backdrop-blur-xl bg-black/50 rounded-l-3xl justify-center">

        <!-- login form -->
        <div class="container max-w-md px-6 py-8 text-black w-full">

            <!-- login header -->
            <div class="mb-5">
                <h1 class="mb-2 text-3xl text-gray-200">Log In</h1>
                <span class="text-gray-400 pb-5 text-sm">Tell us who you are!</span>
            </div>

            <!-- email / user -->
            <div class="flex mb-4 w-full rounded-xl border-2 border-white/10 hover:bg-black/10  pro-input">
                <div class="border-r border-white/10 self-center">
                    <img src="../../components/icons/user-shape2.svg" class="w-4 ml-4 mr-4 log-svg" alt="">
                </div>
                <input 
                    type="text"
                    v-model="email"
                    class="bg-transparent w-full p-3 rounded-xl inside-input focus:outline-none caret-white/50 text-white"
                    name="email"
                    placeholder="Username / Email" />
            </div>

            <!-- password -->
            <div class="flex w-full rounded-xl border-2 border-white/10 hover:bg-black/10  pro-input">
                <div class="border-r border-white/10 self-center">
                    <img src="../../components/icons/password.svg" class="w-4 ml-4 mr-4 log-svg" alt="">
                </div>
                <input 
                    type="password"
                    v-model="password"
                    class="bg-transparent w-full p-3 rounded-xl inside-input focus:outline-none caret-white/50 text-white"
                    name="password"
                    placeholder="Password" />
            </div>

            <!-- divider -->
            <div class="relative flex py-5 items-center">
                <div class="flex-grow border-t-2 border-white/10"></div>
                <span class="flex-shrink mx-4 text-white/50">or</span>
                <div class="flex-grow border-t-2 border-white/10"></div>
            </div>

            <!-- social login -->
            <SocialLogin />

            <!-- remember and forgot password -->
            <div class="flex justify-between m-3">
                <div class="form-check">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label inline-block text-white/50 text-sm" for="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <div>
                    <a href="" class="text-white text-sm">Forgot password?</a>
                </div>
            </div>

            <button
                type="submit"
                @click="signIn"
                class="w-full text-center py-3 rounded-xl text-gray-100 bg-black/50 focus:outline-none hover:bg-black/70">
                Sign In
            </button>

            <!-- call to sign up -->
            <div class="text-white/50 mt-6">
                Already don't have an account? 
                <router-link class="no-underline text-white" to="/sign-up">Sign Up</router-link>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
import SocialLogin from '../../components/SocialLogin.vue';

export default {
    name: 'LateralSignIn',
    components: {
        SocialLogin
    },
}
</script>

<style>

/* svgs */
.log-svg {
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(2deg) brightness(102%) contrast(104%);
}

/* Fix: Removing input background colour for Chrome autocomplete */
/* https://stackoverflow.com/questions/2781549/removing-input-background-colour-for-chrome-autocomplete */

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s;
    color: #fff;
}

/* Change text in autofill textbox */
input:-webkit-autofill{
    -webkit-text-fill-color: #fff !important;
}

/* background */

#screen {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

</style>