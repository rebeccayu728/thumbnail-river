import axios from 'axios';

const state = {
  data: null,
};

// Getter functions
const getters = {
  data: function data() {
    return state.data;
  },
};

// Actions
const actions = {
  loadTop10: function loadTop10(context) {
    axios.get('https://api.jsonbin.io/b/60b8605392af611956fb8587')
      .then((response) => response.data)
      .then((data) => {
        context.commit('SAVE_DATA', data);
      });
  },
};

// Mutations
/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  SAVE_DATA: function SAVE_DATA(s, data) {
    s.data = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
