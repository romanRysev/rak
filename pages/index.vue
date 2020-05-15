<template>
  <div class="container">
    <banner />
    <videoBlock />
    <stories />
    <instagram />
    <your_story />
    <statistic />
    <about />
  </div>
</template>

<script>
import Banner from '@/components/ui/Banner';
import video from '@/components/video';
import Stories from '@/components/Stories';
import Instagram from '~/components/Instagram';
import TellYourStory from '~/components/TellYourStory';
import Statistic from '@/components/Statistic';
import AboutProject from '~/components/AboutProject';

export default {
  components: {
    videoBlock: video,
    stories: Stories,
    instagram: Instagram,
    your_story: TellYourStory,
    statistic: Statistic,
    banner: Banner,
    about: AboutProject,
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
