<template>
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
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next">></div>
  </Swiper>
</template>
<script>
import VideoIframe from '@/components/VideoIframe';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  components: {
    VideoIframe,
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
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
  width: 733px;
  height: 400px;
  position: relative;
}
</style>
