<template>
  <div class="wrapper">
    <div class="desc">
      <slot name="desc"/>
    </div>

    <div class="archetypes">
      <div class="left">
        <slot name="left"/>
      </div>
      <div class="mid">
        <slot name="mid"/>
      </div>
      <div class="right">
        <slot name="right"/>
      </div>
    </div>
  </div>
</template>

<style>
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
}

.archetypes > div {
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