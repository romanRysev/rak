<template>
  <div class="social-popup">
    <overlay @overlayClick="showSocial" />
    <div class="social-popup__container">
      <button-close class="social-popup__button" @closeClick="showSocial" />
      <h3 class="social-popup__heading">Поделитесь</h3>
      <ul class="social-popup__links">
        <li v-for="socialLink in social" :key="socialLink.id">
          <a :href="socialLink.link" class="social-popup__item">
            <img
              class="social-popup__icon"
              :src="socialLink.src"
              :alt="socialLink.name"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
import ButtonClose from '@/components/ui/ButtonClose';
export default {
  data() {
    return {
      social: [
        {
          id: '1',
          name: 'Facebook',
          src: '/images/social/fb.svg',
          link: `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(
            window.location.href
          )}&title=${document.querySelector('title').innerText}`,
        },
        {
          id: '2',
          name: 'Twitter',
          src: '/images/social/twitter.svg',
          link: `https://twitter.com/intent/tweet?text=${
            document.querySelector('title').innerText
          }&url=${encodeURI(window.location.href)}`,
        },
        {
          id: '3',
          name: 'ВКонтакте',
          src: '/images/social/vk.svg',
          link: `https://vk.com/share.php?url=${encodeURI(
            window.location.href
          )}&title=${document.querySelector('title').innerText}`,
        },
        {
          id: '4',
          name: 'Одноклассники',
          src: '/images/social/ok.svg',
          link: `https://connect.ok.ru/offer?url=${encodeURI(
            window.location.href
          )}&amp;title=${document.querySelector('title').innerText}`,
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
    };
  },
  components: {
    overlay: Overlay,
    'button-close': ButtonClose,
  },
  computed: {
    socialShown() {
      return this.$store.getters['data/social/getSocialShown'];
    },
  },
  methods: {
    showSocial() {
      this.$store.commit('data/social/toggleSocial');
    },
  },
  mounted() {
    // Закрыть по ESC
    document.addEventListener('keydown', evt => {
      if (evt.keyCode == 27) {
        this.$store.commit('data/social/toggleSocial');
      }
    });
  },
};
</script>

<style scoped>
.social-popup {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.social-popup__container {
  width: 100%;
  height: 324px;
  background-color: #fff;
  padding: 40px 40px 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}

.social-popup__button {
  margin: 40px 40px 0 0;
  position: absolute;
  top: 0;
  right: 0;
}

.social-popup__heading {
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;
  margin: 0;
  padding: 0;
}

.social-popup__links {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 388px;
  display: flex;
  justify-content: space-between;
}

.social-popup__item {
  display: flex;
  width: 48px;
  height: 48px;
}

.social-popup__icon {
  max-width: 32px;
  margin: auto;
}

@media screen and (max-width: 1429px) {
  .social-popup {
    padding: 240px;
  }
}

@media screen and (max-width: 1150px) {
  .social-popup {
    padding: 112px;
  }
}

@media screen and (max-width: 1024px) {
  .social-popup {
    padding: 94px;
  }
}

@media screen and (max-width: 730px) {
  .social-popup {
    padding: 15px;
  }

  .social-popup__container {
    height: 191px;
    padding: 15px 4px 60px;
  }

  .social-popup__button {
    width: 24px;
    height: 24px;
    margin: 15px 15px 0 0;
  }

  .social-popup__heading {
    font-size: 18px;
    line-height: 21px;
  }

  .social-popup__links {
    max-width: 288px;
  }

  .social-popup__item {
    width: 35px;
    height: 35px;
  }

  .social-popup__icon {
    max-width: 21px;
    margin: auto;
  }
}
</style>
