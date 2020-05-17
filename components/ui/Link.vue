<template>
  <div>
    <a :href="url" v-html="text" class="link" target="_blank"></a>
  </div>
</template>

<script>
export default {
  name: 'Link',
  props: ['url', 'text'],
};
</script>

<style scoped>
.link {
  display: inline;
  color: #000;
  text-decoration: none;
  transition: 0.3s;
}

.link:hover {
  opacity: 0.8;
}
</style>
