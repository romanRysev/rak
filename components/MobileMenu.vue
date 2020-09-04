<template>
  <container>
    <nav class="mobile-menu">
      <ul class="mobile-menu__list">
        <li>
          <nuxt-link
            to="/"
            class="mobile-menu__link"
            :class="{ menu__link_active: $route.path == '/' }"
            >Главная
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/stories"
            class="mobile-menu__link"
            :class="{ menu__link_active: $route.path == '/stories' }"
            >Истории
          </nuxt-link>
        </li>
        <li>
          <slot></slot>
        </li>
      </ul>
    </nav>
    <break-line class="mobile-breakline" />
  </container>
</template>

<script>
import Container from '~/components/Container';
import BreakLine from '~/components/ui/BreakLine';
export default {
  components: {
    container: Container,
    'break-line': BreakLine,
  },
};
</script>

<style scoped>
.mobile-menu {
  margin: 18px 0;
}

.mobile-menu__list {
  list-style: none;
  padding: 0;
}

.mobile-menu__link {
  color: #000;
  text-decoration: none;
  transition: 0.3s;
}

.mobile-menu__link:hover {
  opacity: 0.8;
}

.mobile-breakline {
  display: none;
  position: absolute;
  left: 0;
}

@media screen and (max-width: 1023px) {
  .mobile-breakline {
    display: block;
  }
}
</style>
