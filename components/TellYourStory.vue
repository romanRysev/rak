<template>
  <section class="your-story">
    <container class="container_your-story">
      <h3 class="your-story__header">Расскажите свою историю</h3>
      <div class="your-story__description-container">
        <div class="your-story__description-side">
          <p class="your-story__description-text">
            Мы публикуем новые истории на сайте раз в неделю. Есть
            2&nbsp;варианта поделиться своей историей неизлечимых привычек,
            навязчивых идей и болезненных привязанностей.
          </p>
          <div class="your-story__variant-toggler">
            <p
              ref="variantOne"
              @click="variantToggler"
              class="your-story__variant your-story__variant_active"
            >
              1-й вариант
            </p>
            <p
              ref="variantTwo"
              @click="variantToggler"
              class="your-story__variant"
            >
              2-й вариант
            </p>
          </div>
        </div>
        <div class="your-story__variant-side">
          <p v-if="variantOneShown" class="your-story__variant-text">
            Заполнить подробную форму прямо на сайте и мы опубликуем вашу
            историю после проверки. Пожалуйста, заполняйте все пункты корректно,
            если вы испытаете какие-то сложности, воспользуйтесь 2&#8209;м
            вариантом.
          </p>
          <p v-if="variantTwoShown" class="your-story__variant-text">
            Оставить контакт (почту или номер телефона) и мы свяжемся с вами,
            зададим вопросы, уточним детали вашей истории.
          </p>
        </div>
      </div>

      <!--<Button
        v-if="variantOneShown"
        @custom-click="$store.commit('popup/open')"
        class="popup__button"
        type="button"
        >Заполнить форму</Button
      >

      <Button
        v-if="variantTwoShown"
        @custom-click="$store.commit('popup/open')"
        class="popup__button"
        type="button"
        >Оставить контакт</Button
      >-->

      <popupbutton
        v-if="variantOneShown"
        @custom-click="
          [$store.commit('popup/open'), $store.commit('form/openquizForm')]
        "
        class="popup-button"
      >
        <p class="popup__button-description">
          <slot>Заполнить форму</slot>
        </p>
      </popupbutton>

      <popupbutton
        v-if="variantTwoShown"
        @custom-click="
          [$store.commit('popup/open'), $store.commit('form/openContactForm')]
        "
        class="popup-button"
      >
        <p class="popup__button-description">
          <slot>Оставить контакт</slot>
        </p>
      </popupbutton>
    </container>
  </section>
</template>

<script>
import Container from '~/components/Container';
import button from '@/components/button';
export default {
  components: {
    popupbutton: button,
    container: Container,
  },
  methods: {
    variantToggler(e) {
      if (!e.target.classList.contains('your-story__variant_active')) {
        this.variantOneShown = !this.variantOneShown;
        this.variantTwoShown = !this.variantTwoShown;
        this.$refs.variantOne.classList.toggle('your-story__variant_active');
        this.$refs.variantTwo.classList.toggle('your-story__variant_active');
      }
    },
  },
  data() {
    return {
      variantOneShown: true,
      variantTwoShown: false,
    };
  },
};
</script>

<style scoped>
.your-story {
  width: 100%;
  background-color: #f7f7f7;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  color: #666666;
  padding: 100px 0;
  position: relative;
}

.your-story__header {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: black;
  width: 410px;
  margin-bottom: 30px;
}

.your-story__description-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}

.your-story__description-side {
  width: calc(50% - 20px);
  display: flex;
  justify-content: space-between;
}

.your-story__variant-side {
  width: calc(50% - 20px);
  display: block;
}

.your-story__description-text {
  width: 340px;
}

.your-story__variant-toggler {
  text-align: right;
  width: 110px;
  line-height: 1.7em;
}

.your-story__variant {
  cursor: pointer;
}

.your-story__variant:hover {
  color: black;
}

.your-story__variant_active {
  font-weight: 500;
  color: black;
  cursor: default;
}

.popup-button {
  width: 280px;
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
  cursor: pointer;
}

.popup-button:hover {
  opacity: 0.9;
  transition: 0.3s;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .your-story {
    padding: 90px 0;
  }

  .your-story__header {
    font-size: 28px;
    line-height: 32px;
    width: 380px;
  }

  .your-story__description-container {
    margin-bottom: 65px;
  }

  .your-story__description-text {
    font-size: 16px;
    line-height: 20px;
    width: 305px;
  }

  .your-story__variant-toggler {
    line-height: 1.5em;
  }

  .popup-button {
    height: 48px;
    width: 230px;
  }
}

@media screen and (min-width: 1023px) and (max-width: 1279px) {
  .your-story {
    font-size: 13px;
    line-height: 16px;
    padding: 75px 0;
  }

  .your-story__header {
    width: 320px;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 20px;
  }

  .your-story__description-container {
    margin-bottom: 75px;
  }

  .your-story__description-text {
    width: 260px;
  }

  .your-story__variant-toggler {
    font-size: 15px;
    line-height: 23px;
  }

  .your-story__variant-side {
    width: calc(50% - 15px);
  }

  .your-story__variant-text {
    font-size: 15px;
    line-height: 19px;
  }

  .popup-button {
    height: 46px;
    width: 230px;
    left: calc(50% + 15px);
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (min-width: 730px) and (max-width: 1022px) {
  .container_your-story {
    width: 380px;
    padding: 0;
    align-items: center;
  }

  .your-story {
    font-size: 15px;
    line-height: 19px;
    padding: 80px 0;
  }

  .your-story__header {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    width: 100%;
  }

  .your-story__description-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 45px;
  }

  .your-story__description-side {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .your-story__description-text {
    width: 100%;
    font-size: 13px;
    line-height: 16px;
  }

  .your-story__variant-toggler {
    width: 100%;
    display: flex;
    margin: 75px 0 25px;
    line-height: 1.8em;
  }

  .your-story__variant:not(:last-of-type) {
    margin-right: 30px;
  }

  .your-story__variant_active {
    border-bottom: 2px solid currentColor;
  }

  .your-story__variant-side {
    width: 100%;
    min-height: 95px;
  }

  .popup-button {
    position: inherit;
    width: 230px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (max-width: 729px) {
  .container_your-story {
    width: 290px;
    padding: 0;
  }

  .your-story {
    font-size: 13px;
    line-height: 16px;
    padding: 45px 0 50px;
  }

  .your-story__header {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 16px;
  }

  .your-story__description-container {
    flex-direction: column;
    margin-bottom: 30px;
  }

  .your-story__description-side {
    flex-direction: column;
    width: 100%;
  }

  .your-story__description-text {
    width: 100%;
  }

  .your-story__variant-toggler {
    width: 100%;
    display: flex;
    margin: 36px 0 17px;
    line-height: 1.8em;
  }

  .your-story__variant:not(:last-of-type) {
    margin-right: 20px;
  }

  .your-story__variant_active {
    border-bottom: 2px solid currentColor;
  }

  .your-story__variant-side {
    width: 100%;
    min-height: 95px;
  }

  .popup-button {
    position: inherit;
    width: 100%;
    max-width: 100%;
    font-size: 13px;
    line-height: 16px;
    height: 40px;
  }
}
</style>
