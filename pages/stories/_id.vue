<template>
  <container>
    <div class="story__header">
      <div class="photo-wrapper">
        <div class="inner-wrapper">
          <img :src="getCurrentStory.photo" alt="фото" class="story__photo" />
        </div>
      </div>

      <div class="story__header story-header__text-content">
        <h1 class="story-title">
          <span class="story-title semi-bold"
            >{{ getCurrentStory.title }}: </span
          >&laquo;{{ getCurrentStory.subtitle }}&raquo;
        </h1>
      </div>

      <ul class="story-header__bottom-string">
        <li>
          <button-share
            class="header-share"
            :text="links[0].text"
            @shareClick="showSocial"
          />
        </li>
        <li>
          <p>{{ getCurrentStory.date }}</p>
        </li>
      </ul>
    </div>

    <div class="article-container">
      <article class="story-article">
        <p
          class="story-article__paragraph"
          v-for="article in getCurrentStory.articles"
          :key="article"
        >
          {{ article }}
        </p>
      </article>

      <break-line />
      <button-share
        class="share-link share-link_article"
        :text="links[1].text"
        @shareClick="showSocial"
      />
      <break-line />
    </div>

    <story-grid class="story-grid" />
    <more-articles class="more-button" />
  </container>
</template>

<script>
import Container from '~/components/Container';
import MoreArticlesButton from '~/components/ui/MoreArticlesButton';
import ButtonShare from '~/components/ui/ButtonShare';
import Link from '~/components/ui/Link';
import StoryGrid from '~/components/ui/StoryGrid';
import BreakLine from '~/components/ui/BreakLine';

export default {
  components: {
    container: Container,
    'share-link': Link,
    'more-articles': MoreArticlesButton,
    'story-grid': StoryGrid,
    'button-share': ButtonShare,
    'break-line': BreakLine,
  },
  created() {
    return this.$store.commit('data/stories/setCurrentStory', this.$route);
  },
  data() {
    return {
      links: [
        {
          text: 'Поделитесь <span>&#8599</span>',
        },
        {
          text:
            'Поделитесь этой статьей в своих социальных сетях <span>&#8599</span>',
        },
      ],
    };
  },
  computed: {
    socialShown() {
      return this.$store.getters['data/social/getSocialShown'];
    },
    getCurrentStory() {
      return this.$store.getters['data/stories/getCurrentStory'];
    },
  },
  methods: {
    showSocial() {
      this.$store.commit('data/social/toggleSocial');
    },
  },
};
</script>

<style scoped>
.story__header {
  width: 100%;
  padding-top: 100px;
  display: grid;
  grid-template-columns: minmax(508px, 1fr) minmax(680px, 1fr);
  grid-template-rows: repeat(2, auto);
  column-gap: 60px;
  justify-content: space-between;
}

.photo-wrapper {
  width: 100%;
  height: 100%;
  grid-column: 1/2;
  grid-row: 1/3;
}

.inner-wrapper {
  width: 100%;
  padding-top: 100%;
  position: relative;
}

