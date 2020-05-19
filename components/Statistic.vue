<template>
  <section class="stats">
    <h2 class="stats__header">Статистика по онкозаболеваниям</h2>
    <div class="stats__container">
      <stats-card
        :cardDescription="bars[0].cardDescription"
        :barsNumbers="bars[0].barsNumbers"
        :barsAuthor="bars[0].barsAuthor"
        ><bar :fill="bars[0].fill"
      /></stats-card>
      <stats-card
        :cardDescription="bars[1].cardDescription"
        :barsNumbers="bars[1].barsNumbers"
        :barsAuthor="bars[1].barsAuthor"
        ><bar :fill="bars[1].fill"
      /></stats-card>
      <stats-card
        :cardDescription="bars[2].cardDescription"
        :barsNumbers="bars[2].barsNumbers"
        :barsAuthor="bars[2].barsAuthor"
        ><DoubleBar
          :upperWidth="bars[2].upperWidth"
          :lowerWidth="bars[2].lowerWidth"
      /></stats-card>
      <stats-card
        :cardDescription="bars[3].cardDescription"
        :barsNumbers="bars[3].barsNumbers"
        :barsAuthor="bars[3].barsAuthor"
        ><DoubleBar
          :upperWidth="bars[3].upperWidth"
          :lowerWidth="bars[3].lowerWidth"
      /></stats-card>
    </div>
  </section>
</template>

<script>
import StatCard from '@/components/StatisticCard';
import Bar from '@/components/ui/Bar';
import DoubleBar from '@/components/ui/DoubleBar';
export default {
  components: {
    'stats-card': StatCard,
    bar: Bar,
    DoubleBar: DoubleBar,
  },

  data() {
    return {
      bars: [
        {
          id: 1,
          fill: 'width: 33%',
          cardDescription:
            'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
          barsNumbers: '1 из 3',
          barsAuthor: 'Левада-Центр 2018',
        },
        {
          id: 2,
          fill: 'width: 2.6%',
          cardDescription: '2,6% Россиян имеют онкозаболевания.',
          barsNumbers: '3 700 000',
          barsAuthor: 'Росстат 2018',
        },
        {
          id: 3,
          upperWidth: 'width: 160px',
          lowerWidth: 'width: 128%',
          cardDescription:
            'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
          barsNumbers: '↑28%',
          barsAuthor: 'МНИОИ Герцена 2018',
        },
        {
          id: 4,
          upperWidth: 'width: 190px',
          lowerWidth: 'width: 75%',
          cardDescription:
            'На 25% снизилась смертность в течение первого года после постановки диагноза.',
          barsNumbers: '↓25%',
          barsAuthor: 'МНИОИ Герцена 2018',
        },
      ],
    };
  },
};
</script>

<style scoped>
.stats {
  max-width: 1440px;
  padding: 100px 60px;
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
    padding: 90px 50px;
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
    padding: 90px 50px;
  }

  .stats__header {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 46px;
    max-width: 288px;
  }

  .stats-container {
    column-gap: 30px;
  }
}

@media screen and (max-width: 1023px) {
  .stats {
    padding: 80px 50px;
    text-align: center;
  }

  .stats__header {
    margin: 0 auto 60px;
    max-width: 380px;
  }

  .stats-container {
    column-gap: 20px;
  }
}
</style>
