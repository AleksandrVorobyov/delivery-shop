<template>
  <div class="home">
      <app-points></app-points>
      <app-menu></app-menu>
      <app-products></app-products>
      <app-browse-city></app-browse-city>
  </div>
</template>

<script>
import AppPoints from "../components/AppPoints.vue";
import AppMenu from "../components/AppMenu.vue";
import AppBrowseCity from "../components/AppBrowseCity.vue";
import AppProducts from "../components/AppProducts.vue";

export default {
  name: 'Home',
  components: {
    AppPoints,
    AppMenu,
    AppProducts,
    AppBrowseCity,
  }
}
</script>
