<template>
  <div class="mccroskey"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mccroskey {
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center right;
  position: relative;
  top: 0;
  left: 0;
  background-image: url('/lloyd_bridges_airplane.png');
  background-size: contain;

  @media all and (min-width: 768px) {
    height: 100vh;
    width: 50vw;
  }
}
</style>
