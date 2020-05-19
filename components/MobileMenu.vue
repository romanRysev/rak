<template>
  <nav class="mobile-menu">
    <container class="container container_mobile-menu">
      <nuxt-link
        to="/"
        class="mobile-menu__link"
        :class="{ menu__link_active: $route.path == '/' }"
        >Главная
      </nuxt-link>
      <nuxt-link
        to="/stories"
        class="mobile-menu__link"
        :class="{ menu__link_active: $route.path == '/stories' }"
        >Истории
      </nuxt-link>
      <slot></slot>
    </container>
  </nav>
</template>

<script>
import Container from '~/components/Container';
export default {
  components: {
    container: Container,
  },
};
</script>

<style scoped>
.mobile-menu__link {
  color: #000;
  text-decoration: none;
  transition: 0.3s;
}

.mobile-menu__link:hover {
  opacity: 0.8;
}
</style>
