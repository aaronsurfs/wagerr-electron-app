<template>

    <div id="app" class="bg-gradient">

        <SplashScreen v-if="!walletLoaded"></SplashScreen>

        <div class="wrapper" v-else>

            <div class="nav">

                <top-nav-bar></top-nav-bar>

            </div>

            <div class="main-content">

                <transition name="fade" mode="out-in">

                    <router-view></router-view>

                </transition>

            </div>

        </div>

    </div>

</template>

<script>

    import Vuex from 'vuex'
    import TopNavBar from '@/components/TopNavBar.vue';
    import SplashScreen from "@/components/splashscreen/SplashScreen";

    export default {
        name: 'App',
        components: {SplashScreen, TopNavBar },

        computed: {
            ...Vuex.mapGetters([
                'walletLoaded'
            ])
        }
    }

</script>
