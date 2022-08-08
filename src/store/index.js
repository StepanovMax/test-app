import { createStore } from 'vuex';


const store = createStore({
  state () {
    return {
      count: 3,
    }
  },
  mutations: {
    increment (state) {
      state.count++;
    },
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
  },
  actions: {
    setIsLoggedIn(context) {
      context.commit('setIsLoggedIn');
    },
  }
});

export default store;