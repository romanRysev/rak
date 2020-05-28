<template>
  <div class="policy-container">
    <h2 class="heading">
      Политика проекта в отношении обработки персональных данных.
    </h2>
    <ol class="terms">
      <li class="article" v-for="article in articles" :key="article.id">
        <h3 class="subtitle">{{ article.name }}</h3>
        <div
          :class="{
            'policy__article-text': article.articleText !== '',
            'policy__article-gap': article.articleText == '',
          }"
          v-html="article.articleText"
        ></div>
        <ol class="subsection">
          <li
            class="subsection__text"
            v-for="subsection in article.subsections"
            :key="subsection.id"
          >
            {{ subsection.subsectionText }}
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script>
import Container from '@/components/Container';
export default {
  components: {
    container: Container,
  },
  computed: {
    articles() {
      return this.$store.getters['data/policy/getArticles'];
    },
  },
};
</script>

<style scoped>
.policy-container {
  max-width: 780px;
  margin: 0 auto;
}

.heading {
  font-size: 38px;
  line-height: 48px;
  font-weight: 500;
  text-align: center;
  margin: 100px auto;
  padding: 30px 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}

.terms {
  list-style-type: none;
  counter-reset: article-num;
  margin: 0;
  padding: 0;
  list-style-position: inside;
  font-size: 22px;
  line-height: 30px;
}

.article {
  margin-bottom: 90px;
}

.article::before {
  counter-increment: article-num;
  content: counter(article-num) '.';
  font-weight: 600;
  margin-right: 5px;
}

.subtitle {
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  margin: 0 0 40px;
  display: inline;
}

.policy__article-text {
  margin: 40px 0 30px;
}

.policy__article-gap {
  margin-top: 40px;
}

.subsection {
  list-style-type: none;
  counter-reset: subsection-num;
}

.subsection__text {
  margin: 0 0 30px;
  position: relative;
}

.subsection__text::before {
  counter-increment: subsection-num;
  content: counter(subsection-num) '.';
  position: absolute;
  top: 0;
  left: -40px;
}

@media screen and (max-width: 1429px) {
  .policy-container {
    max-width: 700px;
    margin: 0 auto;
  }

  .heading {
    font-size: 34px;
    line-height: 44px;
    margin: 90px auto;
  }

  .terms {
    font-size: 20px;
    line-height: 28px;
  }

  .subtitle {
    font-size: 20px;
    line-height: 28px;
  }
}

@media screen and (max-width: 1279px) {
  .policy-container {
    max-width: 640px;
    margin: 0 auto;
  }

  .heading {
    font-size: 30px;
    line-height: 38px;
    margin: 80px auto;
  }

  .terms {
    font-size: 18px;
    line-height: 27px;
  }

  .article {
    margin-bottom: 40px;
  }

  .subtitle {
    font-size: 18px;
    line-height: 27px;
  }
}

@media screen and (max-width: 670px) {
  .policy-container {
    max-width: 640px;
    margin: 0 15px;
  }

  .heading {
    font-size: 18px;
    line-height: 21px;
    margin: 50px auto 40px;
    padding: 20px 0;
  }

  .terms {
    font-size: 13px;
    line-height: 16px;
  }

  .policy__article-text {
    margin: 20px 0;
  }

  .policy__article-gap {
    margin-top: 40px;
  }

  .subtitle {
    font-size: 13px;
    line-height: 16px;
  }

  .subsection {
    padding-left: 26px;
  }

  .subsection__text::before {
    left: -26px;
  }
}
</style>
