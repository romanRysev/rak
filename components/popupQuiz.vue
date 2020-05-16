<template>
  <div class="popupQuiz">
    <h3 class="popup__step">{{ step }}</h3>
    <img
      class="icon__close"
      @click="$store.commit('popup/close')"
      src="/images/icon__close.svg"
      alt="Кнопка закрытия формы отправки сообщения"
    />

    <p class="popup__question">{{ question }}</p>

    <Input placeholder="Напишите тут" :bottomBorder="true" />
    <div class="button__block">
      <popupButtonBack />
      <popupButtonNext>Далее</popupButtonNext>
    </div>
  </div>
</template>

<script>
import Input from '~/components/ui/Input';
import popupButtonNext from '~/components/ui/popupButtonNext';
import popupButtonBack from '~/components/ui/popupButtonBack';

export default {
  props: {
    step: {
      required: true,
      default: 'Что-то пошло не так !',
      type: String,
    },
    question: {
      required: true,
      type: String,
    },
  },
  components: {
    Input,
    popupButtonNext,
    popupButtonBack,
  },
};
</script>

<style scoped>
.popupQuiz {
  width: 920px;
  height: 600px;
  background: #ffffff;
  justify-content: center;
  align-items: center;
  margin: auto;
  z-index: 113;
  position: fixed;
}

.popup__step {
  display: flex;
  width: 177px;
  height: 36px;
  margin: 40px 647px 40px 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: flex-end;
  color: #000000;
}
.popup__question {
  display: flex;
  width: 840px;
  height: 24px;
  margin: 0px 40px 134px 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-align: left;
}
.button__block {
  display: flex;
  padding: 0;
}

.buttonBack {
  display: flex;
  width: 48px;
  height: 20px;
  margin: 16px 30px 56px 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #c0c0c0;
  background: white;
  padding: 0;
  border: 0;
}
.buttonNext {
  display: flex;
  width: 226px;
  height: 52px;
  margin: 0px 576px 40px 0px;
  background: #613a93;
  padding: 0;
  border: 0;
}
.buttonNext__description {
  display: flex;
  width: 66px;
  height: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  margin: auto;
  padding: 0;
}
.icon__close {
  width: 20px;
  height: 20px;
  position: relative;
  bottom: 79px;
  left: 870px;
  border: 0;
}
</style>
