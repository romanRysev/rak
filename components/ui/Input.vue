<template>
  <div>
    <input
      type="type"
      :class="[
        'popup__input',
        className,
        {
          'input_bottom-border': bottomBorder,
        },
      ]"
      :placeholder="placeholder"
      v-model="content"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    //  className:string,
    bottomBorder: Boolean,
    placeholder: String,
  },
  data() {
    return {
      content: this.value,
    };
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal !== this.content) {
        this.content = newVal;
      }
    },
  },
  methods: {
    handleInput(content) {
      this.$emit('input', this.content);
    },
  },
};
</script>

<style scoped>
.popup__input {
  display: flex;
  width: 840px;
  height: 24px;
  margin: 0px 40px 10px 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #666666;
  border: 0;
}

.input_bottom-border {
  border: none;
  margin: 0px 40px 200px 40px;
  border-bottom: 1px solid #e7e7e7;
}

@media all and (max-width: 1279px) {
  .popup__input {
    width: 720px;
    height: 20px;
    font-size: 16px;
    line-height: 22px;
    margin: 0px 40px 10px 40px;
  }

  .input_bottom-border {
    border: none;
    margin: 0px 40px 180px 40px;
    border-bottom: 1px solid #e7e7e7;
  }
}

@media all and (max-width: 1023px) {
  .popup__input {
    margin: 0px 40px 10px 40px;
    max-width: 800px;
    height: 20px;
    background: #ffffff;
  }

  .input_bottom-border {
    border: none;
    margin: 0px 40px 184px 40px;
    border-bottom: 1px solid #e7e7e7;
  }
}

@media all and (max-width: 767px) {
  .popup__input {
    margin: 0px 40px 10px 40px;
    max-width: 500px;
    height: 20px;
    background: #ffffff;
  }

  .input_bottom-border {
    border: none;
    margin: 0px 40px 174px 40px;
    border-bottom: 1px solid #e7e7e7;
    max-width: 500px;
  }
}

@media all and (max-width: 455px) {
  .popup__input {
    width: 840px;
    height: 24px;
    margin: 0px 40px 10px 40px;
    width: 260px;
    height: 20px;
    font-size: 13px;
    line-height: 16px;

    color: #666666;
  }

  .input_bottom-border {
    border: none;
    margin: 0px 15px 259px 15px;
    border-bottom: 1px solid #e7e7e7;
  }
}
</style>
