<template>
  <div class="page-container">
    <banner :tag="blocks[0].hashtag" />
    <videoblock
      :tag="blocks[1].hashtag"
      :tagTitle="blocks[1].title"
      :text="blocks[3].text"
      :title="blocks[3].title"
    />
    <stories :title="blocks[4].title" />
    <instagram
      :tag="blocks[2].hashtag"
      :tagTitle="blocks[2].title"
      :title="blocks[5].title"
      :text="blocks[5].text"
    />
    <tellstory
      :title="blocks[9].title"
      :text="blocks[9].text"
      :extraText="blocks[9].extraTexts"
    />
    <statistic :title="blocks[6].title" />
    <about
      :title="blocks[10].title"
      :text="blocks[10].text"
      :extraText="blocks[10].extraTexts"
      :tag="blocks[10].hashtag"
    />
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

  async fetch({ store }) {
    await store.dispatch('data/blocks/fetchBlocks');
    await store.dispatch('data/stories/fetchStories');
  },

  computed: {
    blocks() {
      return this.$store.getters['data/blocks/getBlocks'];
    },
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
