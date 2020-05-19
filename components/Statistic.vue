<template>
  <section class="stats">
    <container>
      <h2 class="stats__header">Статистика по онкозаболеваниям</h2>
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

  data() {
    return {
      bars: [
        {
          id: 1,
          doubleBar: false,
          fill: 'width: 33%',
          cardDescription:
            'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
          barsNumbers: '1 из 3',
          barsAuthor: 'Левада-Центр 2018',
        },
        {
          id: 2,
          doubleBar: false,
          fill: 'width: 2.6%',
          cardDescription: '2,6% Россиян имеют онкозаболевания.',
          barsNumbers: '3 700 000',
          barsAuthor: 'Росстат 2018',
        },
        {
          id: 3,
          doubleBar: true,
          upperWidth: 'width: 55%',
          lowerWidth: 'width: 128%',
          cardDescription:
            'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
          barsNumbers: '↑28%',
          barsAuthor: 'МНИОИ Герцена 2018',
        },
        {
          id: 4,
          doubleBar: true,
          upperWidth: 'width: 70%',
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
  /*max-width: 1440px;*/
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
    padding: 90px 0;
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
    padding: 50px 10px;
    text-align: left;
  }

  .stats__header {
    margin: 0 auto 30px;
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
