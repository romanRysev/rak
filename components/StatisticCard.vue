<template>
  <div class="stat-card">
    <p class="stat-card__card-description">
      Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000
      человек.
    </p>
    <div class="stat-card__bar-container">
      <stats-bar />
      <p class="stat-card__bars-numpers">1 из 3</p>
      <p class="stat-card__bars-author">Левада-Центр 2018</p>
    </div>
  </div>
</template>

<script>
import Bar from '@/components/ui/Bar';
export default {
  components: {
    'stats-bar': Bar,
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
}
.stat-card__bars-numpers {
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
</style>
