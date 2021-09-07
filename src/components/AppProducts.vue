<template>
  <section class="products">
      <div class="container">
          <div class="products-wrap">
              <div class="products__title">
                  <app-title>{{ newActive.mainTitle }}</app-title>
              </div>
              <div class="product__body">
                  <app-product-body-card :block="this.newActive" :activeCategory="activeCategory"></app-product-body-card>
                  <app-list-link :list="productLinks"></app-list-link>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import AppTitle from './parts/AppTitle.vue'
import AppProductBodyCard from './parts/AppProductBodyCard.vue'
import AppListLink from './parts/AppListLink.vue'

export default {
    name: 'AppProducts',
    props: {

    },
    data() {
        return {
            
        }
    },
    components: {
        AppTitle,
        AppProductBodyCard,
        AppListLink,
    },
    computed: {
        ...mapGetters(['productsTitle', 'productCategory', 'activeCategory', 'productLinks']),
        newActive() {
            return this.productCategory.find(e => e.id === this.activeCategory)
        },
    },
    mounted() {
    }
}
</script>

<style lang="scss">
.products__title {
    margin-bottom: 50px;
}

.product__body > * + * {
    margin-top: 30px;
}
</style>