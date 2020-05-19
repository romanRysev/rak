<template>
  <div class="stories-page__container">
    <h3 class="stories-page__title">Истории неизлечимых привычек</h3>

    <div class="stories-page__search">
      <input class="stories-page__space" type="text" />
      <button class="stories-page__button">Поиск</button>
      <button class="stories-page__button-magnifier">
        <img src="/Images/lupa.svg" />
      </button>
    </div>

    <storyGrid />

    <ul class="stories-page__page-list-container">
      <li class="stories-page__element-list">
        <span class="stories-page__number">1</span>
      </li>
      <li class="stories-page__element-list">
        <span class="stories-page__number">2</span>
      </li>
      <li class="stories-page__element-list">
        <span class="stories-page__number">3</span>
      </li>
      <li class="stories-page__element-list">
        <span class="stories-page__number">4</span>
      </li>
      <li class="stories-page__element-list">
        <span class="stories-page__number">5</span>
      </li>
      <li class="stories-page__element-list">
        <span class="stories-page__number">6</span>
      </li>
      <li class="stories-page__element-list">
        <span class="stories-page__number">7</span>
      </li>
    </ul>
  </div>
</template>

<script>
import StoryGrid from '@/components/ui/StoryGrid';
export default {
  components: {
    storyGrid: StoryGrid,
  },
};
</script>

<style scoped>
.stories-page__container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 100px 60px 120px 60px;
}
.stories-page__title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  text-align: left;
  max-width: 413px;
  margin-bottom: 70px;
  margin-right: auto;
}
.stories-page__search {
  width: 100%;
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.stories-page__space {
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  width: calc(100% - 251px);
  height: 52px;
  margin-right: 20px;
  padding: 3px 10px;

  font-size: 24px;
}

.stories-page__button {
  background-color: #613a93;
  border: 2px solid white;
  width: 226px;
  height: 52px;
  padding: 0px;

  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  transition: border 0.25s linear, color 0.25s linear,
    background-color 0.25s linear;
  cursor: pointer;
}
.stories-page__button:hover {
  background-color: white;
  border: 2px solid #613a93;
  color: #613a93;

  transition: border 0.25s linear, color 0.25s linear,
    background-color 0.25s linear;
}
.stories-page__button-magnifier {
  display: none;
  background-color: #613a93;
  border: 2px solid white;
  width: 46px;
  height: 46px;
  padding: 13px;

  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;
}
.stories-page__page-list-container {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin-top: 140px;
  padding: 0;
}
.stories-page__element-list {
  display: block;
  width: 58px;
  height: 58px;
  margin-right: 10px;
  background-color: #fbfbfb;
  padding: 20px;
  cursor: pointer;
}
.stories-page__element-list:hover {
  background-color: #f4f4f4;
}
.stories-page__number {
  color: #181818;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

@media screen and (max-width: 1279px) {
  .stories-page__container {
    padding: 90px 50px;
  }
  .stories-page__title {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 50px;
  }
  .stories-page__search {
    margin-bottom: 60px;
  }
  .stories-page__page-list-container {
    margin-top: 130px;
  }
  .stories-page__element-list {
    width: 56px;
    height: 56px;
    padding: 19px;
  }
}
@media screen and (max-width: 1023px) {
  .stories-page__container {
    padding: 80px 50px;
  }
  .stories-page__title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 40px;
  }
  .stories-page__space {
    width: calc(100% - 231px);
  }
  .stories-page__button {
    width: 208px;
  }
  .stories-page__search {
    margin-bottom: 46px;
  }
  .stories-page__page-list-container {
    margin-top: 110px;
  }
  .stories-page__element-list {
    width: 50px;
    height: 50px;
    padding: 15px;
  }
}
@media screen and (max-width: 767px) {
  .stories-page__container {
    padding: 80px 40px;
  }
  .stories-page__title {
    margin-left: auto;
    margin-bottom: 50px;
    max-width: 380px;
    text-align: center;
  }
  .stories-page__page-list-container {
    margin-top: 130px;
  }
}
@media screen and (max-width: 600px) {
  .stories-page__button {
    width: 108px;
  }
  .stories-page__space {
    width: calc(100% - 131px);
  }
  .stories-page__element-list:nth-child(n + 5) {
    display: none;
  }
}
@media screen and (max-width: 455px) {
  .stories-page__container {
    padding: 68px 15px 50px 15px;
  }
  .stories-page__title {
    max-width: 290px;
    margin-left: 0;

    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }
  .stories-page__button {
    display: none;
  }
  .stories-page__button-magnifier {
    display: block;
  }
  .stories-page__space {
    height: 46px;
    width: calc(100% - 62px);
  }
}
</style>
