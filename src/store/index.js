import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: '',
    errorMsg: '',
  },
  getters: {
    user: (state) => state.user,
    errorMsg: (state) => state.errorMsg,
  },
  mutations: {
    createUser(state, user) {
      state.user = user.displayName;
      console.log(user);
      console.log(user.displayName);
    },
    createErrorMsg(state, error) {
      if (error) {
        state.errorMsg = error;
      } else {
        state.errorMsg = '';
      }
    },
  },
  actions: {
    register({ commit }, authData) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(authData.email, authData.password)
        .then((response) => {
          response.user.updateProfile({
            displayName: authData.userName,
          });
          commit('createUser', response.user);
          commit('createErrorMsg');
        })
        .catch((error) => {
          commit('createErrorMsg', error.message);
        });
    },
    
  },
});
