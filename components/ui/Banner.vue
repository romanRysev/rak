<template>
  <section class="head-banner">
    <container>
      <h1 class="head-banner__title">#РАКЛЕЧИТСЯ</h1>
      <img class="head-banner__arrow" src="/banner-arrow.svg" alt="" />
    </container>
  </section>
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
.head-banner {
  background: #613a93;
  min-height: calc(100vh - 76px);
  width: 100vw;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.head-banner__title {
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  color: white;
}
.head-banner__arrow {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 1399px) {
  .head-banner__title {
    font-size: 78px;
    line-height: 94px;
  }

  .head-banner {
    min-height: calc(100vh - 72px);
  }
}

@media screen and (max-width: 1279px) {
  .head-banner {
    height: 540px;
  }
}

@media screen and (max-width: 1023px) {
  .head-banner__title {
    font-size: 64px;
    line-height: 77px;
  }

  .head-banner {
    height: 780px;
  }
}

@media screen and (max-width: 630px) {
  .head-banner__title {
    font-size: 36px;
    line-height: 44px;
  }

  .head-banner {
    min-height: calc(100vh - 64px);
  }
}
</style>
