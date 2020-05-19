export const state = () => ({
  storyCards: [
    {
      id: 1,
      photo: '/images/card__photo/photo1.jpg',
      title: 'Владимир Тен1',
      subtitle:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака',
      date: '20 апреля 2018',
    },
    {
      id: 2,
      photo: '/images/card__photo/photo1.jpg',
      title: 'Владимир Тен2',
      subtitle:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака',
      date: '20 апреля 2018',
    },
    {
      id: 3,
      photo: '/images/card__photo/photo1.jpg',
      title: 'Владимир Тен3',
      subtitle:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака',
      date: '20 апреля 2018',
    },
    {
      id: 4,
      photo: '/images/card__photo/photo1.jpg',
      title: 'Владимир Тен4',
      subtitle:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака',
      date: '20 апреля 2018',
    },
    {
      id: 5,
      photo: '/images/card__photo/photo1.jpg',
      title: 'Владимир Тен5',
      subtitle:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака',
      date: '20 апреля 2018',
    },
    {
      id: 6,
      photo: '/images/card__photo/photo1.jpg',
      title: 'Владимир Тен6',
      subtitle:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака',
      date: '20 апреля 2018',
    },
    {
      id: 7,
      photo: '/images/card__photo/photo1.jpg',
      title: 'Владимир Тен7',
      subtitle:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака',
      date: '20 апреля 2018',
    },
    {
      id: 8,
      photo: '/images/card__photo/photo1.jpg',
      title: 'Владимир Тен8',
      subtitle:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака',
      date: '20 апреля 2018',
    },
  ],
  currentStory: {},
});

export const mutations = {
  setCurrentStory(state, route) {
    return (state.currentStory = state.storyCards[route.params.id]);
  },
};

export const getters = {
  getStories(state) {
    return state.storyCards;
  },

  getCurrentStory(state) {
    return state.currentStory;
  },
};
