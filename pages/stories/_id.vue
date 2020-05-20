<template>
  <div class="page-container">
    <container class="container">
      <div class="story-header">
        <div class="photo-wrapper">
          <div class="inner-wrapper">
            <img
              src="/images/card__photo/photo1.jpg"
              alt=""
              class="story-photo"
            />
          </div>
        </div>
        <div class="story-header story-header__text-content">
          <h1 class="story-title">
            <span class="story-title semi-bold">Александр Тарханов:</span> «Я не
            могу победить свою пунктуальность в отличии от рака»
          </h1>
          <ul class="story-header story-header__bottom-string">
            <li>
              <button-share :text="links[0].text" @shareClick="showSocial" />
            </li>
            <li>
              <p>20 апреля 2018</p>
            </li>
          </ul>
        </div>
      </div>
    </container>

    <container class="container container_article">
      <article class="story-article">
        <p class="story-article story-article__paragraph">
          Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал
          в ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными.
        </p>
        <p class="story-article story-article__paragraph">
          У меня дома до сих пор стоят часы в каждой комнате, хотя они и не
          нужны особо — я сам чувствую, опаздываю куда-то или нет, отстаю от
          нужного графика или опережаю. Вот такие встроенные внутренние часы!
          Будильник мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже
          быстро, как в армии, за 45 секунд.
        </p>
        <p class="story-article story-article__paragraph">
          <span class="story-article__paragraph semi-bold"
            >«В футболе если команда опоздала на 15 минут, ей засчитывается
            поражение».</span
          >
        </p>
        <p class="story-article story-article__paragraph">
          Опаздывать я тоже не люблю, на все встречи прихожу заранее. Если знаю,
          что могу попасть по дороге в пробку, то не еду на машине. В аэропорт
          приезжаю задолго до начала регистрации. Лучше подожду и кофе попью,
          чем опоздаю!
        </p>
        <p class="story-article story-article__paragraph">
          Когда мне было 16 лет, мне в школе геометрию нужно было пересдавать. Я
          билеты выучил, знал абсолютно все. Пришел в нужное время, а
          учительница — нет. Ну, я какое-то время подождал ее и ушел. Потом она
          спрашивала: «Почему не дождался?». Я ответил: «В футболе если команда
          опоздала на 15 минут, ей засчитывается поражение». Экзамен мне
          все-таки поставили! Сейчас если кто-то из футболистов моей команды
          опаздывает — начинаю злиться, могу и прикрикнуть потом. А если кто-то
          опоздал на тренировку перед игрой — все, подготовка насмарку. Я сразу
          начинаю думать тогда: «Значит, точно проиграем». Такая болезненная
          пунктуальность уже не лечится. В отличие от рака.
        </p>
        <p class="story-article story-article__paragraph">
          «Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
          злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
          перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
          «Значит, точно проиграем». Такая болезненная пунктуальность уже не
          лечится».
        </p>
      </article>
      <button-share
        class="share-link share-link_article"
        :text="links[1].text"
        @shareClick="showSocial"
      />
    </container>

    <container>
      <story-grid class="story-grid" />
    </container>

    <more-articles class="more-button" />
  </div>
</template>

<script>
import Container from '~/components/Container';
import MoreArticlesButton from '~/components/ui/MoreArticlesButton';
import ButtonShare from '@/components/ui/ButtonShare';
import Link from '~/components/ui/Link';
import StoryGrid from '~/components/ui/StoryGrid';
export default {
  components: {
    container: Container,
    'share-link': Link,
    'more-articles': MoreArticlesButton,
    'story-grid': StoryGrid,
    'button-share': ButtonShare,
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
  },
  methods: {
    showSocial() {
      this.$store.commit('data/social/toggleSocial');
    },
  },
};
</script>

<style scoped>
.page-container {
  margin: 0 auto;
  /*max-width: 1320px;*/
  /*min-width: 290px;*/
  /*color: #000;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  /*justify-content: center;*/
}

.container {
  padding: 0;
}

.story-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  position: relative;
}

