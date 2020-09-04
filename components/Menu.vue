<template>
  <ul class="menu">
    <li class="menu__item">
      <nuxt-link
        to="/"
        :class="['menu__link', { menu__link_active: $route.path == '/' }]"
        >Главная
      </nuxt-link>
    </li>
    <li class="menu__item">
      <nuxt-link
        to="/stories"
        :class="[
          'menu__link',
          { menu__link_active: $route.path == '/stories' },
        ]"
        >Истории
      </nuxt-link>
    </li>
    <li>
      <slot></slot>
    </li>
  </ul>
</template>

<script></script>

<style scoped>
.menu {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, min-content) 1fr;
  grid-template-rows: 1fr;
  grid-gap: 40px;
  font-size: 18px;
  line-height: 24px;
  font-weight: normal;
  position: relative;
}

.menu__item {
  padding: 0;
  margin: 0;
}

.menu__link {
  text-decoration: none;
  color: inherit;
}

.mobile-menu__link {
  color: #000;
  text-decoration: none;
  transition: 0.3s;
}

.mobile-menu__link:hover {
  opacity: 0.8;
}

.menu__link_active {
  border-bottom: 2px solid currentColor;
}

.menu__link_active:hover {
  border-bottom: 2px solid rgba(0, 0, 0, 0.8);
}

@media screen and (max-width: 1429px) {
  .menu {
    font-size: 16px;
  }
}

@media screen and (max-width: 1279px) {
  .menu {
    grid-gap: 30px;
  }
}

@media screen and (max-width: 1023px) {
  .menu {
    display: block;
  }

  .menu__item:first-child {
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 729px) {
  .menu {
    font-size: 13px;
    line-height: 15px;
  }

  .menu__item:first-child {
    margin-bottom: 20px;
  }
}
</style>
