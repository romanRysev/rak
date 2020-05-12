<template>
  <section class="head-banner">
    <h1 class="head-banner__title">#РАКЛЕЧИТСЯ</h1>
    <img class="head-banner__arrow" src="/banner-arrow.svg" alt="" />
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.head-banner {
  background: #613a93;
  height: 689px;
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
  left: 48.5%;
}

@media screen and (max-width: 1399px) {
  .head-banner__title {
    font-size: 78px;
    line-height: 94px;
  }
}

@media screen and (max-width: 1023px) {
  .head-banner__title {
    font-size: 64px;
    line-height: 77px;
  }
}
</style>
