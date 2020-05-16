<template>
  <div class="stat-card__bar-content">
    <div class="stat-card__bar-fill" :style="fill"></div>
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
.stat-card__bar-content {
  width: 260px;
  height: 40px;
  background: #f4f4f4;
}

.stat-card__bar-fill {
  background: #613a93;
  height: 40px;
  position: absolute;
}

@media screen and (max-width: 1399px) {
  .stat-card__bar-content {
    width: 229px;
    height: 35px;
  }

  .stat-card__bar-fill {
    height: 35px;
    width: 26px;
  }
}

@media screen and (max-width: 1279px) {
  .stat-card__bar-content {
    width: 229px;
    height: 28px;
  }

  .stat-card__bar-fill {
    height: 28px;
    width: 26px;
  }
}
</style>
