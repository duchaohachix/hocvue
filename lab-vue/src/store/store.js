import { createStore } from 'vuex'
import state from './state.js';
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'
const store = createStore({
    state,
    getters,
    mutations,
    actions,

})
export default store;