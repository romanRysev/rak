<template>
  <div class="story-grid">
    <card
      v-for="card in storyCards"
      :key="card.id"
      :title="card.title"
      :subtitle="card.subtitle"
      :photo="card.photo"
    />
  </div>
</template>

<script>
import Card from '@/components/ui/Card';

export default {
  components: {
    card: Card,
  },

  computed: {
    storyCards() {
      return this.$store.getters['data/stories/getStories'];
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
@media screen and (max-width: 1024px) {
  .story-grid {
    column-gap: 30px;
    row-gap: 46px;
  }
}
@media screen and (max-width: 1279px) {
}
@media screen and (max-width: 767px) {
  .story-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
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
