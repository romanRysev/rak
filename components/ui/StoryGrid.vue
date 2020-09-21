<template>
  <div class="story-grid">
    <card
      v-for="card in pagination"
      :key="card.id"
      :title="card.author"
      :subtitle="card.title"
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
    this.$store.commit('data/stories/setPaginationMode', {
      mode: 'main',
    });

    return this.$store.commit('data/stories/setPaginationExport', {
      pageNumber: 1,
      pageSize: this.storiesPerPage,
    });
  },

  computed: {
    searchCards() {
      return this.$store.getters['data/stories/getSearchExport'];
    },

    pagination() {
      if (this.searchCards.length == 0) {
        this.$store.commit('data/stories/setPaginationMode', {
          mode: 'main',
        });
        return this.$store.getters['data/stories/getPaginationExport'];
      }

      if (this.searchCards.length !== 0) {
        this.$store.commit('data/stories/setPaginationMode', {
          mode: 'search',
        });
        return this.$store.getters['data/stories/getPaginationExport'];
      }
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
