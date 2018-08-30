<script>
export default {};
</script>

<template>
  <div class="swipe"></div>
</template>

<style lang="scss">
.swipe {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #bb1a34;
  animation: swipe 1.5s 1s;
  transform: translateX(-100%);
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

