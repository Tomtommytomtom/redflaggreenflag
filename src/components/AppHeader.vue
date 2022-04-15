<template>

  <div class="header italic">
    <RouterLink to="/"><span class="white-bg"><span class="font-bold">RED</span> FLAGS</span></RouterLink><br />
    <RouterLink to="/"><span class="white-bg"><span class="font-bold">GREEN</span> FLAGS</span></RouterLink>
  </div>

</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.header {
  font-size: 2rem;
  line-height: 2rem;
  width: 100%;
}

.white-bg {
  background-color: white;
}
</style>
