<template>
  <container>
    <section class="stories">
      <h3 class="stories__title">Истории неизлечимых привычек</h3>
      <stories-grid />
      <more-articles class="more-button" />
    </section>
  </container>
</template>

<script>
import Container from '~/components/Container';
import StoryGrid from '@/components/ui/StoryGrid';
import MoreArticlesButton from '~/components/ui/MoreArticlesButton';
export default {
  components: {
    container: Container,
    'stories-grid': StoryGrid,
    'more-articles': MoreArticlesButton,
  },
};
</script>

<style scoped>
.stories {
  padding: 100px 0;
}
.stories__title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  text-align: left;
  max-width: 413px;
  margin-bottom: 70px;
}
/** Эти стили отпали при выносе кнопки "Больше статей" в отдельный элемент */
/*.stories__link-all {
  display: block;
  text-decoration: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  max-width: 100%;
  height: 82px;
  text-align: center;
  padding: 31px 0;
  background-color: #fbfbfb;
  color: #000000;
}
.stories__link-all:visited {
  color: #000000;
}*/

.more-button {
  padding: 0;
  margin-top: 70px;
}

@media screen and (max-width: 1279px) {
  .stories {
    padding: 90px 0;
  }
  .stories__title {
    margin-bottom: 60px;
    font-size: 28px;
    line-height: 32px;
  }
  .more-button {
    margin-top: 40px;
  }
}
@media screen and (max-width: 1023px) {
  .stories {
    padding: 80px 0;
  }
  .stories__title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 46px;
  }
  .more-button {
    margin-top: 40px;
  }
}
@media screen and (max-width: 767px) {
  .stories {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .stories__title {
    max-width: 380px;
    margin-bottom: 60px;
    text-align: center;
  }
}
@media screen and (max-width: 455px) {
  .stories {
    padding: 50px 0;
  }
  .stories__title {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 40px;
    text-align: start;
    margin-right: auto;
  }
}
</style>
