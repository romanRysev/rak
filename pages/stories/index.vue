<template>
  <div class="stories-page__container">
    <h3 class="stories-page__title">Истории неизлечимых привычек</h3>
    <search />

    <storyGrid :storiesPerPage="storyCards.length" />
    <pagination
      :totalElements="storyCards.length"
      :elementsPerPage="elementsPerPage"
    />
  </div>
</template>

<script>
import Container from '~/components/Container';
import StoryGrid from '@/components/ui/StoryGrid';
import Search from '@/components/Search';
import Pagination from '@/components/ui/pagination';
export default {
  components: {
    container: Container,
    storyGrid: StoryGrid,
    search: Search,
    pagination: Pagination,
  },

  computed: {
    storyCards() {
      return this.$store.getters['data/stories/getStories'];
    },
  },

  created() {
    this.$store.dispatch('data/stories/fetchStories');
  },

  data() {
    return { elementsPerPage: 3 };
  },
};
</script>

<style scoped>
.stories-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
}
.page-title {
  /*font-family: 'Inter';*/
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  text-align: left;
  max-width: 413px;
  margin-bottom: 60px;
  margin-right: auto;
}
.page-list {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin-top: 140px;
  padding: 0;
}
.page-list__element {
  display: block;
  width: 58px;
  height: 58px;
  margin-right: 10px;
  background-color: #fbfbfb;
  padding: 20px;
  cursor: pointer;
}
.page-list__element:hover {
  background-color: #f4f4f4;
}
.element-number {
  color: #181818;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

@media screen and (max-width: 1280px) {
  .stories-container {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  .page-title {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 50px;
  }
  .stories-search {
    margin-bottom: 60px;
    height: 48px;
  }

  .search-button {
    width: 290px;
  }
}
@media screen and (max-width: 1024px) {
  .stories-container {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .page-title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 40px;
    max-width: 40%;
  }
  .search-input {
    width: 100%;
  }
  .search-button {
    width: 280px;
  }
  .stories-search {
    margin-bottom: 46px;
  }
}
@media screen and (max-width: 768px) {
  .stories-container {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .page-title {
    margin-left: auto;
    margin-bottom: 50px;
    max-width: 380px;
    text-align: center;
  }
}
@media screen and (max-width: 600px) {
  .page-list__element:nth-child(n + 5) {
    display: none;
  }
}
@media screen and (max-width: 729px) {
  .stories-container {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .page-title {
    max-width: 290px;
    margin-left: 0;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    margin-bottom: 40px;
  }

  .stories-search {
    margin-bottom: 30px;
  }

  .search-input {
    height: 100%;
    width: 100%;
  }

  .search-button {
    display: none;
  }
  .search-button_magnifier {
    display: block;
    height: 100%;
    width: 50px;
    margin-left: 8px;
  }

  .page-list {
    margin-top: 50px;
  }
}
</style>
