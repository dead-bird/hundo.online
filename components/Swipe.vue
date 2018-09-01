<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['loading']),
};
</script>

<template>
  <div class="swipe" :class="{ active: !loading }"></div>
</template>

<style lang="scss">
.swipe {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #bb1a34;
  transform: translateX(-100%);
  z-index: 1;

  &.active {
    animation: swipe 1.5s;
  }
}

@keyframes swipe {
  50% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>

