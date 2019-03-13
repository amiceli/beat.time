<template>
    <div class="current-time" v-bind:class="getThemeClass()">
        {{ currentTime }}
    </div>
</template>

<script>
    import ThemeMixin from '../mixins/ThemeMixin'

    export default {
        data () {
            return {
                currentTime : ''
            }
        },

        mixins : [ThemeMixin],

        created () {
            setInterval(() => {
                let {hours, minutes} = this.getTime()

                this.currentTime = `${hours}:${minutes}`
            }, 100)
        },

        methods : {
            getTime () {
                const now = new Date()

                let hours   = now.getHours()
                let minutes = now.getMinutes()

                minutes = minutes < 10 ? `0${minutes}` : minutes
                hours   = hours < 10 ? `0${hours}` : hours

                return {hours, minutes}
            }
        }
    }
</script>

<style scoped lang="scss">
    .current-time {
        display: inline-block;
        color: #373735;
        font-family: "Exo Light";
        font-size: 40px;

        &.is--dark {
            color : white;
        }
    }
</style>