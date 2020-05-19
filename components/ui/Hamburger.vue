<template>
  <div
    :class="['mobile-button', { 'mobile-button_type_close': isMenuOpened }]"
    @click="toggleMobile"
  ></div>
</template>

<script>
export default {
  computed: {
    isMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  methods: {
    toggleMobile() {
      this.$store.commit('mobile-menu/toggleMobileMenu');
    },
  },
};
</script>

<style scoped>
.mobile-button {
  width: 32px;
  height: 27px;
  background-image: url('../../static/images/menu-hamburger.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.mobile-button.mobile-button_type_close {
  background-image: url('../../static/images/menu-close.svg');
}

@media screen and (max-width: 730px) {
  .mobile-button {
    width: 26px;
    height: 22px;
  }
}
</style>
