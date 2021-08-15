<template>
  <div class="thumbnail-river">
    <h1>{{ title || "Top 10人氣劇" }}</h1>
    <div class="thumbnail-river-body-container">
      <div class="thumbnail-river-body">
        <div v-for="(item, index) in items" :key="index" class="thumbnail-river-item-container">
          <a class="item-thumbnail" :href="`/vod/${index}`">
            <div class="play-icon"></div>
            <span class="trend">{{ item.rank }} {{ item.trend }}</span>
            <img class="thumbnail" :src="item.imageURL" :alt="item.title">
            <span class="episode">第{{ item.episode }}集</span>
          </a>
          <a class="item-name" :href="`/vod/${index}`">
            <h2>{{ item.title }}</h2>
          </a>
          <a class="item-category" :href="`/vod/${index}`">
            <span>{{ item.category }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThumbnailRiver',
  props: {
    title: String,
    items: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-size: 30px;
  margin: 0;
}
a {
  text-decoration: none;
  color: #ffffff;
}
.thumbnail-river {
  padding-top: 15px;
  max-width: 1170px;
  margin: 0 auto;
}
.thumbnail-river-body-container {
  padding-top: 10px;
  overflow: hidden;
}
.thumbnail-river-body {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  padding-bottom: 10px;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
}
.thumbnail-river-item-container {
  max-width: 168px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-left: 0px;
  }

  .item-thumbnail {
    display: inline-block;
    position: relative;
    height: 95px;
  }
  .thumbnail {
    width: 168px;
    height: 95px;
    display: inline-block;
  }
  .trend {
    top: 0;
    position: absolute;
    height: 18px;
    line-height: 18px;
    text-align: center;
    font-size: 12px;
    padding: 0 4px;
    color: #333;
    background-color: #ffbf00;
  }
  .episode {
    left: 0;
    bottom: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    line-height: 20px;
    padding: 0 8px;
  }
  .item-category {
    display: block;

    span {
      color: #aaaaaa;
      font-size: 12px;
      line-height: 16px;
    }
  }
  .item-name {
    display: block;

    h2 {
      margin: 0px;
      margin-top: 5px;
      font-size: 14px;
      font-weight: bold;
      line-height: 18px;
    }
  }
  .play-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &:hover {
    .item-name h2 {
      color: #dba614;
    }

    .play-icon {
      background-image: url('../assets/play_icon.png');
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
@media screen and (max-width: 1280px) {
  .thumbnail-river {
    max-width: 984px;
    margin: 0 15px;
  }
}
@media screen and (max-width: 660px) {
  .thumbnail-river {
    max-width: 630px;
    margin: 0 15px;
  }
}
@media screen and (max-width: 480px) {
  .thumbnail-river {
    max-width: 450px;
    margin: 0 15px;
  }
}
</style>
