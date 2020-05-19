<template>
  <button class="button-close" type="button" @click="$emit('closeClick')">
    <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="7.07136"
        y1="7.07103"
        x2="21.2135"
        y2="21.2132"
        stroke="black"
        stroke-width="2"
      />
      <line
        x1="7.07121"
        y1="21.2132"
        x2="21.2133"
        y2="7.07105"
        stroke="black"
        stroke-width="2"
      />
    </svg>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button-close {
  border: none;
  margin: 0;
  padding: 0;
  width: 29px;
  height: 29px;
  background-color: #fff;
  outline: 0;
}

.button-close:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
