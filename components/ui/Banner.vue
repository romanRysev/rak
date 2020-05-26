<template>
  <section class="head-banner" ref="banner">
    <container>
      <h1 class="head-banner__title">&#35;раклечится</h1>
      <button class="head-banner__arrow" @click="scrollBanner"></button>
    </container>
  </section>
</template>

<script>
import Container from '~/components/Container';
export default {
  components: {
    container: Container,
  },
  methods: {
    scrollBanner() {
      const nextBlock = this.$refs.banner.nextElementSibling;
      nextBlock.scrollIntoView({ block: 'start', behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.head-banner {
  background: #613a93;
  min-height: calc(100vh - 76px);
  width: 100%;
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
  text-transform: uppercase;
}
.head-banner__arrow {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg width='38' height='15' viewBox='0 0 38 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M37 1L19 13L1 1' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
}

.head-banner__arrow:hover {
  background-size: 120% 120%;
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
