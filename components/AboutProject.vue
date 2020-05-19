<template>
  <section class="about-project">
    <container>
      <h2 class="about-project__title">#РАКЛЕЧИТСЯ</h2>
      <p class="about-project__subtitle">О проекте</p>

      <div class="about-project__place-container">
        <div class="about-project__place-container-information">
          <p class="about-project__company-creator">
            Этот проект был создан благотворительным фондом Константина
            Хабенского.
          </p>

          <ul class="about-project__list-names">
            <li
              ref="rakToggle"
              @click="toggleText"
              class="about-project__name about-project__name_active"
            >
              Рак Лечится
            </li>
            <li
              ref="fondToggle"
              @click="toggleText"
              class="about-project__name"
            >
              Фонд Хабенского
            </li>
          </ul>
        </div>

        <ul class="about-project__description">
          <li v-if="rakLechitsa" class="about-project__paragraph">
            Есть вещи, которые не лечатся. Особенности характера, страстные
            увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
            приобрели в детстве. Список можно продолжать до бесконечности, но
            одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
            и лучшее доказательство — люди с их неизлечимыми особенностями,
            которые сумели победить рак.
          </li>
          <li v-if="rakLechitsa" class="about-project__paragraph">
            Рак лечится — проект Благотворительного Фонда Константина Хабенского
            и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение
            людей к раку и заставить каждого поверить: онкологическое
            заболевание — это не приговор.
          </li>
          <li v-if="fondKhabenskogo" class="about-project__paragraph">
            Благотворительный Фонд Константина Хабенского с 2008 года помогает
            детям с онкологическими и другими тяжелыми заболеваниями головного
            мозга. Фонд не только поддерживает семью заболевшего ребенка в самый
            сложный момент, оплачивая обследования, лечение и медицинские
            препараты, но и в целом меняет систему оказания помощи детям с
            опухолями мозга в России.
          </li>
        </ul>
      </div>
    </container>
  </section>
</template>

<script>
import Container from '~/components/Container';
export default {
  components: {
    container: Container,
  },
  methods: {
    toggleText(e) {
      if (!e.target.classList.contains('about-project__name_active')) {
        this.rakLechitsa = !this.rakLechitsa;
        this.fondKhabenskogo = !this.fondKhabenskogo;
        this.$refs.rakToggle.classList.toggle('about-project__name_active');
        this.$refs.fondToggle.classList.toggle('about-project__name_active');
      }
    },
  },
  data() {
    return {
      rakLechitsa: true,
      fondKhabenskogo: false,
    };
  },
};
</script>

<style scoped>
.about-project {
  background-color: #613a93;
  width: 100vw;
  padding: 90px 60px 100px 60px;
  min-height: 650px;
}
.about-project__title {
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #fff;
  margin: 0 0 70px 0;
}
.about-project__subtitle {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #fff;
  margin-right: auto;
  margin-bottom: 32px;
}
.about-project__company-creator {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  max-width: 340px;
  color: #dedede;
}
.about-project__list-names {
  list-style-type: none;
  padding-left: 0;
}
.about-project__name {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #c9c9c9;
  cursor: pointer;
}
.about-project__name:hover {
  color: #fff;
}
.about-project__name_active {
  font-weight: 500;
  color: white;
  cursor: default;
}
.about-project__description {
  padding-left: 0;

  list-style-type: none;
}
.about-project__paragraph:first-child {
  margin-bottom: 20px;
}
.about-project__paragraph {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  max-width: 640px;
}

.about-project__place-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
}

.about-project__place-container-information {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 640px;
}

@media screen and (max-width: 1439px) {
  .about-project {
    min-height: 620px;
  }
}

@media screen and (max-width: 1279px) {
  .about-project {
    padding: 80px 50px 90px 50px;
    min-height: 570px;
  }

  .about-project__title {
    font-size: 58px;
    line-height: 70px;
  }
  .about-project__subtitle {
    font-size: 28px;
    line-height: 32px;
  }
  .about-project__company-creator {
    font-size: 16px;
    line-height: 20px;
  }
}
@media screen and (max-width: 1023px) {
  .about-project {
    min-height: 660px;
  }
  .about-project__title {
    font-size: 52px;
    line-height: 63px;
  }
  .about-project__subtitle {
    font-size: 24px;
    line-height: 28px;
  }
  .about-project__company-creator {
    font-size: 13px;
    line-height: 16px;
  }
  .about-project__name {
    font-size: 15px;
    line-height: 19px;
  }
  .about-project__name_active {
    border-bottom: 2px solid currentColor;
  }
  .about-project__paragraph {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 767px) {
  .about-project {
    min-height: 660px;
    padding: 80px 0 80px 0;
  }
  .about-project__title {
    display: none;
  }
  .about-project__subtitle {
    margin-left: auto;
    margin-bottom: 26px;
  }
  .about-project__company-creator {
    max-width: 380px;
    margin-bottom: 80px;
  }
  .about-project__place-container {
    display: flex;
    flex-direction: column;
  }

  /*.about-project__place-container_information {*/
  /*  flex-direction: column;*/
  /*}*/
  .about-project__name {
    margin: 0 30px 30px 0;
  }
  .about-project__list-names {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: row;
  }
}
@media screen and (max-width: 730px) {
  .about-project {
    padding: 80px 0 80px 0;
  }
  .about-project__title {
    display: none;
  }
  .about-project__subtitle {
    margin-left: auto;
    margin-bottom: 26px;
  }
  .about-project__company-creator {
    max-width: 380px;
    margin-bottom: 80px;
  }
  .about-project__place-container {
    display: flex;
    flex-direction: column;
  }

  /*.about-project__place-container_information {*/
  /*  flex-direction: column;*/
  /*}*/
  .about-project__name {
    margin: 0 30px 30px 0;
  }
  .about-project__list-names {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: row;
  }
}

@media screen and (max-width: 457px) {
  .about-project {
    padding: 80px 15px 80px 15px;
  }
  .about-project__subtitle {
    margin-left: 0;
    margin-bottom: 16px;
  }
  .about-project__company-creator {
    max-width: 290px;
    margin-bottom: 40px;
  }
}
</style>
