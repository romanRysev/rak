<template>
  <section class="your-story">
    <div class="content-container">
      <h3 class="your-story-header">Расскажите свою историю</h3>
      <div class="description-container">
        <div class="description-side">
          <p class="description-text">
            Мы публикуем новые истории на сайте раз в неделю. Есть
            2&nbsp;варианта поделиться своей историей неизлечимых привычек,
            навязчивых идей и болезненных привязанностей.
          </p>
          <div class="variant-toggler">
            <p class="variant variant_active">1-й вариант</p>
            <p class="variant">2-й вариант</p>
          </div>
        </div>
        <div class="variant-side">
          <p class="variant-text">
            Заполнить подробную форму прямо на сайте и мы опубликуем вашу
            историю после проверки. Пожалуйста, заполняйте все пункты корректно,
            если вы испытаете какие-то сложности, воспользуйтесь 2&#8209;м
            вариантом.
          </p>
          <!--            <p class="variant-text">Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.</p>-->
        </div>
      </div>

      <Button
        @custom-click="$store.commit('popup/open')"
        class="form-button"
        type="button"
        >Заполнить форму</Button
      >
      <!-- <Button
            @custom-click="$store.commit('popup/open')"
            className="popup__button"
          >
            <p class="popup__button-description">
              <slot>Заполнить форму</slot>
            </p>
          </Button> -->
    </div>
  </section>
</template>

<script>
import button from '@/components/button';
export default {
  components: {
    Button: button,
  },
  name: 'TellYourStory',
};
</script>

<style scoped>
.your-story {
  width: 100vw;
  background-color: #f7f7f7;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  color: #666666;
  padding: 100px 0;
  position: relative;
}

.content-container {
  max-width: 1320px;
  margin: 0 auto;
}

.your-story-header {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: black;
  width: 410px;
  margin-bottom: 30px;
}

.description-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}

.description-side {
  width: calc(50% - 20px);
  display: flex;
  justify-content: space-between;
}

.variant-side {
  width: calc(50% - 20px);
  display: block;
}

.description-text {
  width: 55%;
}

.variant-toggler {
  text-align: right;
  min-width: 110px;
  width: 21%;
  line-height: 1.7em;
}

.variant {
  /* Оставил пока пустым. Пока не уверен, как именно здесь будет выглядеть переключение отображаемых абзацев.
    Если модификатором, то нужен и блок. Если без мдоификатора, то нужно будет слегка изменить. */
}

.variant_active {
  font-weight: 500;
  color: black;
}

.form-button {
  width: 20%;
  max-width: 280px;
  min-width: 180px;
  height: 52px;
  background-color: #613a93;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  position: absolute;
  left: calc(50% + 20px);
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .your-story {
    padding: 90px 0;
  }

  .content-container {
    max-width: 1180px;
  }

  .your-story-header {
    font-size: 28px;
    line-height: 32px;
    width: 380px;
  }

  .description-container {
    margin-bottom: 65px;
  }

  .description-text {
    font-size: 16px;
    line-height: 20px;
    width: 54%;
  }

  .variant-toggler {
    line-height: 1.5em;
  }

  .form-button {
    height: 48px;
    width: 18%;
  }
}

@media screen and (min-width: 1023px) and (max-width: 1279px) {
  .your-story {
    font-size: 13px;
    line-height: 16px;
    padding: 75px 0;
  }

  .content-container {
    width: 90%;
    max-width: 924px;
  }

  .your-story-header {
    width: 320px;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 20px;
  }

  .description-container {
    margin-bottom: 75px;
  }

  .description-text {
    width: 60%;
  }

  .variant-toggler {
    font-size: 15px;
    line-height: 23px;
  }

  .variant-text {
    font-size: 15px;
    line-height: 19px;
  }

  .form-button {
    height: 46px;
    width: 23%;
    left: calc(50% + 14px);
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (min-width: 730px) and (max-width: 1022px) {
  .your-story {
    font-size: 15px;
    line-height: 19px;
    padding: 80px 0;
  }

  .your-story-header {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }

  .content-container {
    width: 53%;
    max-width: 688px;
  }

  .description-container {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    width: 95%;
    margin-bottom: 45px;
  }

  .description-side {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .description-text {
    width: 100%;
    font-size: 13px;
    line-height: 16px;
  }

  .variant-toggler {
    width: 100%;
    display: flex;
    margin: 75px 0 25px;
    line-height: 1.8em;
  }

  .variant:not(:last-of-type) {
    margin-right: 30px;
  }

  .variant_active {
    border-bottom: 2px solid currentColor;
  }

  .variant-side {
    width: 100%;
  }

  .form-button {
    position: inherit;
    margin-left: 12px;
    width: 57%;
    font-size: 15px;
    line-height: 18px;
    height: 50px;
  }
}

@media screen and (min-width: 400px) and (max-width: 729px) {
  .your-story {
    font-size: 15px;
    line-height: 19px;
    padding: 60px 0;
  }

  .your-story-header {
    font-size: 24px;
    line-height: 28px;
    max-width: 85%;
  }

  .content-container {
    width: 80%;
    max-width: 688px;
  }

  .description-container {
    display: flex;
    flex-direction: column;
    width: 85%;
    margin-bottom: 45px;
  }

  .description-side {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .description-text {
    width: 100%;
    font-size: 13px;
    line-height: 16px;
  }

  .variant-toggler {
    width: 100%;
    display: flex;
    margin: 55px 0 20px;
    line-height: 1.8em;
  }

  .variant:not(:last-of-type) {
    margin-right: 30px;
  }

  .variant_active {
    border-bottom: 2px solid currentColor;
  }

  .variant-side {
    width: 100%;
  }

  .form-button {
    position: inherit;
    width: 57%;
    font-size: 15px;
    line-height: 18px;
    height: 50px;
  }
}

@media screen and (max-width: 399px) {
  .your-story {
    font-size: 13px;
    line-height: 16px;
    padding: 45px 0 50px;
  }

  .content-container {
    width: 90%;
    min-width: 240px;
  }

  .your-story-header {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 16px;
  }

  .description-container {
    flex-direction: column;
    margin-bottom: 30px;
  }

  .description-side {
    flex-direction: column;
    width: 100%;
  }

  .description-text {
    width: 100%;
  }

  .variant-toggler {
    width: 100%;
    display: flex;
    margin: 36px 0 17px;
    line-height: 1.8em;
  }

  .variant:not(:last-of-type) {
    margin-right: 20px;
  }

  .variant_active {
    border-bottom: 2px solid currentColor;
  }

  .variant-side {
    width: 100%;
  }

  .form-button {
    position: inherit;
    width: 100%;
    max-width: 100%;
    font-size: 13px;
    line-height: 16px;
    height: 40px;
  }
}
</style>
