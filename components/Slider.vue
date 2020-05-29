<template>
  <div>
    <Swiper class="slider" :options="swiperOption">
      <SwiperSlide
        class="swiper-slide"
        v-for="(video, index) in videos"
        :key="index"
      >
        <iframe
          :src="video.url"
          width="733"
          height="400"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-button-prev-uniq"></div>
    <div class="swiper-button-next-uniq"></div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next-uniq',
          prevEl: '.swiper-button-prev-uniq',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      },
    };
  },
  computed: {
    videos() {
      const { videos } = this.$store.state.data;
      return videos.videos;
    },
  },
};
</script>
<style scoped>
.slider {
  width: 735px;
  height: 403px;
  position: relative;
  overflow: hidden;
}
.swiper-button-next-uniq {
  width: 40px;
  height: 40px;
  left: 103px;
  position: absolute;
  z-index: 2;
  background-color: #fbfbfb;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 17L9 9L1 1' stroke='black'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center center;
}
.swiper-button-prev-uniq {
  width: 40px;
  height: 40px;
  left: 63px;
  position: absolute;
  z-index: 2;
  background-color: #fbfbfb;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L1 9L9 17' stroke='black'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
