import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  // initial state
  state: {
    counters: []
  },
  // mutations
  mutations: {
    INCREMENT: (state, counterId) => {
      state.counters.$set(counterId, state.counters[counterId] + 1)
    },
    DECREMENT: (state, counterId) => {
      state.counters.$set(counterId, state.counters[counterId] - 1)
    },
    ADD_COUNTER: (state) => {
      state.counters.push(0)
    }    
  }
});