.story__photo {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-header__text-content {
  display: flex;
  flex-direction: column;
  padding: 30px 0 0 0;
  border-top: 1px solid #efefef;
  grid-column: 2/3;
}

.story-title {
  font-weight: normal;
  font-size: 38px;
  line-height: 48px;
  align-self: baseline;
}

.semi-bold {
  font-weight: 500;
}

.story-header__bottom-string {
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  list-style: none;
  padding: 0 0 30px 0;
  align-self: end;
  border-bottom: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
}

.article-container {
  max-width: 780px;
  margin: 0 auto;
}

.story-article {
  font-size: 22px;
  line-height: 30px;
  margin: 130px auto 70px;
}

.story-article__paragraph {
  padding: 0;
}

.story-article__paragraph:not(:last-of-type) {
  margin-bottom: 30px;
}

.share-link_article {
  width: 100%;
  height: 84px;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
}

.story-grid {
  margin-top: 160px;
}

.more-button {
  margin: 70px 0 100px;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .story__header {
    grid-template-columns: minmax(518px, 580px) minmax(602px, 1fr);
  }

  .story-title {
    font-size: 34px;
    line-height: 44px;
  }

  .article-container {
    max-width: 720px;
  }

  .story-article {
    font-size: 20px;
    line-height: 28px;
    margin: 120px auto 60px;
  }

  .story-article__paragraph {
    padding: 0;
  }

  .share-link {
    font-size: 18px;
    line-height: 24px;
  }

  .story-grid {
    margin: 150px 0 60px;
  }

  .more-button {
    margin: 0 0 90px 0;
  }
}

@media screen and (min-width: 1023px) and (max-width: 1279px) {
  .story__header {
    grid-template-columns: minmax(407px, 518px) minmax(477px, 1fr);
    grid-gap: 40px;
  }

  .story-header__text-content {
    padding: 20px 0 0 0;
  }

  .story-title {
    font-size: 30px;
    line-height: 38px;
  }

  .story-header__bottom-string {
    font-size: 16px;
    line-height: 24px;
    padding: 0 0 15px 0;
  }

  .header-share {
    font-size: 16px;
    line-height: 24px;
  }

  .article-container {
    max-width: 640px;
  }

  .story-article {
    font-size: 18px;
    line-height: 27px;
    margin: 90px auto 45px;
  }

  .story-article__paragraph {
    padding: 0;
  }

  .story-article__paragraph:not(:last-of-type) {
    margin-bottom: 30px;
  }

  .share-link {
    font-size: 16px;
    line-height: 22px;
  }

  .share-link_article {
    font-size: 16px;
    line-height: 22px;
    height: 70px;
  }

  .story-grid {
    margin: 120px 0 45px;
  }

  .more-button {
    margin: 0 0 80px 0;
  }
}

@media screen and (min-width: 730px) and (max-width: 1022px) {
  .story__header {
    padding-top: 80px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
  }

  .photo-wrapper {
    width: 420px;
    max-width: 580px;
    grid-column: 1/2;
    grid-row: 2/3;
    padding: 60px 0;
    margin: 0 auto;
  }
  .story-header__text-content {
    padding: 20px 0 0 0;
    text-align: center;
    margin: 0 auto;
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .story-title {
    font-size: 30px;
    line-height: 38px;
  }

  .story-header__bottom-string {
    font-size: 16px;
    line-height: 24px;
    grid-column: 1/2;
    max-width: 640px;
    padding: 0 0 15px 0;
  }

  .article-container {
    max-width: 640px;
  }

  .story-article {
    font-size: 18px;
    line-height: 27px;
    margin: 100px auto 80px;
  }

  .story-article__paragraph {
    padding: 0;
  }

  .story-article__paragraph:not(:last-of-type) {
    margin-bottom: 30px;
  }

  .share-link {
    font-size: 16px;
    line-height: 22px;
  }

  .share-link_article {
    font-size: 16px;
    line-height: 22px;
    height: 70px;
  }

  .story-grid {
    margin: 120px 0 40px;
  }

  .more-button {
    margin: 0 0 80px 0;
  }
}

@media screen and (max-width: 729px) {
  .story__header {
    padding-top: 50px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }

  .photo-wrapper {
    grid-column: 1/2;
    grid-row: 2/3;
    padding: 30px 0;
    margin: 0 auto;
    width: 100%;
    max-width: 290px;
  }
  .story-header__text-content {
    padding: 20px 0 0 0;
    text-align: center;
    margin: 0 auto;
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .story-title {
    font-size: 18px;
    line-height: 21px;
  }

  .story-header__bottom-string {
    font-size: 13px;
    line-height: 16px;
    grid-column: 1/2;
    max-width: 640px;
    padding: 0 0 20px 0;
  }

  .article-container {
    max-width: 420px;
  }

  .story-article {
    font-size: 13px;
    line-height: 16px;
    margin: 40px auto;
  }

  .story-article__paragraph {
    padding: 0;
  }

  .story-article__paragraph:not(:last-of-type) {
    margin-bottom: 15px;
  }

  .share-link {
    font-size: 13px;
    line-height: 16px;
    text-align: center;
  }

  .share-link_article {
    font-size: 13px;
    line-height: 16px;
    height: 74px;
  }

  .story-grid {
    margin: 100px 0 40px;
  }

  .more-button {
    margin: 0 0 50px 0;
  }
}
</style>
