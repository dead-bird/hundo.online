<script>
import axios from 'axios';
import Grid from '~/components/Grid';
import Swipe from '~/components/Swipe';
import Info from '~/components/Info';
import Disclaimer from '~/components/Disclaimer';

export default {
  components: { Grid, Swipe, Info, Disclaimer },

  async fetch({ store }) {
    const { data } = await axios.get('http://api.hundo.online');

    store.commit('setContent', data);
  },
};
</script>

<template>
  <div class="container-fluid">
    <Grid />
    <Swipe />
    <Info />
    <Disclaimer />
  </div>
</template>


<style scoped>
.container-fluid {
  position: relative;
}
</style>

