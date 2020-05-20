<template>
  <section class="instagram">
    <container>
      <h3 class="instagram__header">
        Рассказывайте ваши истории в инстаграм
        <span class="instagram__header-tag">#этонелечится</span>
      </h3>
      <div class="instagram__content-container">
        <div class="instagram__text-content">
          <a
            class="instagram__subtitle"
            href="https://www.instagram.com/raklechitsa/"
            target="_blank"
            >Инстаграм</a
          >
          <p class="instagram__paragraph">
            Два раза в неделю мы просматриваем все посты по хештегу
            #этонелечится. Все истории, где нет нецензурных выражений и
            запрещенного контента попадают сюда. Следите за правильным
            написанием хештега, чтобы мы не пропустили вашу историю.
          </p>
        </div>
        <div class="instagram__grid">
          <div
            class="instagram__card"
            v-for="card in instaCards"
            :key="card.id"
          ></div>
        </div>
      </div>
    </container>
  </section>
</template>

<script>
import Container from '~/components/Container';
export default {
  components: {
    container: Container,
  },
  computed: {
    instaCards() {
      return this.$store.getters['data/instagram/getinstaCards'];
    },
  },
};
</script>

<style scoped>
.instagram {
  width: 100%;
  color: #666;
}

.instagram__header {
  background-color: #613a93;
  color: white;
  padding: 20px 0;
  text-transform: uppercase;
  font-size: 30px;
  line-height: 45px;
  font-weight: 400;
  text-align: center;
}

.instagram__header-tag {
  display: block;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}

.instagram__content-container {
  display: flex;
  justify-content: space-between;
  margin: 100px 0;
}

.instagram__text-content {
  width: 340px;
}

.instagram__subtitle {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: black;
  text-decoration: none;
  border-bottom: 2px solid;
  width: max-content;
}

.instagram__paragraph {
  font-size: 18px;
  line-height: 22px;
  margin: 30px 0 0 0;
}

.instagram__grid {
  width: 870px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 30px;
}

.instagram__card {
  background-image: url('/Images/shitty_lobster_photo.jpeg');
  background-size: cover;
  background-position: center;
}
.instagram__card:before {
  content: '';
  padding-top: 100%;
  float: left;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .instagram__header {
    font-size: 28px;
  }

  .instagram__header-tag {
    font-size: 38px;
  }

  .instagram__content-container {
    margin: 90px 0;
  }

  .instagram__text-content {
    width: 305px;
    padding: 10px 0 0 0;
  }

  .instagram__subtitle {
    font-size: 28px;
    line-height: 32px;
    margin-top: 10px;
  }

  .instagram__paragraph {
    font-size: 16px;
    line-height: 20px;
  }

  .instagram__grid {
    width: 770px;
    grid-gap: 27px;
  }
}

@media screen and (min-width: 1023px) and (max-width: 1279px) {
  .instagram__header {
    font-size: 24px;
    line-height: 40px;
  }

  .instagram__header-tag {
    font-size: 35px;
  }

  .instagram__content-container {
    margin: 80px 0;
  }

  .instagram__text-content {
    width: 260px;
    padding: 10px 0 0 0;
  }

  .instagram__subtitle {
    margin-top: 10px;
    font-size: 24px;
    line-height: 28px;
  }

  .instagram__paragraph {
    font-size: 13px;
    line-height: 16px;
    margin: 15px 0 0 0;
  }

  .instagram__grid {
    width: 610px;
    grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
    grid-gap: 20px;
  }
}

@media screen and (min-width: 730px) and (max-width: 1022px) {
  .instagram__header {
    font-size: 22px;
    line-height: 34px;
  }

  .instagram__header-tag {
    font-size: 32px;
    line-height: 30px;
  }

  .instagram__content-container {
    flex-direction: column;
    margin: 80px 0;
    align-items: center;
  }

  .instagram__text-content {
    width: 380px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .instagram__subtitle {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }

  .instagram__paragraph {
    font-size: 13px;
    line-height: 16px;
    margin: 20px 0 0 0;
  }

  .instagram__grid {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
  }
}

@media screen and (min-width: 400px) and (max-width: 729px) {
  .instagram__header {
    font-size: 16px;
    line-height: 18px;
    padding: 10px;
  }

  .instagram__header-tag {
    font-size: 22px;
    line-height: 26px;
  }

  .instagram__content-container {
    flex-direction: column;
    align-items: center;
  }

  .instagram__text-content {
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  .instagram__paragraph {
    font-size: 13px;
    line-height: 16px;
  }

  .instagram__insta-grid {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    grid-gap: 20px;
  }
}

@media screen and (max-width: 399px) {
  .instagram__header {
    font-size: 16px;
    line-height: 18px;
    padding: 10px;
  }

  .instagram__header-tag {
    font-size: 22px;
    line-height: 26px;
  }

  .instagram__content-container {
    flex-direction: column;
    margin: 50px 0;
  }

  .instagram__text-content {
    width: 100%;
    margin-bottom: 40px;
  }

  .instagram__subtitle {
    font-size: 18px;
    line-height: 21px;
    border-bottom: 2px solid currentColor;
    margin-bottom: 15px;
  }

  .instagram__paragraph {
    font-size: 13px;
    line-height: 16px;
    margin: 15px 0 0 0;
  }

  .instagram__grid {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 10px;
  }
}
</style>
