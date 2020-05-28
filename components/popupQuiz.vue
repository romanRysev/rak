<template>
  <div class="quiz-popup">
    <div class="text-area">
      <div class="question-block">
        <h3 v-if="isLastPage" class="quiz-step">
          {{ currentQuestion.step }}
        </h3>
        <h3 v-if="!isLastPage" class="quiz-thanks">
          Спасибо что приняли участие!
        </h3>

        <p class="question">
          <span v-if="isLastPage" class="question__main">{{
            currentQuestion.question
          }}</span>
          <span
            v-if="currentQuestion.questionAdditional"
            class="question__additional"
          >
            {{ currentQuestion.questionAdditional }}</span
          >
        </p>
      </div>

      <Input
        class="quiz-input"
        v-if="isLastPage"
        placeholder="Напишите тут"
        :bottomBorder="true"
        v-model="answer"
      />
    </div>

    <div class="button-block">
      <Button
        v-if="isLastPage"
        @custom-click="prevQuestion"
        class="button-back"
        type="button"
        >Назад</Button
      >
      <!-- :disabled='this.$store.state.popupQuiz.currentQuestion === 13' -->
      <Button
        v-if="isLastPage"
        @custom-click="nextQuestion"
        class="button-next"
        type="button"
        :disabled="emptyField()"
      >
        <p v-if="isLastPage" class="button-next__description">
          {{ isLastQuestion ? 'Далее' : 'Отправить' }}
        </p>
      </Button>
      <Button
        v-if="!isLastPage"
        @custom-click="
          [$store.commit('popup/close'), $store.commit('form/closeForm')]
        "
        class="button-last"
        type="button"
      >
        <p v-if="!isLastPage" class="button-next__description">Закрыть</p>
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
      nextButton: true,
      sendButton: false,
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
    isLastQuestion() {
      const { popupQuiz } = this.$store.state;
      const { questions, currentQuestion } = popupQuiz;
      const questionsLength = Object.keys(questions).length;
      console.log(currentQuestion);
      console.log(questionsLength);
      if (questionsLength - 1 === currentQuestion) {
        return false;
      }
      return true;
    },
    isLastPage() {
      const { popupQuiz } = this.$store.state;
      const { questions, currentQuestion } = popupQuiz;
      const questionsLength = Object.keys(questions).length;
      console.log(currentQuestion);
      console.log(questionsLength);
      if (questionsLength === currentQuestion) {
        return false;
      }
      return true;
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
    emptyField() {
      return this.answer.length === 0;
    },
  },
};
</script>

<style scoped>
.quiz-popup {
  width: 920px;
  min-width: 240px;
  max-width: 80vw;
  height: 600px;
  background: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text-area {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 270px;
  max-height: 80%;
}

.question-block {
  color: #000;
}

.quiz-step {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 40px;
  max-width: 90%;
}

.quiz-thanks {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  margin: 40px auto 0;
  max-width: 90%;
}

.question {
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  max-height: 240px;
  overflow: scroll;
}

.question__additional {
  opacity: 0.5;
}

.popup-button {
  outline: none;
}

.quiz-input {
  margin-top: 30px;
  width: 100%;
}

.button-block {
  display: flex;
  align-items: center;
}

.button-back {
  font-size: 16px;
  line-height: 19px;
  color: #c0c0c0;
  background: transparent;
  padding: 0;
  border: 0;
  cursor: pointer;
  margin-right: 30px;
}

.button-next {
  width: 226px;
  height: 52px;
  background: #613a93;
  padding: 0;
  border: 0;
  cursor: pointer;
}

.button-next:hover {
  opacity: 0.8;
  transition: 0.3s;
}

.button-next__description {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #fff;
  margin: auto;
  padding: 0;
}

.button-last {
  display: flex;
  width: 226px;
  height: 52px;
  background: #613a93;
  padding: 0;
  border: 0;
  cursor: pointer;
  margin: 0 auto;
}

@media all and (max-width: 1280px) {
  .quiz-popup {
    width: 800px;
    height: 520px;
  }

  .text-area {
    min-height: 225px;
  }

  .quiz-step {
    font-size: 28px;
    line-height: 32px;
  }

  .quiz-thanks {
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;
  }

  .question {
    font-size: 16px;
    line-height: 22px;
    max-height: 220px;
  }

  .quiz-input {
    font-size: 16px;
    line-height: 22px;
  }

  .button-back {
    max-width: 48px;
    height: 20px;
    font-size: 16px;
    line-height: 19px;
  }

  .button-last {
    max-width: 200px;
    height: 48px;
  }

  .button-next {
    max-width: 200px;
    height: 48px;
  }

  .button-next__description {
    width: 66px;
    height: 20px;
    font-size: 16px;
    line-height: 19px;
  }
}

@media all and (max-width: 1024px) {
  .quiz-popup {
    width: 800px;
    height: 520px;
  }

  .text-area {
    min-height: 220px;
  }

  .quiz-step {
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;
  }

  .question {
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    max-height: 220px;
  }

  .question__main {
    font-size: 15px;
    line-height: 22px;
    font-weight: 500;
  }

  .question__additional {
    font-size: 15px;
    line-height: 22px;
    font-weight: 500;
  }

  .quiz-input {
    font-size: 15px;
    line-height: 22px;
  }

  .button-back {
    max-width: 48px;
    height: 20px;
    font-size: 15px;
    line-height: 18px;
  }

  .button-next {
    max-width: 200px;
    height: 46px;
  }

  .button-next__description {
    margin: auto;
    max-width: 66px;
    height: 20px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
  }

  .button-last {
    width: 226px;
    height: 52px;
  }

  .quiz-thanks {
    font-size: 30px;
  }
}

@media all and (max-width: 768px) {
  .quiz-popup {
    width: 580px;
    height: 520px;
  }

  .quiz-step {
    font-weight: 600;
    font-size: 26px;
    line-height: 30px;
  }

  .question {
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
  }

  .button-back {
    max-width: 48px;
    height: 20px;
    font-size: 15px;
    line-height: 18px;
  }

  .button-next {
    max-width: 200px;
    height: 46px;
  }

  .button-next__description {
    max-width: 66px;
    height: 20px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
  }

  .quiz-thanks {
    font-size: 24px;
  }
}
@media all and (max-width: 455px) {
  .quiz-popup {
    max-width: 290px;
    width: 95vw;
    height: 520px;
    padding: 15px;
  }

  .text-area {
    min-height: 195px;
  }

  .quiz-step {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 30px;
  }

  .question {
    max-width: 260px;
    max-height: 300px;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
  }

  .button-back {
    font-size: 13px;
    line-height: 16px;
    margin-right: 15px;
  }

  .button-next {
    max-width: 206px;
    height: 40px;
  }

  .button-next__description {
    max-width: 42px;
    height: 16px;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
  }

  .quiz-thanks {
    font-weight: 500;
    font-size: 17px;
    line-height: 19px;
  }
}
</style>
