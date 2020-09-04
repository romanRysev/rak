export const state = () => ({
  instaCards: [
    { id: 1, photo: '' },
    { id: 2, photo: '' },
    { id: 3, photo: '' },
    { id: 4, photo: '' },
    { id: 5, photo: '' },
    { id: 6, photo: '' },
    { id: 7, photo: '' },
    { id: 8, photo: '' },
  ],
});

export const mutations = {};

export const getters = {
  getinstaCards(state) {
    return state.instaCards;
  },
};
