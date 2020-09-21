import axios from 'axios';

export const state = () => ({
  storyCards: [],
  currentStory: {},
  paginationMode: 'main',
  paginationExport: [],
});

export const mutations = {
  setStoryesProperties(state) {
    state.searchExport = [];
  },

  setSearchExport(state, req) {
    // возвращает полный список статей с ключевым словом
    return (state.searchExport = state.storyCards.filter(elem => {
      let inSearch = false;
      if (elem.text.includes(req)) {
        return (inSearch = true);
      }
      return inSearch;
    }));
  },

  setPaginationExport(state, payload) {
    // возвращает 1 страницу статей для пагинации (получает на вход данные о кол-ве статей на странице и номер страницы в пагинации).
    //Контент определяется в зависимости от режима (общий или поиск).
    const startElem = (payload.pageNumber - 1) * payload.pageSize;
    const endElem = startElem + payload.pageSize - 1;
    if (state.paginationMode == 'main') {
      return (state.paginationExport = state.storyCards.slice(
        startElem,
        endElem + 1
      ));
    }

    if (state.paginationMode == 'search') {
      return (state.paginationExport = state.searchExport.slice(
        startElem,
        endElem + 1
      ));
    }
  },

  setStories(state, { name, value }) {
    return (state[name] = value);
  },

  setCurrentStory(state, route) {
    return (state.currentStory = state.storyCards.find(
      card => card.id == route.params.id
    ));
  },

  setPaginationMode(state, mode) {
    return (state.paginationMode = mode.mode);
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

  getPaginationMode(state) {
    return state.paginationMode;
  },
};
