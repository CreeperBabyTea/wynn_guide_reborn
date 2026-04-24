<template>
  <div class="wrapper">
    <div class="general">
      <img :src="icon" alt="">
      <div class="desc">
        <slot name="desc"/>
      </div>
    </div>

    <slot name="spells"/>

    <div class="archetypes">
      <div class="left">
        <p class="archetype">{{ leftArchetype }}</p>
        <slot name="left"/>
      </div>
      <div class="mid">
        <p class="archetype">{{midArchetype}}</p>
        <slot name="mid"/>
      </div>
      <div class="right">
        <p class="archetype">{{rightArchetype}}</p>
        <slot name="right"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    leftArchetype: String,
    midArchetype: String,
    rightArchetype: String
  }
}
</script>

<style scoped>
.general {
  display: flex;
  flex-direction: row;
}

.general > .desc {
  margin: 1rem;
}

.archetypes {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  align-items: stretch;
}

.archetypes > div {
  flex: 1;
  box-sizing: border-box;
  min-width: 20rem;
  padding: .5rem;
  margin: .5rem;
  border-radius: 1rem;
  border: .1rem solid black;
}

[data-theme="dark"] .archetypes > div {
  border: .1rem solid white;
}

.archetypes > div > p:first-child {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>