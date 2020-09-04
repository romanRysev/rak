import axios from 'axios';

export const state = () => ({});

export const mutations = {
  setBlocks(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchBlocks(state) {
    return axios.get('https://strapi.kruzhok.io/blocks').then(res => {
      return state.commit('setBlocks', {
        name: 'blocks',
        value: res.data,
      });
    });
  },
};

export const getters = {
  getBlocks(state) {
    return state.blocks;
  },
};
