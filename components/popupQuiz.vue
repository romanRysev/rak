<template>
  <div class="popupQuiz">
    <h3 v-if="currentQuestion.questionAdditional" class="popup__step">
      {{ currentQuestion.step }}
    </h3>
    <img
      class="icon__close"
      @click="$store.commit('popup/close')"
      src="/images/icon__close.svg"
      alt="Кнопка закрытия формы отправки сообщения"
    />

    <p class="popup__questions_block">
      <span v-if="currentQuestion.questionAdditional" class="popup__question">{{
        currentQuestion.question
      }}</span>
      <span
        v-if="currentQuestion.questionAdditional"
        class="popup__questionAdditional"
        >{{ currentQuestion.questionAdditional }}</span
      >
    </p>

    <Input v-model="answer" placeholder="Напишите тут" :bottomBorder="true" />
    <div class="button__block">
      <Button @custom-click="prevQuestion" class="buttonBack" type="button"
        >Назад</Button
      >

      <Button @custom-click="nextQuestion" class="buttonNext" type="button">
        <p class="buttonNext__description">Далее</p>
      </Button>
    </div>
  </div>
</template>

<script>
import Input from '~/components/ui/Input';
import button from '~/components/button';

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
    Button: button,
  },
  data() {
    return {
      answer: '',
    };
  },
  computed: {
    currentQuestion() {
      const { popupQuiz } = this.$store.state;
      const { currentQuestion, questions } = popupQuiz;
      return questions[currentQuestion] || '';
    },
    initialAnswer() {
      const { popupQuiz } = this.$store.state;
      const { currentQuestion, answers } = popupQuiz;
      return answers[currentQuestion] || '';
    },
  },
  methods: {
    async nextQuestion() {
      await this.$store.dispatch('popupQuiz/NEXT_QUESTION', {
        answer: this.answer,
      });
      this.answer = this.initialAnswer;
    },
    async prevQuestion() {
      await this.$store.dispatch('popupQuiz/PREV_QUESTION');
      this.answer = this.initialAnswer;
    },
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
  z-index: 123;
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
.popup__questions_block {
  display: inline-block;
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
.popup__question {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-align: left;
}
.popup__questionAdditional {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-align: left;
  opacity: 0.5;
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
  cursor: pointer;
}
.buttonNext {
  display: flex;
  width: 226px;
  height: 52px;
  margin: 0px 576px 40px 0px;
  background: #613a93;
  padding: 0;
  border: 0;
  cursor: pointer;
}
.buttonNext__description {
  display: flex;
  /* width: 16px;
  height: 10px; */
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
  cursor: pointer;
}
</style>
