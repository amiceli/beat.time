<template lang="html">
    <header class="main-header" v-bind:class="getThemeClass()">
        <div class="flex">
            <div class="square" v-on:click="goToHome()"></div>
            <h1 v-on:click="goToHome()">
                Beat time
            </h1>
        </div>
        <div class="flex">
            <router-link to="what-the-beat">
                About beat time
            </router-link>
            <router-link to="about">
                About this project
            </router-link>
        </div>
    </header>
</template>

<script>
    import ThemeMixin from '../mixins/ThemeMixin'

    export default {
        methods : {
            goToHome () {
                this.$router.push({name : 'home'})
            }
        },

        mixins : [ThemeMixin]
    }
</script>

<style lang="scss" scoped>
    @import "~@/scss/mixins";

    $headerSize: 80px;

    .main-header {
        @include size($headerSize, 100%);

        overflow: hidden;
        display: flex;

        &.is--dark {
            .square {
                background : #fff;
            }
            h1, a {
                color : #fff;
            }
        }

        .flex {
            flex: 1;
            line-height: $headerSize;
            overflow: hidden;
            padding-left: 63px;

            &:last-of-type {
                text-align: right;
                padding-right: 63px;
            }
        }

        .square {
            @include size(1.5em, 1.5em);

            background-color: #373735;
            display: inline-block;
            cursor: pointer;

            & + h1 {
                cursor: pointer;
            }
        }

        h1 {
            margin: 0;
            display: inline-block;
            color: #373735;
            font-family: "Exo Light";
            font-size: 2em;
            font-weight: 300;
            padding-left: 2px;
        }

        a {
            opacity: 0.69;
            color: #373735;
            font-family: "Exo Light";
            font-size: 1em;
            text-decoration: none;

            &:last-of-type {
                padding-left: 7px;
            }
        }
    }
</style>