export const state = () => ({
  contactFormOpened: false,
  quizFormOpened: false,
});

export const mutations = {
  openContactForm(state) {
    state.contactFormOpened = true;
  },
  openquizForm(state) {
    state.quizFormOpened = true;
  },
};
