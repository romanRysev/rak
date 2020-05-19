<template>
  <div class="main-container">
    <mobile-menu v-if="isMobileMenuOpened" class="container_mobile-menu">
      <nuxt-link to="#" class="mobile-menu__link header__link_share"
        >Рассказать историю
      </nuxt-link>
    </mobile-menu>
    <break-line class="break-line" />
    <main-header />

    <popup v-if="this.$store.state.popup.popupShown"></popup>
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import Container from '@/components/Container';
import BreakLine from '@/components/ui/BreakLine';
import MobileMenu from '@/components/MobileMenu';
import Header from '@/components/Header';
import popup from '@/components/popup';
import Footer from '@/components/Footer';

export default {
  components: {
    container: Container,
    'break-line': BreakLine,
    'mobile-menu': MobileMenu,
    'main-header': Header,
    popup,
    'main-footer': Footer,
  },
  computed: {
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
};
</script>

<style>
html {
  font-family: 'Inter', 'Arial', sans-serif;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
}

#__layout {
  overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container_mobile-menu {
  display: none;
}

.break-line {
  display: none;
}

.mobile-menu__link {
  text-decoration: none;
  transition: 0.3s;
}

.mobile-menu__link:hover {
  opacity: 0.8;
}

.header__link_share {
  color: #121212;
}

@media screen and (max-width: 1023px) {
  .container_mobile-menu {
    width: 100%;
    font-size: 16px;
    line-height: 1;
    font-weight: normal;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, min-content) max-content;
    grid-gap: 30px;
    margin: 18px 0;
  }

  .break-line {
    display: block;
  }
}

@media screen and (max-width: 730px) {
  .container_mobile-menu {
    font-size: 13px;
    grid-template-columns: 1fr;
    grid-gap: 18px;
  }
}
</style>
