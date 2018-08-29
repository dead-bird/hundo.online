<script>
import { mapState } from 'vuex';
import Hundo from '~/components/Hundo';

export default {
  components: { Hundo },

  computed: mapState(['triggers']),
};
</script>

<template>
  <div class="grid">
    <div class="row">
      <pre>{{words}}</pre>
      <Hundo v-for="trigger in triggers" :text="trigger.words" :key="trigger._id" class="grid-item col-2" />
    </div>
  </div>
</template>

<style>
.grid {
  height: 100vh;
  overflow: hidden;
}

.grid-item {
  height: 16.6666666667vh;
}
</style>

