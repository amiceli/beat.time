<template>
    <div class="information" v-bind:class="getThemeClass()">
        <section>
            <div class="container">
                <h2>
                    Conversions
                </h2>
                <div>
                    <span>1 .beat</span>
                    <span>86,4 seconds</span>
                </div>
                <div>
                    <span>1000 .beat</span>
                    <span>1 day</span>
                </div>
                <h2>
                    But why ?
                </h2>
                <p>
                    Beat time also known as
                    <b>Swatch Internet Time</b> was created by
                    <a target="_blank" href="https://fr.wikipedia.org/wiki/Swatch_Group">Swatch</a> in 1998.
                    <br>
                    Need more ? Take a look on beat time
                    <a target="_blank" href="https://en.wikipedia.org/wiki/Swatch_Internet_Time">wikipedia page</a>.
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
    .information {
        height: calc(100% - 80px);

        &.is--dark {
            background : rgb(31, 31, 31);

            h2, p {
                color : white;
            }

            div:not(.container) span {
                color : white;
            }

            a {
                color : rgba(77, 145, 224, 1);
            }
        }

        a {
            text-decoration: none;
            color: #27398E;
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