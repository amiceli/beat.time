import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const END_OF_DAY = 1000

const BeatStore = new Vuex.Store({
    state : {
        beatTime : null
    },
    mutations : {
        setBeatTime (state, beatTime) {
            state.beatTime = beatTime
        },
        addBeat (state) {
            if (state.beatTime === END_OF_DAY) {
                state.beatTime = 0
            } else {
                state.beatTime = state.beatTime + 1
            }
        }
    },
    actions : {
        detectBeatTime (ctx) {
            let date = new Date()

            let hours   = (date.getHours() * 41.666)
            let minutes = (date.getMinutes() * 0.6944)
            let seconds = (date.getSeconds() * 0.01157)

            let beat = Math.round(hours + minutes + seconds)

            console.log (beat)
            ctx.commit('setBeatTime', beat)
        }
    }
})

export default BeatStore