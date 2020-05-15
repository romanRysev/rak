<template>
  <section class="about-project">
    <div class="about-project__container">
      <h2 class="about-project__title">#РАКЛЕЧИТСЯ</h2>
      <p class="about-project__subtitle">О проекте</p>

      <div class="about-project__place-container">
        <div class="about-project__place-container_information">
          <p class="about-project__company-creator">
            Этот проект был создан благотворительным фондом Константина
            Хабенского.
          </p>

          <ul class="about-project__list-names">
            <li class="about-project__name">Рак Лечится</li>
            <li class="about-project__name">Фонд Хабенского</li>
          </ul>
        </div>

        <ul class="about-project__description">
          <li class="about-project__paragraph">
            Есть вещи, которые не лечатся. Особенности характера, страстные
            увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
            приобрели в детстве. Список можно продолжать до бесконечности, но
            одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
            и лучшее доказательство — люди с их неизлечимыми особенностями,
            которые сумели победить рак.
          </li>
          <li class="about-project__paragraph">
            Рак лечится — проект Благотворительного Фонда Константина Хабенского
            и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение
            людей к раку и заставить каждого поверить: онкологическое
            заболевание — это не приговор.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.about-project {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #613a93;

  width: 100vw;
  padding: 90px 60px 100px 60px;
}
.about-project__container {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-project__title {
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #ffffff;
  margin: 0 0 70px 0;
}
.about-project__subtitle {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #ffffff;
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
}
.about-project__name:hover {
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
}
.about-project__name_company {
  font-weight: normal;
  color: #c9c9c9;
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

.about-project__place-container_information {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 640px;
}

@media screen and (max-width: 1279px) {
  .about-project {
    padding: 80px 50 90px 50;
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
  .about-project__paragraph {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 767px) {
  .about-project {
    padding: 80px 0 80px 0;
  }
  .about-project__container {
    max-width: 380px;
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
  .about-project__name:hover {
    border-bottom: 2px solid #ffffff;
  }

  .about-project__place-container_information {
    flex-direction: column;
  }
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
  .about-project__container {
    max-width: 380px;
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
  .about-project__name:hover {
    border-bottom: 2px solid #ffffff;
  }

  .about-project__place-container_information {
    flex-direction: column;
  }
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
  .about-project__container {
    max-width: 100%;
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
