<template>
  <div class="page-container">
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
            <share-link
              class="share-link"
              :url="links[0].url"
              :text="links[0].text"
            />
          </li>
          <li>
            <p>20 апреля 2018</p>
          </li>
        </ul>
      </div>
    </div>

    <article class="story-article">
      <p class="story-article story-article__paragraph">
        Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал в
        ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными.
      </p>
      <p class="story-article story-article__paragraph">
        У меня дома до сих пор стоят часы в каждой комнате, хотя они и не нужны
        особо — я сам чувствую, опаздываю куда-то или нет, отстаю от нужного
        графика или опережаю. Вот такие встроенные внутренние часы! Будильник
        мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже быстро, как в
        армии, за 45 секунд.
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
        приезжаю задолго до начала регистрации. Лучше подожду и кофе попью, чем
        опоздаю!
      </p>
      <p class="story-article story-article__paragraph">
        Когда мне было 16 лет, мне в школе геометрию нужно было пересдавать. Я
        билеты выучил, знал абсолютно все. Пришел в нужное время, а учительница
        — нет. Ну, я какое-то время подождал ее и ушел. Потом она спрашивала:
        «Почему не дождался?». Я ответил: «В футболе если команда опоздала на 15
        минут, ей засчитывается поражение». Экзамен мне все-таки поставили!
        Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится. В отличие от рака.
      </p>
      <p class="story-article story-article__paragraph">
        «Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится».
      </p>
    </article>

    <share-link class="share-link" :url="links[1].url" :text="links[1].text" />

    <story-grid class="story-grid" />
    <more-articles class="more-button" />
  </div>
</template>

<script>
import MoreArticlesButton from '~/components/ui/MoreArticlesButton';
import Link from '~/components/ui/Link';
import StoryGrid from '~/components/ui/StoryGrid';
export default {
  components: {
    'share-link': Link,
    'more-articles': MoreArticlesButton,
    'story-grid': StoryGrid,
  },
  data() {
    return {
      links: [
        {
          url: '#',
          text: 'Поделитесь <span>&#8599</span>',
        },
        {
          url: '#',
          text:
            'Поделитесь этой статьей в своих социальных сетях <span>&#8599</span>',
        },
      ],
    };
  },
};
</script>

<style scoped>
.page-container {
  margin: 0 auto;
  max-width: 1320px;
  min-width: 290px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.story-article {
  padding: 130px 0 100px;
  max-width: 780px;
  margin: 0 auto;
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

.story-grid {
  margin-top: 190px;
}

.more-button {
  height: 82px;
  margin-bottom: 100px;
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

  .story-article {
    font-size: 20px;
    line-height: 28px;
    max-width: 720px;
    padding: 120px 0 80px;
  }

  .story-article__paragraph {
    padding: 0;
  }

  .share-link {
    font-size: 18px;
    line-height: 24px;
  }

  .story-grid {
    margin: 180px 0 60px;
  }

  .more-button {
    height: 78px;
    margin-bottom: 90px;
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

  .story-article {
    font-size: 18px;
    line-height: 27px;
    max-width: 640px;
    padding: 90px 0 70px;
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

  .story-grid {
    margin: 140px 0 45px;
  }

  .more-button {
    margin-bottom: 80px;
    font-size: 13px;
    line-height: 20px;
    height: 50px;
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

  .story-article {
    font-size: 18px;
    line-height: 27px;
    max-width: 640px;
    padding: 100px 0;
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

  .story-grid {
    margin: 145px 0 40px;
  }

  .more-button {
    margin-bottom: 80px;
    font-size: 13px;
    line-height: 20px;
    height: 50px;
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

  .story-article {
    font-size: 13px;
    line-height: 16px;
    padding: 40px 0 60px;
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

  .story-grid {
    margin: 125px 0 40px;
  }

  .more-button {
    margin-bottom: 50px;
    font-size: 13px;
    line-height: 20px;
    height: 50px;
  }
}
</style>
