<template>
    <div class="main-app">
        <div class="beat-circle">
            <BeatCircle></BeatCircle>
        </div>
        <div class="beat-clock">
            <BeatClock></BeatClock>
        </div>
        <div class="current-clock">
            <CurrentTimeClock></CurrentTimeClock>
        </div>
        <div class="color-side">
            <ThemeSwitcher></ThemeSwitcher>
        </div>
    </div>
</template>

<script>
    import BeatCircle from '@/components/BeatCircle.vue'
    import Header from '@/components/Header.vue'
    import BeatClock from '@/components/BeatClock.vue'
    import CurrentTimeClock from '@/components/CurrentTimeClock.vue'
    import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

    export default {
        components : {BeatCircle, Header, BeatClock, CurrentTimeClock, ThemeSwitcher}
    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Exo:300,400,500,600');

    .main-app {
        padding-bottom: 40px;

        .beat-circle, .beat-clock {
            text-align: center;
        }

        .current-clock {
            text-align: right;
            position: absolute;
            right: 63px;
            height: 80px;
            line-height: 80px;
            bottom: 0;
        }

        .color-side {
            position: absolute;
            left: 15px;
            bottom: 15px;
        }
    }
</style>
