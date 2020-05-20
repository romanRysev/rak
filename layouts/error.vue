<template>
  <section class="not-found">
    <container class="not-found__container">
      <p class="not-found__code">404</p>
      <p class="not-found__message">
        Страница не найдена.
        <nuxt-link
          to="/"
          class="not-found__link"
          :class="{ menu__link_active: $route.path == '/' }"
          >Перейти на главную.</nuxt-link
        >
      </p>
    </container>
  </section>
</template>

<script>
import Container from '@/components/Container';
export default {
  components: {
    container: Container,
  },
  props: ['error'],
};
</script>

<style scoped>
.not-found {
  width: 100vw;
  background-color: #fff;
  text-align: center;
  color: #000;
  padding: 258px 0 334px;
}

.not-found__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.not-found__code {
  font-size: 144px;
  line-height: 174px;
  margin: 0 0 10px;
}

.not-found__message {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
}

.not-found__link {
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid #000;
  margin: 0;
}

@media screen and (max-width: 1429px) {
  .not-found {
    padding: 166px 0 238px;
  }

  .not-found__message {
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 1023px) {
  .not-found {
    padding: 238px 0 400px;
  }
}

@media screen and (max-width: 730px) {
  .not-found {
    padding: 225px 0 288px;
  }

  .not-found__code {
    font-size: 72px;
    line-height: 87px;
    margin: 0 0 4px;
  }

  .not-found__message {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
