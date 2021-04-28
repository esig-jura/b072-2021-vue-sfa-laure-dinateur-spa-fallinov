<template>
  <div id="app">
    <entete-de-page />
    <router-view/>
    <pied-de-page />
  </div>
</template>

<script>
import EnteteDePage from "@/components/EnteteDePage";
import PiedDePage from "@/components/PiedDePage";
export default {
  name: 'LaureDinateur',
  components: {PiedDePage, EnteteDePage},
};
</script>

<style>

</style>
