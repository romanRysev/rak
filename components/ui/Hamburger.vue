<template>
  <div class="hamburger">
    <input
      id="hamburger__menu_toggle"
      class="hamburger__menu__toggle"
      type="checkbox"
    />
    <label class="hamburger__menu__btn" for="hamburger__menu__toggle">
      <span class="hamburger__menu_line"></span>
      <span class="hamburger__menu_line"></span>
      <span class="hamburger__menu_line"></span>
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hamburger__menu__toggle {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  height: 0;
}

.hamburger__menu__btn {
  display: none;
  width: 32px;
  height: 24px;
}

@media screen and (max-width: 1023px) {
  .hamburger__menu__toggle {
    display: block;
    height: 0;
    opacity: 0;
  }

  .hamburger__menu__btn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }

  .hamburger__menu_line {
    width: 100%;
    height: 3px;
    background-color: #000;
    content: '';
  }
}

@media screen and (max-width: 730px) {
  .hamburger__menu__btn {
    width: 26px;
    height: 22px;
  }
}
</style>
