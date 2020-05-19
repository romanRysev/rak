<template>
  <section class="video">
    <container class="container container_video">
      <div class="description-side">
        <div class="description-side__text">
          <h3 class="section-title">
            Истории людей, победивших рак, но не свои привычки
          </h3>
          <p class="section-description">
            Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я»,
            фобии, страхи. Но это точно не рак. Рак лечится. Лучшее
            доказательство — люди с их историями.
          </p>
        </div>

        <div class="selector">
          <button
            class="selector selector__button selector__button_left selector__button_left_disabled"
          />
          <button class="selector selector__button selector__button_right" />
        </div>
      </div>

      <div class="frame-container">
        <iframe
          class="video-frame"
          id="ytplayer"
          type="text/html"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/coOppM34GtI"
          allowfullscreen
        />
        <button class="play-button" />
      </div>

      <p class="video-notation">
        Все видео вы можете найти на нашем
        <a
          class="video-notation__link"
          href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
          >YouTube канале</a
        >.
      </p>
    </container>

    <container>
      <h3 class="hashtag-band">
        и в отличие от рака,<span class="hashtag">&nbsp;#этонелечится</span>
      </h3>
    </container>
  </section>
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
.video {
  padding: 100px 0 0 0;
  color: #666;
}
.container_video {
  margin-bottom: 74px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, min-content);
}
.description-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0 0 0;
}
.section-title {
  margin-bottom: 32px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
}
.section-description {
  font-size: 18px;
  line-height: 22px;
  max-width: 340px;
}
.selector {
  display: flex;
  flex-direction: row;
  width: 80px;
  height: 40px;
}
.selector__button {
  width: 50%;
  height: 40px;
  margin: 0px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fbfbfb;
  border: none;
  cursor: pointer;
}
.selector__button_left {
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L1 9L9 17' stroke='black'/%3E%3C/svg%3E");
}

/*
.video__button_left_opacity {
  opacity: 0.2;
}
*/

.selector__button_right {
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 17L9 9L1 1' stroke='black'/%3E%3C/svg%3E%0A");
}

.selector__button_left_disabled {
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L1 9L9 17' stroke='%23BFBFBF'/%3E%3C/svg%3E%0A");
  cursor: default;
}

.selector__button_right_disabled {
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 17L9 9L1 1' stroke='%23BFBFBF'/%3E%3C/svg%3E%0A");
  cursor: default;
}

.frame-container {
  width: 100%;
  max-width: 867px;
  height: 450px;
  justify-self: end;
  position: relative;
}

.video-frame {
  border: 0;
}

.play-button {
  margin: auto;
  width: 90px;
  height: 90px;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ff5894;
  background-image: url("data:image/svg+xml,%3Csvg fill='none' height='90' viewBox='0 0 90 90' width='90' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m45 90c24.8528 0 45-20.1472 45-45s-20.1472-45-45-45-45 20.1472-45 45 20.1472 45 45 45zm-8.9341-26.1464 27.2472-17.1613c1.2455-.7845 1.2455-2.6001 0-3.3846l-27.2472-17.1613c-1.3319-.8388-3.0659.1183-3.0659 1.6923v34.3226c0 1.574 1.734 2.5311 3.0659 1.6923z' fill='%23cecece' fill-rule='evenodd' opacity='.8'/%3E%3C/svg%3E");
  cursor: pointer;
}
.video-notation {
  font-size: 12px;
  line-height: 16px;
  grid-column: 2 / span 1;
  margin-top: 10px;
  width: 100%;
  max-width: 867px;
  justify-self: end;
}
.video-notation__link {
  color: #666;
}
.hashtag-band {
  height: 86px;
  background: #613a93;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 30px;
  line-height: 46px;
  color: #fff;
  text-transform: uppercase;
}

.hashtag {
  font-weight: bold;
  font-size: 40px;
}

@media all and (min-width: 1024px) and (max-width: 1439px) {
  .section-title {
    /*display: flex;*/
    /*width: 100%;*/
  }

  .section-description {
    /*display: flex;*/
    /*width: 80%;*/
  }

  .selector {
    display: flex;
    width: 20%;
  }

  .selector__button_left {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .selector__button_right {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .video-frame {
    /*width: 100%;*/
    /*height: 100%;*/
    /*display: flex;*/
  }

  .video-notation {
    /*width: 60%;*/
  }

  .hashtag-band {
    /*width: 92vw;*/
    /*height: 86px;*/
    /*display: flex;*/
  }
}
</style>
