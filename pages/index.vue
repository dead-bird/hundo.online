<script>
import Grid from '~/components/Grid';
import Swipe from '~/components/Swipe';

export default {
  components: { Grid, Swipe },
};
</script>

<template>
  <div class="container-fluid">
    <Grid />
    <Swipe />
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

