<template>
  <container>
    <div class="story-header">
      <div class="photo-wrapper">
        <div class="inner-wrapper">
          <img :src="getCurrentStory.photo" alt="фото" class="story-photo" />
        </div>
      </div>

      <h1 class="story-title">
        <span class="story-title semi-bold">{{ getCurrentStory.title }}: </span
        >&laquo;{{ getCurrentStory.subtitle }}&raquo;
      </h1>

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
      <article class="article">
        <p
          class="article__paragraph"
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
.story-header {
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

.story-photo {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-title {
  padding: 30px 0 0 0;
  border-top: 1px solid #efefef;
  grid-column: 2/3;

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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article {
  font-size: 22px;
  line-height: 30px;
  margin: 130px auto 70px;
}

.article__paragraph {
  padding: 0;
}

.article__paragraph:not(:last-of-type) {
  margin-bottom: 30px;
}

.share-link_article {
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  width: fit-content;
  height: fit-content;
  margin: 30px 0;
}

.story-grid {
  margin-top: 150px;
}

.more-button {
  margin: 70px 0 100px;
  padding: 0;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .story-header {
    grid-template-columns: minmax(518px, 580px) minmax(602px, 1fr);
  }

  .story-title {
    font-size: 34px;
    line-height: 44px;
  }

  .article-container {
    max-width: 720px;
  }

  .article {
    font-size: 20px;
    line-height: 28px;
    margin: 120px auto 60px;
  }

  .article__paragraph {
    padding: 0;
  }

  .share-link {
    font-size: 18px;
    line-height: 24px;
  }

  .story-grid {
    margin-top: 140px;
    margin-bottom: 50px;
  }

  .more-button {
    margin: 0 0 90px 0;
  }
}

@media screen and (min-width: 1023px) and (max-width: 1279px) {
  .story-header {
    grid-template-columns: minmax(407px, 518px) minmax(477px, 1fr);
    grid-gap: 40px;
  }

  .story-title {
    padding: 20px 0 0 0;

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

  .article {
    font-size: 18px;
    line-height: 27px;
    margin: 90px auto 45px;
  }

  .article__paragraph {
    padding: 0;
  }

  .article__paragraph:not(:last-of-type) {
    margin-bottom: 30px;
  }

  .share-link {
    font-size: 16px;
    line-height: 22px;
  }

  .share-link_article {
    font-size: 16px;
    line-height: 22px;
    margin: 24px 0;
  }

  .story-grid {
    margin-top: 110px;
    margin-bottom: 35px;
  }

  .more-button {
    margin: 0 0 80px 0;
  }
}

@media screen and (min-width: 730px) and (max-width: 1022px) {
  .story-header {
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

  .story-title {
    padding: 20px 0 0 0;
    text-align: center;
    margin: 0 auto;
    grid-column: 1/2;
    grid-row: 1/2;

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

  .article {
    font-size: 18px;
    line-height: 27px;
    margin: 100px auto 80px;
  }

  .article__paragraph {
    padding: 0;
  }

  .article__paragraph:not(:last-of-type) {
    margin-bottom: 30px;
  }

  .share-link {
    font-size: 16px;
    line-height: 22px;
  }

  .share-link_article {
    font-size: 16px;
    line-height: 22px;
    margin: 24px 0;
  }

  .story-grid {
    margin-top: 110px;
    margin-bottom: 30px;
  }

  .more-button {
    margin: 0 0 80px 0;
  }
}

@media screen and (max-width: 729px) {
  .story-header {
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

  .story-title {
    padding: 20px 0 0 0;
    text-align: center;
    margin: 0 auto;
    grid-column: 1/2;
    grid-row: 1/2;

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

  .article {
    font-size: 13px;
    line-height: 16px;
    margin: 40px auto;
  }

  .article__paragraph {
    padding: 0;
  }

  .article__paragraph:not(:last-of-type) {
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
    margin: 20px 0;
  }

  .story-grid {
    margin: 90px -10px 30px;
  }

  .more-button {
    margin: 0 0 50px 0;
  }
}
</style>
