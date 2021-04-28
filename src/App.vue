<template>
  <div id="app">
    <entete-de-page />
    <router-view/>
  </div>
</template>

<script>
import EnteteDePage from "@/components/EnteteDePage";
export default {
  name: 'LaureDinateur',
  components: {EnteteDePage},
};
</script>

<style>

</style>
