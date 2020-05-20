export const state = () => ({
  social: [
    {
      id: '1',
      name: 'Facebook',
      src: '/images/social/fb.svg',
      link:
        'https://www.facebook.com/sharer.php?src=sp&u=https%3A%2F%2Fraklechitsa.ru%2F&title=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&utm_source=share2',
    },
    {
      id: '2',
      name: 'Twitter',
      src: '/images/social/twitter.svg',
      link:
        'https://twitter.com/intent/tweet?text=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&url=https%3A%2F%2Fraklechitsa.ru%2F&utm_source=share2',
    },
    {
      id: '3',
      name: 'ВКонтакте',
      src: '/images/social/vk.svg',
      link:
        'https://vk.com/share.php?url=https%3A%2F%2Fraklechitsa.ru%2F&title=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&utm_source=share2',
    },
    {
      id: '4',
      name: 'Одноклассники',
      src: '/images/social/ok.svg',
      link:
        'https://connect.ok.ru/offer?url=https%3A%2F%2Fraklechitsa.ru%2F&title=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&utm_source=share2',
    },
    {
      id: '5',
      name: 'Instagram',
      src: '/images/social/instagram.svg',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      id: '6',
      name: 'YouTube',
      src: '/images/social/youtube.svg',
      link:
        'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
    },
  ],
  socialShown: false,
});

export const mutations = {
  toggleSocial(state) {
    return (state.socialShown = !state.socialShown);
  },
};

export const getters = {
  getSocial(state) {
    return state.social;
  },
  getSocialShown(state) {
    return state.socialShown;
  },
};
