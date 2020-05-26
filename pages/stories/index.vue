<template>
  <container class="stories-container">
    <h3 class="page-title">Истории неизлечимых привычек</h3>
    <div class="stories-search">
      <input class="search-input" type="text" />
      <button class="search-button">Поиск</button>
      <button class="search-button search-button_magnifier">
        <img src="/Images/lupa.svg" alt="" />
      </button>
    </div>

    <storyGrid />

    <ul class="page-list">
      <li class="page-list__element">
        <span class="element__number">1</span>
      </li>
      <li class="page-list__element">
        <span class="element__number">2</span>
      </li>
      <li class="page-list__element">
        <span class="element__number">3</span>
      </li>
      <li class="page-list__element">
        <span class="element__number">4</span>
      </li>
      <li class="page-list__element">
        <span class="element__number">5</span>
      </li>
      <li class="page-list__element">
        <span class="element__number">6</span>
      </li>
      <li class="page-list__element">
        <span class="element__number">7</span>
      </li>
    </ul>
  </container>
</template>

<script>
import Container from '~/components/Container';
import StoryGrid from '@/components/ui/StoryGrid';
export default {
  components: {
    container: Container,
    storyGrid: StoryGrid,
  },
};
</script>

<style scoped>
.stories-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 120px;
}
.page-title {
  /*font-family: 'Inter';*/
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  text-align: left;
  max-width: 413px;
  margin-bottom: 70px;
  margin-right: auto;
}
.stories-search {
  width: 100%;
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.search-input {
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  width: calc(100% - 251px);
  height: 52px;
  margin-right: 20px;
  padding: 3px 10px;

  font-size: 24px;
}

.search-button {
  background-color: #613a93;
  border: none;
  width: 226px;
  height: 52px;
  padding: 0px;

  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  /*transition: border 0.25s linear, color 0.25s linear,*/
  /*  background-color 0.25s linear;*/
  cursor: pointer;
}
.search-button:hover {
  /*background-color: white;
  border: 2px solid #613a93;
  color: #613a93;

  transition: border 0.25s linear, color 0.25s linear,
    background-color 0.25s linear;*/

  /* Прикольный hover, но не по макету (захотите – так раскомментите) */

  opacity: 0.9;
  transition: 0.3s;
}
.search-button_magnifier {
  display: none;
  width: 46px;
  height: 46px;
  padding: 13px;
}

.page-list {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin-top: 140px;
  padding: 0;
}
.page-list__element {
  display: block;
  width: 58px;
  height: 58px;
  margin-right: 10px;
  background-color: #fbfbfb;
  padding: 20px;
  cursor: pointer;
}
.page-list__element:hover {
  background-color: #f4f4f4;
}
.element__number {
  color: #181818;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

@media screen and (max-width: 1279px) {
  .stories-container {
    padding: 90px 50px;
  }
  .page-title {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 50px;
  }
  .stories-search {
    margin-bottom: 60px;
  }
  .page-list {
    margin-top: 130px;
  }
  .page-list__element {
    width: 56px;
    height: 56px;
    padding: 19px;
  }
}
@media screen and (max-width: 1023px) {
  .stories-container {
    padding: 80px 50px;
  }
  .page-title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 40px;
  }
  .search-input {
    width: calc(100% - 231px);
  }
  .search-button {
    width: 208px;
  }
  .stories-search {
    margin-bottom: 46px;
  }
  .page-list {
    margin-top: 110px;
  }
  .page-list__element {
    width: 50px;
    height: 50px;
    padding: 15px;
  }
}
@media screen and (max-width: 767px) {
  .stories-container {
    padding: 80px 40px;
  }
  .page-title {
    margin-left: auto;
    margin-bottom: 50px;
    max-width: 380px;
    text-align: center;
  }
  .page-list {
    margin-top: 130px;
  }
}
@media screen and (max-width: 600px) {
  .search-button {
    width: 108px;
  }
  .search-input {
    width: calc(100% - 131px);
  }
  .page-list__element:nth-child(n + 5) {
    display: none;
  }
}
@media screen and (max-width: 455px) {
  .stories-container {
    padding: 68px 15px 50px 15px;
  }
  .page-title {
    max-width: 290px;
    margin-left: 0;

    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }
  .search-button {
    display: none;
  }
  .search-button_magnifier {
    display: block;
  }
  .search-input {
    height: 46px;
    width: calc(100% - 62px);
  }
}
</style>
