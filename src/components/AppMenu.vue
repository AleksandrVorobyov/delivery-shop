<template>
  <section class="menu">
    <div class="container">
      <div class="menu-wrap">
        <div class="menu__title">
          <app-title>{{ menuTitle }}</app-title>
        </div>
        <div class="menu__category">
          <div
            class="menu__category-item"
            v-for="(item, idx) in menuCategory"
            :key="item"
            :class="{ active: item.isActive }"
          >
            <input
              type="radio"
              class="menu__category-input"
              name="menu-category"
              :id="'menu-' + item.id"
            />
            <label :for="'menu-' + item.id" @click="menuCatActive($event, idx)">
              <div class="menu__category-item-img">
                <img
                  :src="require('@/assets/img/png/' + item.src)"
                  :alt="'menu-' + item.alt"
                />
              </div>
              <h5 class="menu__category-item-title">
                {{ item.title }}
              </h5>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppTitle from "./parts/AppTitle.vue";
import { mapGetters } from "vuex";

export default {
  name: "AppMenu",
  props: {},
  components: {
    AppTitle,
  },
  data() {
    return {};
  },
  methods: {
    menuCatActive(event, idx) {
      this.$store.commit("menuCatActive", {
        index: idx,
      });
    },
  },
  computed: mapGetters(["menuTitle", "menuCategory"]),
};
</script>

<style lang="scss">
.menu {
  padding: 40px 0px;
}

.menu__title {
  margin-bottom: 60px;
}

.menu__category {
  display: grid;
  gap: 20px;
  grid-template-columns: 120px 120px;
  grid-template-rows: 170px 170px;
  justify-content: center;
  border-left: 5px solid var(--mainClOg);
  border-right: 5px solid var(--mainClOg);
}

.menu__category-item {
  overflow: hidden;
  border-width: 2px;
  border-color: transparent;
  border-style: dashed;
  transition: all 0.3s linear;

  label {
    cursor: pointer;
  }
}

.menu__category-item:hover {
  border-color: #000;
  opacity: 0.8;
}

.menu__category-item.active {
  border-color: rgb(0, 0, 0);
}

.menu__category-input {
  position: absolute;
  left: -9999px;
}

.menu__category-item-img {
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  img {
    object-fit: contain;
  }
}

.menu__category-item-title {
  font-size: 18px;
  font-family: var(--mainFontBd);
  color: var(--mainTextBl);
  font-weight: bold;
  line-height: 1;
  text-align: center;
  pointer-events: none;
}

@media (min-width: 720px) {
  .menu__category {
    grid-template-columns: 120px 120px 120px 120px;
    grid-template-rows: 170px;
    border-left: 0px solid var(--mainClOg);
    border-right: 0px solid var(--mainClOg);
  }
}

@media (min-width: 360px) {
  .menu__category {
    gap: 30px;
  }

  .menu__category-item-img {
    height: 120px;
  }
}
</style>
