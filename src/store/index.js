import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: '',
    errorMsg: '',
  },
  getters: {
    userName: (state) => state.userName,
    errorMsg: (state) => state.errorMsg,
  },
  mutations: {
    createUser(state, userName) {
      state.userName = userName;
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
          commit('createUser', authData.userName);
          commit('createErrorMsg');
        })
        .catch((error) => {
          commit('createErrorMsg', error.message);
        });
    },
    
  },
});
