<template>
  <input
    :type="type"
    :class="['input', className]"
    :placeholder="placeholder"
    :required="required"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: ['type', 'className', 'placeholder', 'required'],
};
</script>

<style scoped>
.input {
  width: 100%;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 24px;
}
</style>
