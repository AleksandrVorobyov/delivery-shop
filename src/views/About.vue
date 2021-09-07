<template>
  <div class="app-about">
    <app-about></app-about>
    <app-points></app-points>
  </div>
</template>

<script>
import AppPoints from "../components/AppPoints.vue";
import AppAbout from '../components/AppAbout.vue';

export default {
  name: 'AboutPage',
  components: {
    AppPoints,
    AppAbout
  },
}
</script>
