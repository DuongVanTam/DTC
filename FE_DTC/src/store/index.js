import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './modules/app'
import appConfig from './modules/app-config'
import verticalMenu from './modules/vertical-menu'
// eslint-disable-next-line import/no-cycle
import thuTucNoiBo from '../modules/thu-tuc-noi-bo/store'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    common,
    thuTucNoiBo,
  },
  strict: process.env.DEV,
})
