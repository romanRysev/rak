<template>
  <div class="stat-card">
    <p class="stat-card__card-description" v-text="cardDescription"></p>
    <div class="stat-card__bar-container">
      <slot></slot>
      <p class="stat-card__bars-numbers" v-text="barsNumbers"></p>
      <p class="stat-card__bars-author" v-text="barsAuthor"></p>
    </div>
  </div>
</template>

<script>
import Bar from '@/components/ui/Bar';
export default {
  components: {
    'stats-bar': Bar,
  },
  props: {
    cardDescription: String,
    barsNumbers: String,
    barsAuthor: String,
  },
};
</script>

<style scoped>
.stat-card {
  border: 1px solid #efefef;
  width: 300px;
  height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.stat-card__bar-container {
  text-align: right;
  position: relative;
}
.stat-card__bars-numbers {
  padding: 20px 0;
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
}
.stat-card__bars-author {
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}

.stat-card__card-description {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
}

@media screen and (max-width: 1399px) {
  .stat-card {
    width: 265px;
    height: 265px;
    padding: 18px;
  }
}

@media screen and (max-width: 1279px) {
  .stat-card {
    width: 208px;
    height: 208px;
    padding: 10px;
  }
}
</style>
