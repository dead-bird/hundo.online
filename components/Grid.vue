<script>
import { mapState, mapMutations } from 'vuex';
import Hundo from '~/components/Hundo';

export default {
  components: { Hundo },

  methods: mapMutations(['setLoading']),

  computed: mapState(['triggers', 'loading']),

  created() {
    const self = this;

    setTimeout(() => {
      self.$store.commit('setLoading', false);
    }, 1300);
  },
};
</script>

<template>
  <transition name="grid">
    <div v-if="loading">
        <div class="row">
      <div class="grid">
          <Hundo v-for="trigger in triggers" :text="trigger.words" :key="trigger._id" class="grid-item col-sm-3 col-md-2" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.grid {
  height: 100vh;
  padding-bottom: 60px;
  overflow: hidden;
}

.grid-item {
  height: 25%;

  @include until($small) {
    width: 50%;
  }
  @include until(400px) {
    width: 100%;
  }
  @include at-least($small) {
    height: 16.6666666667%;
  }
}

.grid-enter-active,
.grid-leave-active {
  transition: opacity 0.5s;
}
.grid-enter,
.grid-leave-to {
  opacity: 0;
}
</style>

