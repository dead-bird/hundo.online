<script>
import axios from 'axios';
import Grid from '~/components/Grid';
import Swipe from '~/components/Swipe';
import Info from '~/components/Info';
import Disclaimer from '~/components/Disclaimer';

export default {
  components: { Grid, Swipe, Info, Disclaimer },

  beforeCreate() {
    axios
      .get('https://api.hundo.online')
      .then(res => {
        this.$store.commit('setContent', res.data);
      })
      .catch(e => console.log(e));
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

