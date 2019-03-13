<template>
    <div class="about" v-bind:class="getThemeClass()">
        <section>
            <div class="container">
                <h2>
                    About me
                </h2>
                <p>
                    I'm a french developer who loves JS technologies.
                </p>
                <h2>
                    For developer
                </h2>
                <p>
                    If like me you’re curious and like not well-know thing.
                    <br>
                    I create a JavaScript library to convert normal time to .beat time
                </p>
            </div>
        </section>
    </div>
</template>

<script>
    import ThemeMixin from '../mixins/ThemeMixin'

    export default {
        mixins : [ThemeMixin]
    }
</script>

<style scoped lang="scss">
    .about {
        height: 100%;

        &.is--dark {
            h2, p {
                color : white;
            }
        }

        section {
            height: calc(100% - 80px);
            display: flex;
            align-items: center;

            .container {
                display: inline-block;
            }
        }

        h2 {
            color: #373735;
            font-family: "Exo Light";
            font-size: 40px;
            padding-left: 115px;
            font-weight: 300;
        }

        p {
            padding-left: 117px;
            color: #373735;
            font-family: "Exo Light";
            font-size: 25px;
            font-weight: 300;
        }

        div:not(.container) {
            padding-left: 117px;
            margin-bottom: 13px;

            span {
                display: inline-block;
                width: 311px;
                color: #373735;
                font-family: "Exo Light";
                font-size: 20px;
            }
        }
    }
</style>