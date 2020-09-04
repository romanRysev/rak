import axios from 'axios';

export const state = () => ({
  storyCards: [],
  currentStory: {},
});

export const mutations = {
  setStoryesProperties(state) {
    state.searchExport = [];
    state.paginationExport = [];
  },

  setSearchExport(state, req) {
    return (state.searchExport = state.storyCards.filter(elem => {
      let inSearch = false;
      if (elem.text.includes(req)) {
        return (inSearch = true);
      }
      return inSearch;
    }));
  },

  setPaginationExport(state, payload) {
    const startElem = (payload.pageNumber - 1) * payload.pageSize;
    const endElem = startElem + payload.pageSize - 1;
    return (state.paginationExport = state.storyCards.slice(
      startElem,
      endElem + 1
    ));
  },

  setStories(state, { name, value }) {
    return (state[name] = value);
  },

  setCurrentStory(state, route) {
    return (state.currentStory = state.storyCards.find(
      card => card.id == route.params.id
    ));
  },
};

export const actions = {
  fetchStories(state) {
    return axios.get('https://strapi.kruzhok.io/stories').then(res => {
      return state.commit('setStories', {
        name: 'storyCards',
        value: res.data,
      });
    });
  },
};

export const getters = {
  getStories(state) {
    return state.storyCards;
  },

  getCurrentStory(state) {
    return state.currentStory;
  },

  getSearchExport(state) {
    return state.searchExport;
  },

  getPaginationExport(state) {
    return state.paginationExport;
  },
};
