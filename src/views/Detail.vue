<template>
  <div class="detail">
    <div class="vod-container">
      <h1>{{ title }}</h1>
      <video width="352" height="198" controls>
        <source :src="streamingURL" type="application/x-mpegURL">
        Your browser does not support HTML video.
      </video>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: 'Detail',
  computed: {
    ...Vuex.mapState('Top10', {
      top10: (state) => state.data,
    }),

    title() {
      if (this.top10 && this.top10.items) {
        return this.top10.items[this.$route.params.id].title;
      }
      return '';
    },
    streamingURL() {
      if (this.top10 && this.top10.items) {
        return this.top10.items[this.$route.params.id].streamingURL;
      }
      return '';
    },
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
.detail {
  background-color: #292929;
  text-align: center;
}
.vod-container,
video {
  width: 1170px;
  height: 100%;
  margin: 0 auto;
}
@media screen and (max-width: 1280px) {
  .detail {
    width: 1280px;
  }
  .vod-container,
  video {
    width: 984px;
  }
}
@media screen and (max-width: 660px) {
  .detail {
    width: 660px;
  }
  .vod-container,
  video {
    width: 630px;
  }
}
@media screen and (max-width: 480px) {
  .detail {
    width: 480px;
  }
  .vod-container,
  video {
    width: 450px;
  }
}
</style>
