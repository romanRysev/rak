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
  height: 50px;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #666;
  border: 0;
  width: 100%;
}

.input_bottom-border {
  border-bottom: 1px solid #e7e7e7;
}

.popup__input:focus {
  outline: none;
}

@media all and (max-width: 1280px) {
  .popup__input {
    height: 40px;
    font-size: 16px;
    line-height: 22px;
  }
}

@media all and (max-width: 455px) {
  .popup__input {
    height: 26px;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
