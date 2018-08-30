<script>
import { mapState } from 'vuex';
import Hundo from '~/components/Hundo';

export default {
  components: { Hundo },

  data: () => ({ kill: false }),

  computed: mapState(['triggers']),

  created() {
    const self = this;

    setTimeout(() => {
      self.kill = true;
    }, 1300);
  },
};
</script>

<template>
  <div v-if="!kill">
    <div class="grid">
      <div class="row">
        <Hundo v-for="trigger in triggers" :text="trigger.words" :key="trigger._id" class="grid-item col-2" />
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
  height: 16.6666666667vh;
}
</style>

