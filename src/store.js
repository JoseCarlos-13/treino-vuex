import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: []
  },

  getters: {
    valuePeople() {
      return this.state.people;
    }
  },

  mutations: {
    addPerson(state, payload) {
      return state.people.push(payload);
    },

    removePerson(state) {
      return state.people.pop();
    },

    clearPeople(state) {
      return (state.people = []);
    }
  },

  actions: {
    addPerson({ commit }, payload) {
      setTimeout(() => {
        commit("addPerson", payload);
      }, 1000);
    },

    removePerson({ commit }) {
      setTimeout(() => {
        commit("removePerson");
      }, 1000);
    }
  }
});
