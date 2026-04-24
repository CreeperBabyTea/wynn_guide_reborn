<template>
<div class="item-window">
  <div class="item-header">
    <img :src="icon" alt="">
    <p class="item-name">{{ name }}</p>
    <p class="attack-speed"></p>
  </div>
  <div class="damage">
  </div>
  <div class="requirements">
    <span class="info-wrapper"><p>Class Req: </p><p></p></span>
  </div>
  <div class="id">
  </div>
  <div class="id">
  </div>
</div>
</template>

<script>
export default {
  props: {
    icon: String,
    name: String,
    damage: [[Number, Number], [Number, Number], [Number, Number], [Number, Number], [Number, Number], [Number, Number], Number],
    clazz: String,
    req: [Number, Number, Number, Number, Number],
  }
}
</script>

<style scoped>
</style>