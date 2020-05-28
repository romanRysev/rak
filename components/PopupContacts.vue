<template>
  <form class="popup-contacts" @submit.prevent="submitContactForm()">
    <h3 class="popup-contacts__heading">Оставьте контакт для связи</h3>
    <p class="popup-contacts__text">
      Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории
      и разместить ее на сайте.
    </p>
    <popup-label class="popup-contacts__label"
      ><span class="popup-contacts__label-text">Как вас зовут?</span>
      <popup-input
        class="popup-contacts__input"
        :placeholder="'Напишите тут'"
        :type="'text'"
        :required="'required'"
        pattern="[А-Я][а-яё]+(-?[А-Я][а-яё]+)?"
        minlength="2"
        maxlength="20"
        v-model="name"
        name="name"
      />
    </popup-label>
    <div class="popup-contacts__contacts">
      <popup-label class="popup-contacts__label"
        ><span class="popup-contacts__label-text">Электронная почта</span>
        <popup-input
          class="popup-contacts__input"
          :placeholder="'pochta@example.com'"
          :type="'email'"
          :required="'required'"
          pattern="((\w){1,}\.)?([\w-]{1,}@[\w]{0,}\.[\w]{2,3}(\.[\w]{2,3})?)"
          v-model="email"
        />
      </popup-label>
      <popup-label class="popup-contacts__label"
        ><span class="popup-contacts__label-text">Телефон</span>
        <popup-input
          class="popup-contacts__input"
          :placeholder="'+7 000 000 00 00'"
          :type="'phone'"
          :required="'required'"
          pattern="(8|\+7)([0-9]{3}|\([0-9]{3}\)|\s[0-9]{3}-)(-|\s)?[0-9]{3}(-|\s)?[0-9]{2}(-|\s)?[0-9]{2}"
          minlength="10"
          maxlength="18"
          v-model="phone"
        />
      </popup-label>
    </div>
    <popup-label class="popup-contacts__label"
      ><span class="popup-contacts__label-text"
        >Напишите, если есть предпочтительный способ связи и удобное время</span
      >
      <popup-input
        class="popup-contacts__input"
        :placeholder="'Телефон / почта и удобное время'"
        v-model="message"
      />
    </popup-label>
    <div class="popup-contacts__submit-block">
      <!--В итоге использовала обычную кнопку сабмит, с ней работает вроде-->
      <button
        type="submit"
        class="popup-contacts__button-submit"
        :disabled="checkValidity()"
      >
        Отправить
      </button>
      <p class="popup-contacts__terms">
        Нажимая на кнопку «отправить», вы даете согласие на
        <nuxt-link to="/policy" target="_blank" class="popup-contacts__link"
          >обработку персональных данных</nuxt-link
        >
      </p>
    </div>
  </form>
</template>

<script>
import ButtonClose from '@/components/ui/ButtonClose';
import InputContacts from '@/components/ui/InputContacts';
import Label from '@/components/ui/Label';
//import button from '@/components/button';

export default {
  components: {
    'button-close': ButtonClose,
    'popup-input': InputContacts,
    'popup-label': Label,
    //'button-submit': button,
  },
  methods: {
    checkValidity() {
      if (!this.name || !this.email || !this.phone) return true;
    },
    submitContactForm() {
      //Ответы выводятся в консоль
      const contacts = {
        fullName: `${this.name}`,
        email: `${this.email}`,
        phone: `${this.phone}`,
        preferred: `${this.message}`,
      };
      console.log({ contacts });
      this.$store.commit('popup/close');
      this.$store.commit('form/closeForm');
    },
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  },
};
</script>

<style scoped>
.popup-contacts {
  width: 920px;
  height: 730px;
  padding: 40px;
  background-color: #fff;
  color: #000;
}

.popup-contacts__heading {
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;
  margin-bottom: 40px;
}

.popup-contacts__text {
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 50px;
}

.popup-contacts__label-text {
  display: inline-block;
  margin-bottom: 40px;
}

.popup-contacts__input:valid:not(:placeholder-shown) {
  border-color: #e7e7e7;
}

.popup-contacts__input:invalid:not(:placeholder-shown) {
  border-color: #df4b41;
}

.popup-contacts__contacts {
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 40px;
}

.popup-contacts__submit-block {
  margin-top: 50px;
  display: grid;
  grid-template-columns: min-content 378px;
  grid-template-rows: min-content;
  align-items: center;
  grid-gap: 30px;
}

.popup-contacts__button-submit {
  width: 226px;
  height: 52px;
  border: none;
  font-family: Inter, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  background-color: #613a93;
  color: #fff;
  transition: 0.7s ease;
}

.popup-contacts__button-submit:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.popup-contacts__button-submit:hover {
  opacity: 0.9;
  cursor: pointer;
}

.popup-contacts__button-submit:disabled:hover {
  opacity: 0.3;
  pointer-events: none;
  user-select: none;
}

.popup-contacts__terms {
  color: #666;
  font-size: 14px;
  line-height: 17px;
}

.popup-contacts__link {
  color: #666;
}

.popup-contacts__link:hover {
  opacity: 0.8;
  cursor: pointer;
}

@media screen and (max-width: 1429px) {
  .popup-contacts {
    overflow: scroll;
    width: 800px;
    height: 710px;
  }
  .popup-contacts__heading {
    font-size: 28px;
    line-height: 1;
  }

  .popup-contacts__text {
    font-size: 16px;
    line-height: 22px;
  }

  .popup-contacts__label-text {
    font-size: 16px;
    line-height: 1;
  }

  .popup-contacts__input {
    font-size: 16px;
    line-height: 22px;
  }

  .popup-contacts__contacts {
    grid-gap: 32px;
  }
}

@media screen and (max-width: 1023px) {
  .popup-contacts {
    width: 580px;
    height: 710px;
  }

  .popup-contacts__heading {
    font-size: 26px;
  }

  .popup-contacts__text {
    font-size: 15px;
    line-height: 19px;
  }

  .popup-contacts__label-text {
    font-size: 15px;
  }

  .popup-contacts__input {
    font-size: 15px;
    line-height: 19px;
  }

  .popup-contacts__contacts {
    grid-gap: 40px;
  }

  .popup-contacts__submit-block {
    grid-template-columns: min-content 1fr;
  }

  .popup-contacts__button-submit {
    width: 200px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }

  .popup-contacts__terms {
    font-size: 11px;
    line-height: 13px;
  }
}

@media screen and (max-width: 730px) {
  .popup-contacts {
    width: 290px;
    height: 666px;
    padding: 15px;
  }

  .popup-contacts__heading {
    width: 185px;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 35px;
  }

  .popup-contacts__text {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 30px;
  }

  .popup-contacts__label-text {
    font-size: 13px;
    margin-bottom: 20px;
  }

  .popup-contacts__input {
    font-size: 13px;
    line-height: 16px;
  }

  .popup-contacts__contacts {
    margin: 30px 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 2fr);
    grid-gap: 30px;
  }

  .popup-contacts__submit-block {
    margin-top: 35px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;
  }

  .popup-contacts__button-submit {
    width: 100%;
    height: 40px;
    font-size: 13px;
    line-height: 16px;
  }

  .popup-contacts__terms {
    font-size: 11px;
    line-height: 13px;
  }
}
</style>
