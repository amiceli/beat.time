<template>
    <div class="theme-switcher" v-bind:class="getThemeClass()">
        <b>
            Choose your side
        </b>
        <div v-bind:class="{'is--selected' : theme === 'light'}">
            <span v-on:click="setTheme('light')"
                  class="is--blue"
                  v-bind:class="{'is--top' : theme === 'light', 'is--bottom' : theme === 'dark'}"
            ></span>
            <span v-on:click="setTheme('light')">Light</span>
        </div>
        <div v-bind:class="{'is--selected' : theme === 'dark'}">
            <span v-on:click="setTheme('dark')"
                  class="is--white"
                  v-bind:class="{'is--bottom' : theme === 'light', 'is--top' : theme === 'dark'}"
            ></span>
            <span v-on:click="setTheme('dark')">dark</span>
        </div>
    </div>
</template>

<script>
    import ThemeStore from "@/stores/ThemeStore"
    import ThemeMixin from '../mixins/ThemeMixin'

    export default {

        store : ThemeStore,

        mixins : [ThemeMixin],

        methods : {
            setTheme (themeColor) {
                this.$store.commit('setTheme', themeColor)
            }
        },

        computed : {
            theme () {
                return this.$store.state.theme
            }
        }
    }
</script>

<style scoped lang="scss">
    .theme-switcher {
        width: 200px;
        font-family: "Exo Light";

        &.is--dark {
            b {
                color : white;
            }

            span:not(.is--white), span:not(.is--blue) {
                color : white;
            }

            span.is--blue {
                background-color : rgba(77, 145, 224, 1) !important;
            }
            span.is--white+span {
                color : rgba(77, 145, 224, 1) !important;
            }
        }

        b {
            display: block;
            font-size: 20px;
            margin-bottom: 10px;
        }

        div {
            padding-bottom: 8px;
            padding-left: 20px;

            &.is--selected {
                span:last-of-type {
                    color : #27398E;
                }
            }

            &:first-of-type {
                span:first-of-type {
                    background-color : #27398E;
                }
            }

            &:last-of-type {
                span:first-of-type {
                    background: #ddd;
                }
            }

            span {
                cursor: pointer;

                &.is--white {
                    z-index: 2;

                    &.is--bottom {
                        top: 4px;
                    }

                    &.is--top {
                        top : -29px;
                    }
                }

                &.is--blue {
                    z-index: 3;

                    &.is--bottom {
                        top: 37px;
                    }

                    &.is--top {
                        top: 4px;
                    }
                }
            }

            span:first-of-type {
                display: inline-block;
                width: 20px;
                height: 20px;
                border-radius: 20px;
                margin-right: 15px;
                position: relative;
                top: 4px;
                transition : top 0.5s ease-in-out;
            }
        }
    }
</style>