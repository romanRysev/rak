<template>
  <div class="container">
    <banner />
    <stories />
    <instagram />
    <your_story />
    <statistic />
  </div>
</template>

<script>
import Banner from '@/components/ui/Banner';
import Stories from '@/components/Stories';
import Instagram from '~/components/Instagram';
import TellYourStory from '~/components/TellYourStory';
import Statistic from '@/components/Statistic';
export default {
  components: {
    stories: Stories,
    instagram: Instagram,
    your_story: TellYourStory,
    statistic: Statistic,
    banner: Banner,
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
