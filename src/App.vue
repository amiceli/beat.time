<template>
    <div id="app" v-bind:class="getThemeClass()">
        <Header></Header>
        <router-view/>
        <TurnBlack></TurnBlack>
    </div>
</template>

<script>
    import Header from "./components/Header.vue"
    import TurnBlack from "./components/TurnBlack.vue"
    import ThemeMixin from './mixins/ThemeMixin'

    export default {
        components : {Header, TurnBlack},

        mixins : [ThemeMixin]
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Exo:300,400,500,600');

    html, body {
        padding: 0;
        margin: 0;
        height: 100%;
    }

    #app {
        height: 100%;

        &.is--dark {
            background : rgb(31, 31, 31);
        }
    }


</style>
