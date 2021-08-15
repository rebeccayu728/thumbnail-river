<template>
  <div class="home">
    <ThumbnailRiver v-if="Boolean(top10)" :title="top10.title" :items="top10.items" />
  </div>
</template>

<script>
import Vuex from 'vuex';
import ThumbnailRiver from '@/components/ThumbnailRiver.vue';

export default {
  name: 'Home',
  components: {
    ThumbnailRiver,
  },
  computed: {
    ...Vuex.mapState('Top10', {
      top10: (state) => state.data,
    }),
  },
  created() {
    this.$store.dispatch('Top10/loadTop10');

    // Watchers && Subscribers
    const unwatchTop10Watcher = this.$watch('top10', () => {
      console.log(this.top10);
      unwatchTop10Watcher();
    });
  },
};
</script>

<style scoped lang="scss">
.home {
  background-color: #292929;
  max-width: 1280px;
  margin: 0 auto;
}
@media screen and (max-width: 1280px) {
  .home {
    max-width: 1280px;
  }
}
@media screen and (max-width: 660px) {
  .home {
    max-width: 660px;
  }
}
@media screen and (max-width: 480px) {
  .home {
    max-width: 480px;
  }
}
</style>
