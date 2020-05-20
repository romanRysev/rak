<template>
  <div>
    <ul class="stories-page__page-list-container">
      <li
        class="stories-page__element-list"
        v-for="elem in pagesCount"
        :key="elem"
      >
        <span class="stories-page__number">{{ elem }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    totalElements: Number,
    elementsPerPage: Number,
  },

  computed: {
    pagesCount() {
      return Math.ceil(this.totalElements / this.elementsPerPage);
    },
  },
};
</script>

<style scoped>
.stories-page__page-list-container {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin-top: 140px;
  padding: 0;
}
.stories-page__element-list {
  display: block;
  width: 58px;
  height: 58px;
  margin-right: 10px;
  background-color: #fbfbfb;
  padding: 20px;
  cursor: pointer;
}
.stories-page__element-list:hover {
  background-color: #f4f4f4;
}
.stories-page__number {
  color: #181818;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

@media screen and (max-width: 1279px) {
  .stories-page__page-list-container {
    margin-top: 130px;
  }
  .stories-page__element-list {
    width: 56px;
    height: 56px;
    padding: 19px;
  }
}

@media screen and (max-width: 1023px) {
  .stories-page__page-list-container {
    margin-top: 110px;
  }
  .stories-page__element-list {
    width: 50px;
    height: 50px;
    padding: 15px;
  }
}
@media screen and (max-width: 767px) {
  .stories-page__page-list-container {
    margin-top: 130px;
  }
}
</style>