.photo-wrapper {
  width: 50%;
  max-width: 580px;
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

.story-header__text-content {
  flex-direction: column;
  max-width: 680px;
  padding: 30px 0 0 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}

.story-title {
  font-weight: normal;
  font-size: 38px;
  line-height: 48px;
}

.semi-bold {
  font-weight: 500;
}

.story-header__bottom-string {
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  margin-bottom: 30px;
  list-style: none;
  padding: 0;
}

.container_article {
  max-width: 780px;
  padding: 130px 0 0 0;
  margin: 0 auto;
}

.story-article {
  font-size: 22px;
  line-height: 30px;
}

.story-article__paragraph {
  padding: 0;
}

.story-article__paragraph:not(:last-of-type) {
  margin-bottom: 30px;
}

.share-link {
  color: #121212;
}

.share-link_article {
  width: 100%;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  height: 84px;
  text-align: center;
  margin-top: 70px;
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
  .page-container {
    max-width: 1180px;
  }

  .photo-wrapper {
    max-width: 518px;
  }

  .story-header__text-content {
    max-width: 600px;
  }

  .story-title {
    font-size: 34px;
    line-height: 44px;
  }

  .container_article {
    max-width: 720px;
    padding: 120px 0 0 0;
  }

  .story-article {
    font-size: 20px;
    line-height: 28px;
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
  .page-container {
    max-width: 924px;
  }

  .photo-wrapper {
    max-width: 407px;
  }

  .story-header__text-content {
    max-width: 477px;
    padding: 20px 0 0 0;
  }

  .story-title {
    font-size: 30px;
    line-height: 38px;
  }

  .story-header__bottom-string {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 15px;
  }

  .container_article {
    max-width: 640px;
    padding: 90px 0 0 0;
  }

  .story-article {
    font-size: 18px;
    line-height: 27px;
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
    margin: 50px 0 0 0;
  }

  .story-grid {
    margin: 120px 0 45px;
  }

  .more-button {
    margin: 0 0 80px 0;
  }
}

@media screen and (min-width: 730px) and (max-width: 1022px) {
  .page-container {
    max-width: 688px;
  }

  .photo-wrapper {
    width: 420px;
    max-width: 580px;
    position: absolute;
    top: calc(50% - 140px);
    left: calc(50% - 210px);
  }

  .story-header {
    padding-top: 80px;
  }

  .story-header__text-content {
    max-width: 640px;
    padding: 20px 0 0 0;
    text-align: center;
    height: 675px;
    margin: 0 auto;
  }

  .story-title {
    font-size: 30px;
    line-height: 38px;
  }

  .story-header__bottom-string {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 15px;
  }

  .container_article {
    max-width: 640px;
    padding: 100px 0 0 0;
  }

  .story-article {
    font-size: 18px;
    line-height: 27px;
  }

  .story-article__paragraph {
    padding: 0;
  }

  .story-article__paragraph:not(:last-of-type) {
    margin-bottom: 25px;
  }

  .share-link {
    font-size: 16px;
    line-height: 22px;
  }

  .share-link_article {
    font-size: 16px;
    line-height: 22px;
    height: 70px;
    margin: 80px 0 0 0;
  }

  .story-grid {
    margin: 120px 0 40px;
  }

  .more-button {
    margin: 0 0 80px 0;
  }
}

@media screen and (max-width: 729px) {
  .page-container {
    max-width: 290px;
  }

  .photo-wrapper {
    width: 290px;
    max-width: 580px;
    position: absolute;
    top: calc(50% - 100px);
    left: 0;
  }

  .story-header {
    padding-top: 50px;
  }

  .story-header__text-content {
    max-width: 640px;
    padding: 20px 0 0 0;
    text-align: center;
    height: 465px;
    margin: 0 auto;
  }

  .story-title {
    font-size: 18px;
    line-height: 21px;
  }

  .story-header__bottom-string {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 15px;
  }

  .container_article {
    max-width: 640px;
    padding: 40px 0 0 0;
  }

  .story-article {
    font-size: 13px;
    line-height: 16px;
  }

  .story-article__paragraph {
    padding: 0;
  }

  .story-article__paragraph:not(:last-of-type) {
    margin-bottom: 25px;
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
    margin: 40px 0 0 0;
  }

  .story-grid {
    margin: 100px 0 40px;
  }

  .more-button {
    margin: 0 0 50px 0;
  }
}
</style>
