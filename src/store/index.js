import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    createUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    register({ commit }, authData) {
      firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password)
        .then((response) => {
          response.user.updateProfile({
            displayName: authData.userName,
          });
          commit('createUser', response.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
});
