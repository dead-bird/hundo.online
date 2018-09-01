<script>
import { mapState } from 'vuex';
import Stats from '~/components/Stats';

export default {
  components: { Stats },
  computed: mapState(['loading']),
};
</script>

<template>
  <transition name="stats">
    <div class="main" v-if="!loading">
      <img src="/hundo.svg" alt="">
      <Stats />

      <a class="invite" href="https://discordapp.com/oauth2/authorize?client_id=474240197329158165&scope=bot&permissions=43008">invite</a>
    </div>
  </transition>
</template>


<style lang="scss" scoped>
.main {
  padding: 7.5vh;
}

img {
  width: 100%;
  display: block;
  margin: 0 auto;
  margin-bottom: 7.5vh;

  @include at-least($small) {
    width: 50vw;
    max-width: 400px;
  }
}

.invite {
  width: 100px;
  text-align: center;
  display: block;
  background: $red;
  color: white;
  padding: 4px;
  border: 2px solid transparent;
  margin: 60px auto;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    color: $red;
    background-color: white;
    text-decoration: none;
    border-color: $red;
  }
}

.stats-enter-active,
.stats-leave-active {
  transition: opacity 0.5s 1.15s;
}
.stats-enter,
.stats-leave-to {
  opacity: 0;
}
</style>

