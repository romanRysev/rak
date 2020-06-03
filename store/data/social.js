export const state = () => ({
  socialShown: false,
});

export const mutations = {
  toggleSocial(state) {
    return (state.socialShown = !state.socialShown);
  },
};

export const getters = {
  getSocialShown(state) {
    return state.socialShown;
  },
};
