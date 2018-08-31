<script>
import { mapState } from 'vuex';
import Hundo from '~/components/Hundo';

export default {
  components: { Hundo },

  computed: {
    most() {
      return this.triggers
        .map(t => t.words)
        .reduce(
          (a, b, i, arr) =>
            arr.filter(v => v === a).length >= arr.filter(v => v === b).length
              ? a
              : b,
          ''
        );
    },
    ...mapState(['triggers']),
  },
};
</script>

<template>
  <div>
    <pre>number of triggers: {{triggers.length}}</pre>
    <pre>most common trigger: {{most}}</pre>
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

