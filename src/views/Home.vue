<template>
  <div class="home">
    <McCroskey />
    <div class="tweetBox">
      <TweetBox />
    </div>
  </div>
</template>

<script>
import TweetBox from '../components/TweetBox.vue';
import McCroskey from '../components/McCroskey.vue';
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    TweetBox,
    McCroskey,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-image: url('/control_tower.jpg');
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;

  .tweetBox {
    width: 95vw;

    @media all and (min-width: 768px) {
      position: absolute;
      right: 20px;
      top: 20px;
      width: 50vw;
      right: 50px;
    }
  }
}
</style>
