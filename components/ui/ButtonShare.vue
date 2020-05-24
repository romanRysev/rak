<template>
  <button
    class="button-share"
    type="button"
    v-html="text"
    @click="$emit('shareClick')"
  ></button>
</template>

<script>
export default {
  props: ['text'],
};
</script>

<style scoped>
.button-share {
  font-family: Inter, Arial, sans-serif;
  border: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 24px;
  width: fit-content;
  grid-area: Share;
  background-color: #fff;
  color: #121212;
}

.button-share:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
