<template>
  <container>
    <section class="instagram">
      <h3 class="instagram-header">
        Рассказывайте ваши истории в инстаграм
        <span class="instagram-header-tag">#этонелечится</span>
      </h3>
      <div class="content-container">
        <div class="text-content">
          <a
            class="subtitle"
            href="https://www.instagram.com/raklechitsa/"
            target="_blank"
            >Инстаграм</a
          >
          <p class="paragraph">
            Два раза в неделю мы просматриваем все посты по хештегу
            #этонелечится. Все истории, где нет нецензурных выражений и
            запрещенного контента попадают сюда. Следите за правильным
            написанием хештега, чтобы мы не пропустили вашу историю.
          </p>
        </div>
        <div class="insta-grid">
          <div class="insta-card"></div>
          <div class="insta-card"></div>
          <div class="insta-card"></div>
          <div class="insta-card"></div>
          <div class="insta-card"></div>
          <div class="insta-card"></div>
          <div class="insta-card"></div>
          <div class="insta-card"></div>
        </div>
      </div>
    </section>
  </container>
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
.instagram {
  width: 100%;
  color: #666;
}

.instagram-header {
  background-color: #613a93;
  color: white;
  padding: 20px 0;
  text-transform: uppercase;
  font-size: 30px;
  line-height: 45px;
  font-weight: 400;
  text-align: center;
}

.instagram-header-tag {
  display: block;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}

.content-container {
  display: flex;
  justify-content: space-between;
  margin: 100px 0;
}

.text-content {
  width: 340px;
}

.subtitle {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: black;
  text-decoration: none;
  border-bottom: 2px solid;
  width: max-content;
}

.paragraph {
  font-size: 18px;
  line-height: 22px;
  margin: 30px 0 0 0;
}

.insta-grid {
  width: 870px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 30px;
}

.insta-card {
  background-image: url('/Images/shitty_lobster_photo.jpeg');
  background-size: cover;
  background-position: center;
}
.insta-card:before {
  content: '';
  padding-top: 100%;
  float: left;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .instagram-header {
    font-size: 28px;
  }

  .instagram-header-tag {
    font-size: 38px;
  }

  .content-container {
    margin: 90px 0;
  }

  .text-content {
    width: 305px;
    padding: 10px 0 0 0;
  }

  .subtitle {
    font-size: 28px;
    line-height: 32px;
    margin-top: 10px;
  }

  .paragraph {
    font-size: 16px;
    line-height: 20px;
  }

  .insta-grid {
    width: 770px;
    grid-gap: 27px;
  }
}

@media screen and (min-width: 1023px) and (max-width: 1279px) {
  .instagram-header {
    font-size: 24px;
    line-height: 40px;
  }

  .instagram-header-tag {
    font-size: 35px;
  }

  .content-container {
    margin: 80px 0;
  }

  .text-content {
    width: 260px;
    padding: 10px 0 0 0;
  }

  .subtitle {
    margin-top: 10px;
    font-size: 24px;
    line-height: 28px;
  }

  .paragraph {
    font-size: 13px;
    line-height: 16px;
    margin: 15px 0 0 0;
  }

  .insta-grid {
    width: 610px;
    grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
    grid-gap: 20px;
  }
}

@media screen and (min-width: 730px) and (max-width: 1022px) {
  .instagram-header {
    font-size: 22px;
    line-height: 34px;
  }

  .instagram-header-tag {
    font-size: 32px;
    line-height: 30px;
  }

  .content-container {
    flex-direction: column;
    margin: 80px 0;
    align-items: center;
  }

  .text-content {
    width: 380px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .subtitle {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }

  .paragraph {
    font-size: 13px;
    line-height: 16px;
    margin: 20px 0 0 0;
  }

  .insta-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
  }
}

@media screen and (min-width: 400px) and (max-width: 729px) {
  .instagram-header {
    font-size: 16px;
    line-height: 18px;
    padding: 10px;
  }

  .instagram-header-tag {
    font-size: 22px;
    line-height: 26px;
  }

  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .text-content {
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  .paragraph {
    font-size: 13px;
    line-height: 16px;
  }

  .insta-grid {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    grid-gap: 20px;
  }
}

@media screen and (max-width: 399px) {
  .instagram-header {
    font-size: 16px;
    line-height: 18px;
    padding: 10px;
  }

  .instagram-header-tag {
    font-size: 22px;
    line-height: 26px;
  }

  .content-container {
    flex-direction: column;
    margin: 50px 0;
  }

  .text-content {
    width: 100%;
    margin-bottom: 40px;
  }

  .subtitle {
    font-size: 18px;
    line-height: 21px;
    border-bottom: 2px solid currentColor;
    margin-bottom: 15px;
  }

  .paragraph {
    font-size: 13px;
    line-height: 16px;
    margin: 15px 0 0 0;
  }

  .insta-grid {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 10px;
  }
}
</style>
