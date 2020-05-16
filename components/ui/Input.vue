<template>
  <div>
    <input
      type="type"
      :class="[
        'popup__input',
        {
          'input_bottom-border': bottomBorder,
        },
      ]"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    //  className:string,
    bottomBorder: Boolean,
    placeholder: String,
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
</style>
