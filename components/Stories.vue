<template>
  <section class="stories">
    <container>
      <h3 class="stories__title">Истории неизлечимых привычек</h3>
      <storiesgrid />
      <morearticles class="stories__more-button" />
    </container>
  </section>
</template>

<script>
import Container from '~/components/Container';
import StoryGrid from '@/components/ui/StoryGrid';
import MoreArticlesButton from '~/components/ui/MoreArticlesButton';
export default {
  components: {
    container: Container,
    storiesgrid: StoryGrid,
    morearticles: MoreArticlesButton,
  },
};
</script>

<style scoped>
.stories {
  padding: 100px 0;
}
.stories__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 413px;
  margin-bottom: 70px;
}
.stories__more-button {
  padding: 0;
  margin-top: 70px;
}

@media screen and (max-width: 1280px) {
  .stories {
    padding: 90px 0;
  }
  .stories__title {
    margin-bottom: 60px;
    font-size: 28px;
    line-height: 32px;
  }
  .stories__more-button {
    margin-top: 60px;
  }
}
@media screen and (max-width: 1024px) {
  .stories {
    padding: 80px 0 80px;
  }
  .stories__title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 46px;
    width: 340px;
  }
  .stories__more-button {
    margin-top: 40px;
  }
}
@media screen and (max-width: 768px) {
  .stories {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .stories__title {
    max-width: 380px;
    text-align: center;
    margin: 0 auto 60px;
  }

  .stories__more-button {
    margin-top: 50px;
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
    text-align: left;
    width: 100%;
  }

  .stories__more-button {
    margin-top: 40px;
  }
}
</style>
