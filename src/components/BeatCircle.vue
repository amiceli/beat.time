<template lang="html">
    <div class="beat-circle" v-bind:class="getThemeClass()">
        <div class="circle">
            <div class="rotate-center">
                <svg width="235px" height="25px" viewBox="0 0 235 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="beat-time" transform="translate(-693.000000, -500.000000)">
                            <circle id="Oval"
                                    v-bind:fill="getThemeColor()"
                                    cx="696.5" cy="512.5" r="3.5"></circle>
                            <circle id="Oval"
                                    v-bind:stroke="getThemeColor()"
                                    fill="#FFFFFF"
                                    cx="915.5"
                                    cy="512.5"
                                    r="11.5"
                            ></circle>
                            <path d="M699,512.5 L903.5,512.5" id="Line"
                                  v-bind:stroke="getThemeColor()"
                                  stroke-linecap="square"
                            ></path>
                            <circle id="Oval"
                                    stroke="#FFFFFF"
                                    fill="#FFFFFF"
                                    cx="720" cy="513" r="8"
                            ></circle>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="js">
    import BeatStore from '@/stores/BeatStore'
    import ThemeMixin from '../mixins/ThemeMixin'

    export default {
        store : BeatStore,

        mixins : [ThemeMixin],

        data () {
            return {
                rotate : 0,
                interval : null
            }
        },

        mounted () {
            const beatInSeconds      = 86.4
            const beatInMilliSeconds = beatInSeconds * 1000

            this.interval = setInterval(() => {
                BeatStore.commit('addBeat')
            }, beatInMilliSeconds)
        },

        methods : {
            getThemeColor () {
                return this.theme === 'dark' ? 'rgba(77, 145, 224, 1)' : '#27398E'
            }
        },

        destroyed () {
            clearInterval(this.interval)
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/scss/mixins";

    @mixin circle($size, $backgroundColor : #FFFFFF) {
        @include size($size, $size);

        background: $backgroundColor;
        border-radius: $size;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .beat-circle {
        display: inline-block;

        &.is--dark {
            .circle {
                background : transparent;
                border : 1px white solid;
            }
        }

        .circle {
            @include circle(392px);

            position: relative;
            border: 3px solid rgba(53, 53, 55, 0.09);

            .rotate-center {
                @include size(25px, 392px);

                position: absolute;
                left: 0;
                top: calc(50% - 25px / 2);
                box-sizing: content-box;
                transform: rotate(0deg);
                transform-origin: center;
                animation: rotate 86400ms infinite;
                animation-timing-function: linear;

                svg {
                    position: absolute;
                    right: 0;
                    left: 170px;
                }
            }
        }
    }
</style>