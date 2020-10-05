<template>
  <div class="bubble">
    <div v-if="loaded">
      <h1>{{ text }}</h1>
      <div class="userinfo">
        <img :src="image" />
        <div class="data">
          <div class="name">{{ name }}</div>
          <div class="secondLine">
            <span class="username">
              <a :href="url" target="_blank">@{{ handle }}</a>
            </span>
            <span class="location"> - {{ location }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      text: '',
      image: '',
      name: '',
      handle: '',
      location: '',
      url: '',
      loaded: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData: function() {
      let _this = this;
      axios
        // eslint-disable-next-line no-undef
        .get(LAMBDA_ENDPOINT + '/getTweet')
        .then(response => {
          console.log(response);
          _this.text = response.data.text;
          _this.image = response.data.user.profile_image_url;
          _this.name = response.data.user.name;
          _this.handle = response.data.user.screen_name;
          _this.location = response.data.user.location;
          _this.url =
            'https://twitter.com/' + response.data.user.handle;
          _this.loaded = true;
        })
        .catch(err => {
          console.log(err);
          _this.loaded = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  position: relative;
  width: 85vw;
  height: auto;
  padding: 20px;
  background: #ffffff;
  -webkit-border-radius: 33px;
  -moz-border-radius: 33px;
  border-radius: 33px;
  border: #7e7f7f solid 5px;
  left: 20px;

  @media all and (min-width: 768px) {
    position: absolute;
    left: 0;
    width: 50vw;
  }

  @media all and (min-width: 1024px) {
    position: absolute;
    left: 0;
    width: 25vw;
  }

  .userinfo {
    width: 100%;
    text-align: left;
    position: relative;

    img {
      border: #7e7f7f solid 2px;
      height: 75px;
      width: 75px;
      display: inline;
    }

    .data {
      display: inline-block;
      padding: 0 10px;
      height: 75px;
      top: 0;
      position: absolute;

      .name {
        font-weight: 900;
        font-size: 1.4rem;
      }

      .secondLine {
        font-weight: 500;
        font-size: 1.2rem;

        a {
          text-decoration: none;
          color: lighten(blue, 25%);
        }
      }
    }
  }

  h1 {
    text-align: left;
    font-family: 'Kalam', cursive;
    line-height: 1.3;
  }

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0px 0px 50px 50px;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -50px;
    left: 82.5%;

    @media all and (min-width: 768px) {
      border-width: 22px 50px 22px 0;
      margin-top: -22px;
      left: -50px;
      top: 82%;
      bottom: auto;
    }
  }

  &:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0px 0px 60px 60px;
    border-color: transparent #7e7f7f;
    display: block;
    width: 0;
    z-index: 0;
    bottom: -60px;
    left: 82%;

    @media all and (min-width: 768px) {
      border-width: 26px 60px 26px 0;
      margin-top: -26px;
      left: -60px;
      top: 82%;
      bottom: auto;
    }
  }
}
</style>
