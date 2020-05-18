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
  }
}

@media screen and (max-width: 1279px) {
  .stat-card__bar-content {
    width: 188px;
    height: 28px;
  }

  .stat-card__bar-fill {
    height: 28px;
  }
}

@media screen and (max-width: 1023px) {
  .stat-card__bar-content {
    width: 196px;
  }

  .stat-card__bar-fill {
    height: 28px;
  }
}
</style>
