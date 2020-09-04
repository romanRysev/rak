<template>
  <section class="stats">
    <container>
      <h2 class="stats__header">{{ title }}</h2>
      <div class="stats__container">
        <statscard
          v-for="bar in bars"
          :key="bar.id"
          :cardDescription="bar.cardDescription"
          :barsNumbers="bar.barsNumbers"
          :barsAuthor="bar.barsAuthor"
        >
          <bar v-if="!bar.doubleBar" :fill="bar.fill" />
          <doublebar
            v-if="bar.doubleBar"
            :upperWidth="bar.upperWidth"
            :lowerWidth="bar.lowerWidth"
          />
        </statscard>
      </div>
    </container>
  </section>
</template>

<script>
import Container from '~/components/Container';
import StatCard from '@/components/StatisticCard';
import Bar from '@/components/ui/Bar';
import DoubleBar from '@/components/ui/DoubleBar';
export default {
  components: {
    container: Container,
    statscard: StatCard,
    bar: Bar,
    doublebar: DoubleBar,
  },

  props: {
    title: String,
  },

  computed: {
    bars() {
      return this.$store.getters['data/statistic/getBars'];
    },
  },
};
</script>

<style scoped>
.stats {
  width: 100%;
  padding: 100px 0;
}
.stats__container {
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
    padding: 90px 0;
  }

  .stats__header {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 60px;
    max-width: 367px;
  }
}

@media screen and (max-width: 1279px) {
  .stats {
    padding: 80px 0;
  }

  .stats__header {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 46px;
    max-width: 288px;
  }

  .stats__container {
    column-gap: 30px;
  }
}

@media screen and (max-width: 1023px) {
  .stats {
    padding: 80px 0;
    text-align: center;
  }

  .stats__header {
    margin: 0 auto 60px;
    max-width: 380px;
  }

  .stats__container {
    column-gap: 20px;
    max-width: 100vw;
    overflow-x: scroll;
    text-align: left;
  }
}

@media screen and (max-width: 320px) {
  .stats {
    padding: 50px 0;
    text-align: left;
  }

  .stats__header {
    margin: 0 0 30px;
    max-width: 280px;
    font-size: 18px;
    line-height: 21px;
  }

  .stats__container {
    column-gap: 10px;
    overflow-x: scroll;
  }
}
</style>
