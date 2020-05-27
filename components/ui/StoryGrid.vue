<template>
  <div class="story-grid">
    <card
      v-if="searchCards.length == 0"
      v-for="card in storyCards"
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
      :photo="card.photo"
      :href="storyHref(card.id)"
    />
  </div>
</template>

<script>
import Card from '@/components/ui/Card';

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

  computed: {
    storyCards() {
      const stories = this.$store.getters['data/stories/getStories'];
      return stories.slice(0, this.storiesPerPage);
    },

    searchCards() {
      return this.$store.getters['data/stories/getSearchExport'];
    },
  },
};
</script>

<style scoped>
.story-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 70px;
  column-gap: 40px;
}

@media screen and (max-width: 1280px) {
  .story-grid {
    row-gap: 60px;
  }
}

@media screen and (max-width: 1024px) {
  .story-grid {
    column-gap: 30px;
    row-gap: 50px;
  }
}

@media screen and (max-width: 768px) {
  .story-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 50px;
  }
}
@media screen and (max-width: 455px) {
  .story-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
}
</style>
