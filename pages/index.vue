<script>
import Grid from '~/components/Grid';
import Swipe from '~/components/Swipe';
import Stats from '~/components/Stats';

export default {
  components: { Grid, Swipe, Stats },
};
</script>

<template>
  <div class="container-fluid">
    <Grid />
    <Swipe />
    <Stats />
    <!-- <img src="/hundo.svg" alt=""> -->
  </div>
</template>


<style scoped>
.container-fluid {
  position: relative;
}

img {
  width: 70vw;
  height: 100vh;
  display: block;
  margin: 0 auto;
}
</style>

