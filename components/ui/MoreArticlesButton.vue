<template>
  <container>
    <a href="/stories" class="more-articles-button">Больше статей</a>
  </container>
</template>

<script>
import Container from '~/components/Container';
export default {
  components: {
    container: Container,
  },
};
</script>

<style scoped>
.more-articles-button {
  width: 100%;
  height: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
  background-color: #fbfbfb;
  text-decoration: none;
  color: #000;
  cursor: pointer;
}

.more-articles-button:hover {
  background-color: #f8f8f8;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .more-articles-button {
    height: 78px;
  }
}

@media screen and (min-width: 1023px) and (max-width: 1279px) {
  .more-articles-button {
    font-size: 13px;
    line-height: 20px;
    height: 50px;
  }
}

@media screen and (min-width: 730px) and (max-width: 1022px) {
  .more-articles-button {
    font-size: 13px;
    line-height: 20px;
    height: 50px;
  }
}

@media screen and (max-width: 729px) {
  .more-articles-button {
    font-size: 13px;
    line-height: 20px;
    height: 50px;
  }
}
</style>
