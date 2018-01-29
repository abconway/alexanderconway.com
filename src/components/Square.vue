<template>
  <div class="square" v-bind:class="{ active: isActive }"
       v-on:mouseover="isActive = !isActive">
  </div>
</template>

<script>
export default {
  name: 'square',
  data: function() {
    return {
        isActive: false
      };
  },
}
</script>

<style scoped>
.square {
  background: blue;
  height: 2em;
  width: 2em;
  display: inline-block;
  margin: 0.5em;
}

.active {
  background: green;
}

</style>