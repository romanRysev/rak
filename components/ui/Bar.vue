<template>
  <div class="bar-content">
    <div class="bar-fill" :style="fill"></div>
  </div>
</template>

<script>
export default {
  props: {
    fill: String,
  },
};
</script>

<style scoped>
.bar-content {
  width: 260px;
  height: 40px;
  background: #f4f4f4;
}

.bar-fill {
  background: #613a93;
  height: 40px;
  position: absolute;
}

@media screen and (max-width: 1399px) {
  .bar-content {
    width: 229px;
    height: 35px;
  }

  .bar-fill {
    height: 35px;
  }
}

@media screen and (max-width: 1279px) {
  .bar-content {
    width: 188px;
    height: 28px;
  }

  .bar-fill {
    height: 28px;
  }
}

@media screen and (max-width: 1023px) {
  .bar-content {
    width: 196px;
  }

  .bar-fill {
    height: 28px;
  }
}
</style>
