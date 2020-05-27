<template>
  <div class="bar-content" :style="upperWidth">
    <div class="bar-fill" :style="lowerWidth"></div>
  </div>
</template>

<script>
export default {
  props: {
    upperWidth: String,
    lowerWidth: String,
  },
};
</script>

<style scoped>
.bar-content {
  width: 160px;
  height: 40px;
  background: linear-gradient(#f4f4f4 50%, white 50%);
  background-position-y: 50%;
  position: relative;
}

.bar-fill {
  background: #613a93;
  height: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
}

@media screen and (max-width: 1399px) {
  .bar-content {
    width: 229px;
    height: 36px;
  }

  .bar-fill {
    height: 18px;
  }
}

@media screen and (max-width: 1279px) {
  .bar-content {
    width: 115px;
    height: 28px;
  }

  .bar-fill {
    height: 14px;
  }
}
</style>
