<template>
  <section class="about-project">
    <container class="about-container">
      <h2 class="about-project__title">{{ tag }}</h2>
      <p class="about-project__subtitle">{{ title }}</p>

      <div class="about-project__place-container">
        <div class="about-project__place-container-information">
          <p class="about-project__company-creator" v-html="text"></p>

          <ul class="about-project__list-names">
            <li
              ref="rakToggle"
              @click="toggleText"
              class="about-project__name about-project__name_active"
            >
              {{ extraText[0].title }}
            </li>
            <li
              ref="fondToggle"
              @click="toggleText"
              class="about-project__name"
            >
              {{ extraText[1].title }}
            </li>
          </ul>
        </div>

        <ul class="about-project__description">
          <li
            v-if="rakLechitsa"
            class="about-project__description-content"
            v-html="extraText[0].text"
          ></li>
          <li
            v-if="fondKhabenskogo"
            class="about-project__description-content"
            v-html="extraText[1].text"
          ></li>
        </ul>
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

  props: {
    title: String,
    text: String,
    extraText: Array,
    tag: String,
  },

  methods: {
    toggleText(e) {
      if (!e.target.classList.contains('about-project__name_active')) {
        this.rakLechitsa = !this.rakLechitsa;
        this.fondKhabenskogo = !this.fondKhabenskogo;
        this.$refs.rakToggle.classList.toggle('about-project__name_active');
        this.$refs.fondToggle.classList.toggle('about-project__name_active');
      }
    },
  },
  data() {
    return {
      rakLechitsa: true,
      fondKhabenskogo: false,
    };
  },
};
</script>

<style scoped>
.about-project {
  background-color: #613a93;
  width: 100%;
  min-height: 650px;
}

.about-container {
  padding-top: 90px;
  padding-bottom: 100px;
}

.about-project__title {
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #fff;
  margin: 0 0 70px 0;
  text-transform: uppercase;
}
.about-project__subtitle {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #fff;
  margin-right: auto;
  margin-bottom: 32px;
}
.about-project__company-creator {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  max-width: 340px;
  color: #dedede;
}
.about-project__list-names {
  list-style-type: none;
  padding-left: 0;
}
.about-project__name {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #c9c9c9;
  cursor: pointer;
}
.about-project__name:not(:last-child) {
  margin-bottom: 15px;
}
.about-project__name:hover {
  color: #fff;
  transition: 0.3s;
}
.about-project__name_active {
  font-weight: 500;
  color: white;
  cursor: default;
}
.about-project__description {
  padding-left: 0;
  list-style-type: none;
}
.about-project__description-content:first-child {
  margin-bottom: 20px;
}
.about-project__description-content {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  max-width: 640px;
}

.about-project__place-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
}

.about-project__place-container-information {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 640px;
}

@media screen and (max-width: 1439px) {
  .about-project {
    min-height: 626px;
  }

  .about-container {
    padding-top: 80px;
    padding-bottom: 90px;
  }

  .about-project__title {
    font-size: 58px;
    line-height: 70px;
    margin: 0 0 60px 0;
  }

  .about-project__subtitle {
    font-size: 28px;
    line-height: 32px;
  }

  .about-project__company-creator {
    font-size: 16px;
    line-height: 20px;
    max-width: 310px;
  }

  .about-project__name:not(:last-child) {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 1279px) {
  .about-project {
    min-height: 570px;
  }

  .about-container {
    padding-top: 80px;
    padding-bottom: 70px;
  }

  .about-project__title {
    font-size: 52px;
    line-height: 63px;
    margin: 0 0 45px 0;
  }
  .about-project__subtitle {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 30px;
  }
  .about-project__company-creator {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
  }
  .about-project__name {
    font-size: 15px;
    line-height: 19px;
  }

  .about-project__description-content {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 1023px) {
  .about-project {
    min-height: 660px;
  }
  .about-project__title {
    font-size: 52px;
    line-height: 63px;
  }
  .about-project__subtitle {
    font-size: 24px;
    line-height: 28px;
  }
  .about-project__company-creator {
    font-size: 13px;
    line-height: 16px;
  }
  .about-project__name {
    font-size: 15px;
    line-height: 19px;
  }
  .about-project__description-content {
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 910px) {
  .about-project {
    min-height: 662px;
  }
  .about-container {
    padding-top: 80px;
    padding-bottom: 80px;
    max-width: 460px;
  }
  .about-project__title {
    display: none;
  }
  .about-project__subtitle {
    margin-left: auto;
    margin-bottom: 26px;
    text-align: center;
  }
  .about-project__company-creator {
    max-width: 380px;
    margin-bottom: 80px;
  }
  .about-project__place-container {
    display: flex;
    flex-direction: column;
  }

  .about-project__place-container-information {
    flex-direction: column;
  }

  .about-project__list-names {
    display: flex;
    margin-bottom: 15px;
  }

  .about-project__name {
    height: 24px;
  }

  .about-project__name:not(:last-child) {
    margin-right: 30px;
  }

  .about-project__name_active {
    border-bottom: 2px solid currentColor;
  }
}

@media screen and (max-width: 730px) {
  .about-project {
    min-height: 628px;
  }

  .about-container {
    padding-top: 50px;
    padding-bottom: 50px;
    max-width: 350px;
  }
  .about-project__title {
    display: none;
  }
  .about-project__subtitle {
    margin-left: auto;
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }
  .about-project__company-creator {
    max-width: 380px;
    margin-bottom: 40px;
  }
  .about-project__place-container {
    display: flex;
    flex-direction: column;
  }

  .about-project__place-container-information {
    flex-direction: column;
  }

  .about-project__list-names {
    display: flex;
    margin-bottom: 5px;
  }

  .about-project__name {
    font-size: 13px;
    line-height: 19px;
  }

  .about-project__name:not(:last-child) {
    margin-right: 20px;
  }
}
</style>
