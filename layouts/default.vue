<template>
  <div class="main-container">
    <main-header />

    <popup v-if="this.$store.state.popup.popupShown"></popup>
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import popup from '@/components/popup';
import Footer from '@/components/Footer';

export default {
  components: {
    'main-header': Header,
    popup,
    'main-footer': Footer,
  },
};
</script>

<style>
html {
  font-family: 'Inter', 'Arial', sans-serif;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
}

#__layout {
  overflow: hidden;
}

.main-container {
  max-width: 1440px;
  margin: 0 auto;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
