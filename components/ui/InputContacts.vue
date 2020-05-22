<template>
  <input
    type="type"
    :class="['input', className]"
    :placeholder="placeholder"
    v-model="content"
    @input="handleInput"
  />
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
.input {
  width: 100%;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  box-sizing: border-box;
  background-origin: border-box;
  font-size: 18px;
  line-height: 24px;
}
</style>
