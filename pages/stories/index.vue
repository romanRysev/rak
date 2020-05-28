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
        <span class="element-number">1</span>
      </li>
      <li class="page-list__element">
        <span class="element-number">2</span>
      </li>
      <li class="page-list__element">
        <span class="element-number">3</span>
      </li>
      <li class="page-list__element">
        <span class="element-number">4</span>
      </li>
      <li class="page-list__element">
        <span class="element-number">5</span>
      </li>
      <li class="page-list__element">
        <span class="element-number">6</span>
      </li>
      <li class="page-list__element">
        <span class="element-number">7</span>
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
  padding-bottom: 100px;
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
  margin-bottom: 60px;
  margin-right: auto;
}
.stories-search {
  width: 100%;
  height: 52px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.search-input {
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 3px 10px;
  font-size: 24px;
}

.search-input:focus {
  outline: none;
}

.search-button {
  background-color: #613a93;
  border: none;
  width: 280px;
  height: 100%;
  padding: 0;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;
  margin-left: 20px;
}
.search-button:hover {
  opacity: 0.8;
  transition: 0.3s;
}
.search-button_magnifier {
  display: none;
  width: 46px;
  height: 100%;
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
.element-number {
  color: #181818;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

@media screen and (max-width: 1280px) {
  .stories-container {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  .page-title {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 50px;
  }
  .stories-search {
    margin-bottom: 60px;
    height: 48px;
  }

  .search-button {
    width: 290px;
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
@media screen and (max-width: 1024px) {
  .stories-container {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .page-title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 40px;
    max-width: 40%;
  }
  .search-input {
    width: 100%;
  }
  .search-button {
    width: 280px;
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
@media screen and (max-width: 768px) {
  .stories-container {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .page-title {
    margin-left: auto;
    margin-bottom: 50px;
    max-width: 380px;
    text-align: center;
  }

  .stories-search {
    height: 46px;
    margin-bottom: 60px;
  }

  .search-button {
    width: 315px;
    margin-left: 20px;
  }

  .page-list {
    margin-top: 130px;
  }
}
@media screen and (max-width: 600px) {
  .page-list__element:nth-child(n + 5) {
    display: none;
  }
}
@media screen and (max-width: 729px) {
  .stories-container {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .page-title {
    max-width: 290px;
    margin-left: 0;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    margin-bottom: 40px;
  }

  .stories-search {
    margin-bottom: 30px;
  }

  .search-input {
    height: 100%;
    width: 100%;
  }

  .search-button {
    display: none;
  }
  .search-button_magnifier {
    display: block;
    height: 100%;
    width: 50px;
    margin-left: 8px;
  }

  .page-list {
    margin-top: 50px;
  }
}
</style>
