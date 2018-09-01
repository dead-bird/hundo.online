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
  <div v-if="loading">
    <div class="grid">
      <div class="row">
        <Hundo v-for="trigger in triggers" :text="trigger.words" :key="trigger._id" class="grid-item col-sm-4 col-md-2" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.grid {
  height: 100vh;
  overflow: hidden;
}

.grid-item {
  height: 25vh;

  @include at-least($small) {
    height: 16.6666666667vh;
  }
}
</style>

