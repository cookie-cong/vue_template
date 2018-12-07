import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import demo from "./demo"
var store = new Vuex.Store({
    modules:{
        demo
    }
})
export default store