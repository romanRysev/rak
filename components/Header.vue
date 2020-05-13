<template>
  <header class="header">
    <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo"
      >Проект Благотворительного Фонда Константина Хабенского</nuxt-link
    >
    <h1 class="header__logo" v-else>
      Проект Благотворительного Фонда Константина Хабенского
    </h1>
    <hamburger-menu />
    <main-menu class="header__menu">
      <nuxt-link to="#" class="menu__link header__link_share"
        >Рассказать историю</nuxt-link
      >
    </main-menu>
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import Hamburger from './ui/Hamburger.vue';

export default {
  components: {
    'main-menu': Menu,
    'hamburger-menu': Hamburger,
  },
};
</script>

<style scoped>
.header {
  min-height: 76px;
  width: calc(100% - 120px);
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

.header__logo {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  width: 340px;
  height: min-content;
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  color: #000;
}

.header__logo:visited {
  color: #000;
}

.header__link_share {
  color: #121212;
}

@media screen and (max-width: 1399px) {
  .header {
    min-height: 72px;
    width: calc(100% - 100px);
  }
  .header__logo {
    line-height: 18px;
  }
}

@media screen and (max-width: 1023px) {
  .header__menu {
    /*пока спрятала, так как в макете нет, как оно открывается*/
    display: none;
  }
}

@media screen and (max-width: 730px) {
  .header {
    min-height: 64px;
    width: calc(100% - 30px);
  }
  .header__logo {
    width: 216px;
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
