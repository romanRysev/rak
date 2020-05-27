<template>
  <div class="page-container">
    <banner />
    <videoblock />
    <stories />
    <instagram />
    <tellstory />
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
import popup from '@/components/popup';
import PopupContacts from '@/components/PopupContacts';

export default {
  components: {
    videoblock: video,
    stories: Stories,
    instagram: Instagram,
    tellstory: TellYourStory,
    statistic: Statistic,
    banner: Banner,
    about: AboutProject,
    popup: popup,
    'popup-contacts': PopupContacts,
  },
  methods: {
    isVariantTwoShown() {
      return {
        variantTwoShown: true,
      };
    },
  },

  created() {
    return this.$store.dispatch('data/stories/fetchStories');
  },
};
</script>

<style scoped>
.page-container {
  /*display: flex;*/
  /*align-items: center;*/
  /*flex-direction: column;*/
}
</style>
