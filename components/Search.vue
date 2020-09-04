<template>
  <div class="stories-page__search">
    <input class="stories-page__space" type="text" v-model="message" />
    <button class="stories-page__button" @click="find(message)">Поиск</button>
    <button class="stories-page__button-magnifier">
      <img src="/Images/lupa.svg" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return { message: '' };
  },

  computed: {
    storyCards() {
      return this.$store.getters['data/stories/getStories'];
    },
  },

  methods: {
    find(message) {
      return this.$store.commit('data/stories/setSearchExport', message);
    },
  },
};
</script>

<style scoped>
.stories-page__search {
  width: 100%;
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.stories-page__space {
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  width: calc(100% - 251px);
  height: 52px;
  margin-right: 20px;
  padding: 3px 10px;

  font-size: 24px;
}

.stories-page__button {
  background-color: #613a93;
  border: 2px solid white;
  width: 226px;
  height: 52px;
  padding: 0px;

  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  transition: border 0.25s linear, color 0.25s linear,
    background-color 0.25s linear;
  cursor: pointer;
}
.stories-page__button:hover {
  background-color: white;
  border: 2px solid #613a93;
  color: #613a93;

  transition: border 0.25s linear, color 0.25s linear,
    background-color 0.25s linear;
}
.stories-page__button-magnifier {
  display: none;
  background-color: #613a93;
  border: 2px solid white;
  width: 46px;
  height: 46px;
  padding: 13px;

  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;
}
</style>
