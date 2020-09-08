<template>
  <div class="story-grid">
    <card
      v-if="searchCards.length == 0"
      v-for="card in pagination"
      :key="card.id"
      :title="card.author"
      :subtitle="card.title"
      :photo="'https://strapi.kruzhok.io' + card.ImageUrl[0].url"
      :href="storyHref(card.id)"
    />

    <card
      v-if="searchCards.length !== 0"
      v-for="card in searchCards"
      :key="card.id"
      :title="card.title"
      :subtitle="card.subtitle"
      :photo="'https://strapi.kruzhok.io' + card.ImageUrl[0].url"
      :href="storyHref(card.id)"
    />
  </div>
</template>

<script>
import Card from '@/components/ui/card';

export default {
  components: {
    card: Card,
  },

  props: {
    storiesPerPage: Number,
  },

  methods: {
    storyHref(id) {
      return 'stories/' + id;
    },
  },

  created() {
    return this.$store.commit('data/stories/setPaginationExport', {
      pageNumber: 1,
      pageSize: this.storiesPerPage,
    });
  },

  computed: {
    storyCards() {
      const stories = this.$store.getters['data/stories/getStories'];
      return stories.slice(0, this.storiesPerPage);
    },

    searchCards() {
      return this.$store.getters['data/stories/getSearchExport'];
    },

    pagination() {
      return this.$store.getters['data/stories/getPaginationExport'];
    },
  },
};
</script>

<style scoped>
.story-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 50px;
  column-gap: 20px;
  margin: -10px;
}

@media screen and (max-width: 1280px) {
  .story-grid {
    row-gap: 40px;
  }
}

@media screen and (max-width: 1024px) {
  .story-grid {
    column-gap: 10px;
    row-gap: 25px;
  }
}

@media screen and (max-width: 768px) {
  .story-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 20px;
  }
}
@media screen and (max-width: 455px) {
  .story-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
}
</style>
