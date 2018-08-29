import axios from 'axios';

export const state = () => ({
  triggers: [],
});

export const mutations = {
  setContent(state, triggers) {
    state.triggers = triggers;
  },
};

export const actions = {
  nuxtServerInit: ({ commit }) =>
    axios
      .get('http://api.hundo.online')
      .then(res => {
        commit('setContent', res.data);
      })
      .catch(e => console.log(e)),
};

export const getters = {};
