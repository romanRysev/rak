<template>
  <section class="stats">
    <h2 class="stats__header">Статистика по онкозаболеваниям</h2>
    <div class="stats-container">
      <stats-card />
      <stats-card />
      <stats-card />
      <stats-card />
    </div>
  </section>
</template>

<script>
import StatCard from '@/components/StatisticCard';
export default {
  components: {
    'stats-card': StatCard,
  },
};
</script>

<style scoped>
.stats {
  max-width: 1440px;
  padding: 100px 60px;
}
.stats-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
}

.stats__header {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 70px;
  max-width: 430px;
}

@media screen and (max-width: 1399px) {
  .stats {
    padding: 90px 50px;
  }

  .stats__header {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 60px;
    max-width: 367px;
  }
}
</style>
