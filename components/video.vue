<template>
  <div>
    <section class="video">
      <div class="video__description">
        <h2 class="video__description-title">
          Истории людей, победивших рак, но не свои привычки
        </h2>
        <h3 class="video__description-subtitle">
          Есть вещи, которые не лечатся. Вещи<br />
          ставшие частью нашего «я», фобии,<br />
          страхи. Но это точно не рак. Рак<br />
          лечится. Лучшее доказательство — <br />люди с их историями.
        </h3>
        <div class="video__selector">
          <button class="video__button_left">
            <img
              class="video__button_left_opacity"
              src="/images/button_left.svg"
            />
          </button>
          <button class="video__button_right">
            <img src="/images/button_right.svg" />
          </button>
        </div>
      </div>

      <div class="video__frame">
        <div class="video__container">
          <iframe
            class="iframe"
            id="ytplayer"
            type="text/html"
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/coOppM34GtI"
            allowfullscreen
          />
        </div>
        <div class="video__notation">
          <p class="video__notation-text">
            Все видео вы можете найте на нашем
          </p>
          <a
            class="video__notation-link"
            href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
            >YouTube канале.</a
          >
        </div>
      </div>
    </section>
    <div class="video__rectangle">
      <p class="rectangle__description">
        И В ОТЛИЧИЕ ОТ РАКА, <span class="bold">&nbsp;#ЭТОНЕЛЕЧИТСЯ</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.video {
  width: 1440px;
  height: 650px;
  background-color: white;
  display: flex;
  flex-direction: row;
}

.video__description {
  width: 413px;
  margin: 110px 40px 100px 60px;
  height: 450px;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.video__description-title {
  color: #fff;
  width: 413px;
  height: 108px;
  margin: 0px 0px 32px 0px;
  text-align: left;
  background-color: white;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
}
.video__description-subtitle {
  margin: 0px 73px 150px 0px;
  text-align: left;
  width: 340px;
  height: 110px;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

.video__selector {
  display: flex;
  flex-direction: row;
  width: 80px;
  height: 40px;
  margin: 0px 333px 0px 0px;
  background: #fbfbfb;
}

.video__button_left {
  width: 40px;
  height: 40px;
  margin: 0px;
}

.video__button_left_opacity {
  opacity: 0.2;
}
.video__button_right {
  width: 40px;
  height: 40px;
  margin: 0px;
}

.video__frame {
  width: 864px;
  height: 450px;
  margin: 100px 60px 74px 0px;
  display: flex;
  flex-direction: column;
  background-color: white;
}

.video__container {
  display: flex;
  width: 867px;
  height: 450px;
  display: block;
  background: #ededed;
  background-size: cover;
  margin: 0px 0px 10px 0px;
}
.iframe {
  border: 0;
}
.video__icon-play {
  margin: auto;
  width: 90px;
  height: 90px;
  background: #c4c4c4;
  border-radius: 50%;
}

.video__notation-text {
  display: flex;
  flex-direction: row;
  height: 16px;
  margin-right: 5px;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}
.video__notation-link {
  display: flex;
  flex-direction: row;
  height: 16px;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}
.video__notation {
  display: flex;
  flex-direction: row;
  width: 867px;
  height: 16px;
  margin: 0px 0px 74px 0px;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}

.video__rectangle {
  width: 1320px;
  height: 86px;
  margin: 0px auto;
  background: #613a93;
  border: 1px solid #000000;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: flex;
}
.rectangle__description {
  display: flex;
  width: 750px;
  height: 46px;
  justify-content: center;
  font-size: 30px;
  line-height: 46px;
  text-align: center;
  color: #ffffff;
}
.bold {
  font-weight: bold;
  font-size: 40px;
}

@media all and (min-width: 1024px) and (max-width: 1440px) {
  .video {
    width: 100vw;
  }

  .video__description {
    width: 29vw;
  }

  .video__description-title {
    display: flex;
    width: 100%;
  }

  .video__description-subtitle {
    display: flex;
    width: 80%;
  }

  .video__selector {
    display: flex;
    width: 20%;
  }

  .video__button_left {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .video__button_right {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .video__frame {
    width: 60vw;
  }

  .video__container {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .video__notation {
    width: 60%;
  }

  .video__rectangle {
    width: 92vw;
    height: 86px;
    display: flex;
  }

  .rectangle__description {
    display: flex;
    /* width: 57%; */
  }
}
</style>
