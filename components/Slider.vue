<template>
  <swiper class="slider" v-swiper:mySwiper="swiperOption">
    <!-- <div class="swiper-wrapper"> -->
    <swiper-slide
      class="swiper-slide"
      v-for="(video, index) in videos"
      :key="index"
    >
      <VideoIframe :url="video.url" />
    </swiper-slide>

    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
  </swiper>
</template>
<script>
import VideoIframe from '@/components/VideoIframe';

export default {
  components: {
    VideoIframe,
  },
  props: {
    videos: {
      type: Array,
    },
  },
  computed: {
    Video() {
      const { videos } = this.$store.state;
      return videos;
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
  },
};
</script>

<style scoped>
.swiper-slide {
  /* width: 100% !important; */
  width: 100px !important;
  height: 500px;
  background: red !important;
  height: 300px !important;
}
</style>
