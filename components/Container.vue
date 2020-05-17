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
  max-width: 1320px;
  margin: 0 60px;
}

@media screen and (max-width: 1439px) {
  .container {
    margin: 0 50px;
  }
}

@media screen and (max-width: 730px) {
  .container {
    margin: 0 15px;
  }
}
</style>
