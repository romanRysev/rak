<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1320px;
  min-width: 240px;
  margin: 0 auto;
}

@media screen and (max-width: 1439px) {
  .container {
    padding: 0 50px;
  }
}

@media screen and (max-width: 1023px) {
  .container {
    padding: 0 40px;
  }
}

@media screen and (max-width: 730px) {
  .container {
    padding: 0 15px;
  }
}
</style>
