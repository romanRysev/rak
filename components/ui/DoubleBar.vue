<template>
  <div>
    <div class="stat-card__bar-content" :style="upperWidth">
      <div class="stat-card__bar-fill" :style="lowerWidth"></div>
    </div>
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
.stat-card__bar-content {
  width: 260px;
  height: 40px;
  background: linear-gradient(#f4f4f4 50%, white 50%);
  background-position-y: 50%;
  position: relative;
}

.stat-card__bar-fill {
  background: #613a93;
  height: 20px;
  width: 26px;
  position: absolute;
  bottom: 0;
  left: 0;
}

@media screen and (max-width: 1399px) {
  .stat-card__bar-content {
    width: 229px;
    height: 18px;
  }

  .stat-card__bar-fill {
    height: 18px;
    width: 26px;
  }
}

@media screen and (max-width: 1279px) {
  .stat-card__bar-content {
    width: 229px;
    height: 14px;
  }

  .stat-card__bar-fill {
    height: 14px;
    width: 26px;
  }
}
</style>
