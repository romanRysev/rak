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
  components: {
    overlay: Overlay,
    'button-close': ButtonClose,
  },
  computed: {
    social() {
      return this.$store.getters['data/social/getSocial'];
    },
    socialShown() {
      return this.$store.getters['data/social/getSocialShown'];
    },
  },
  methods: {
    showSocial() {
      this.$store.commit('data/social/toggleSocial');
    },
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
