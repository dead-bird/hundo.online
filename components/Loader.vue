<script>
import Hundo from '~/components/Hundo';
export default {
  components: { Hundo },

  data: () => ({
    words: [
      'no u',
      'owo',
      'frick',
      'yikes',
      'oof',
      'shit',
      'oh no',
      'err',
      '>:(',
    ],
  }),
};
</script>

<template>
  <div class="row">
    <Hundo v-for="word in words" :text="word" :key="word" class="col-2" />
  </div>
</template>

<style>
</style>

