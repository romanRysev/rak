<template>
  <div>
    <ul class="stories-page__page-list" ref="pageList">
      <li
        class="stories-page__element"
        v-for="elem in pagesCount"
        :key="elem"
        @click="setPagination(elem)"
      >
        <span class="stories-page__number">{{ elem }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentPage: {},
    };
  },
  mounted() {
    this.setCurrentPage(this.$refs.pageList.firstChild);
  },

  props: {
    elementsPerPage: Number,
  },

  computed: {
    totalElements() {
      if (this.$store.getters['data/stories/getPaginationMode'] == 'main') {
        return this.$store.getters['data/stories/getStories'].length;
      } else {
        return this.$store.getters['data/stories/getSearchExport'].length;
      }
    },

    pagesCount() {
      return Math.ceil(this.totalElements / this.elementsPerPage);
    },
  },

  methods: {
    setCurrentPage(element) {
      if (Object.keys(this.currentPage).length !== 0) {
        this.currentPage.classList.remove('stories-page__element_active');
      }
      this.currentPage = element;
      this.currentPage.classList.add('stories-page__element_active');
    },

    setPagination(pageNumber) {
      if (event.target.classList.contains('stories-page__element')) {
        this.setCurrentPage(event.target);
      } else {
        this.setCurrentPage(event.target.parentElement);
      }
      return this.$store.commit('data/stories/setPaginationExport', {
        pageNumber: pageNumber,
        pageSize: this.elementsPerPage,
      });
    },
  },
};
</script>

<style scoped>
.stories-page__page-list {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin-top: 140px;
  padding: 0;
}
.stories-page__element {
  display: block;
  width: 58px;
  height: 58px;
  margin-right: 10px;
  background-color: #fbfbfb;
  padding: 20px;
  cursor: pointer;
}
.stories-page__element:hover {
  background-color: #f4f4f4;
}

.stories-page__element_active {
  background-color: #613a93;
}

.stories-page__element_active:hover {
  background-color: #442966;
}

.stories-page__number {
  color: #181818;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

@media screen and (max-width: 1279px) {
  .stories-page__page-list {
    margin-top: 130px;
  }
  .stories-page__element {
    width: 56px;
    height: 56px;
    padding: 19px;
  }
}

@media screen and (max-width: 1023px) {
  .stories-page__page-list {
    margin-top: 110px;
  }
  .stories-page__element {
    width: 50px;
    height: 50px;
    padding: 15px;
  }
}
@media screen and (max-width: 767px) {
  .stories-page__page-list {
    margin-top: 130px;
  }
}
</style>
