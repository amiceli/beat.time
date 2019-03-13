<template>
    <div class="beat-clock" v-bind:class="getThemeClass()">
        <span class="symbol">@</span>
        <div class="beats-list">
            <span >
                {{ beatTime }}
            </span>
        </div>
    </div>
</template>

<script>
    import BeatStore from '@/stores/BeatStore.js'
    import ThemeMixin from '../mixins/ThemeMixin'

    export default {

        store : BeatStore,

        mixins : [ThemeMixin],

        computed : {
            beatTime () {
                return this.$store.state.beatTime
            }
        },

        mounted () {
            this.$store.dispatch('detectBeatTime')
        }
    }
</script>

<style scoped lang="scss">

    .beat-clock {
        text-align: left !important;
        margin-top: 40px;
        height: 53px;
        position: relative;
        display: inline-block;
        width: 130px;
        overflow: hidden;

        &.is--dark {
            span.symbol {
                color : rgba(77, 145, 224, 1) !important;
            }
            span:not(.symbol) {
                color : white;
            }
        }

        .beats-list {
            display: inline-block;
            position: absolute;
            right: 2px;
            top: 0;
            transition: all 1s linear;

            span {
                display: block;
                text-align: right;
                height: 53px;
            }
        }

        span {
            font-family: "Exo Light";
            font-size: 40px;

            &:not(.symbol) {
                color: #373735;
                position: relative;
                top: 2px;
            }

            &.symbol {
                color: #C80000;
            }
        }
    }
</style>