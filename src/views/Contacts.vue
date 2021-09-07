<template>
  <div class="app-contacts">
    <app-contacts></app-contacts>
    <app-points></app-points>
  </div>
</template>

<script>
import AppPoints from "../components/AppPoints.vue";
import AppContacts from "../components/AppContacts.vue"

export default {
  name: "AboutPage",
  components: {
    AppPoints,
    AppContacts,
  },
};
</script>

