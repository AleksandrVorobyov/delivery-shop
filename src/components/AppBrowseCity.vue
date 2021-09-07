<template>
  <div class="browse-city">
    <div class="container">
      <div class="browse-city-wrap">
        <div class="browse-city__title">
          <app-title>{{ browseCityTitle }}</app-title>
        </div>
        <div class="browse-city__blog">
          <div
            class="browse-city__blog-item"
            v-for="item in browseCityItems"
            :key="item.img"
          >
            <a :href="item.link">
              <img
                :src="require('@/assets/img/city/' + item.img + '.jpg')"
                :alt="item.img + '.jpg'"
              />
              <h5 class="browse-city__blog-item-title">{{ item.title }}</h5>
            </a>
          </div>
        </div>
        <div class="browse-city__list">
          <app-list-link :list="browseCityList"></app-list-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from "./parts/AppTitle.vue";
import AppListLink from "./parts/AppListLink.vue";
import { mapGetters } from "vuex";

export default {
  name: "AppBrowseCity",
  props: {},
  components: {
    AppTitle,
    AppListLink,
  },
  data() {
    return {};
  },
  computed: mapGetters([
    "browseCityTitle",
    "browseCityItems",
    "browseCityList",
  ]),
};
</script>

<style lang="scss" scoped>
.browse-city {
  position: relative;
  padding: 40px 0px;
}

.browse-city__title {
  margin-bottom: 60px;
}

.browse-city__blog {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px;
  grid-template-areas: "firstImg secondImg" "thirdImg fourImg";
  gap: 10px;
}

.browse-city__blog-item {
  position: relative;
  transition: opacity 0.3s ease-in-out;
}

.browse-city__blog-item:hover {
  opacity: 0.7;
}

.browse-city__blog-item:nth-child(1) {
  grid-area: firstImg;
}

.browse-city__blog-item:nth-child(2) {
  grid-area: secondImg;
}

.browse-city__blog-item:nth-child(3) {
  grid-area: thirdImg;
}

.browse-city__blog-item:nth-child(4) {
  grid-area: fourImg;
}

.browse-city__blog-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.browse-city__blog-item-title {
  position: absolute;
  bottom: 20px;
  left: 30px;
  font-size: 22px;
  font-family: var(--mainFontBd);
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1;
}

.browse-city__list {
  margin-top: 25px;
}

@media (min-width: 600px) {
  .browse-city__blog {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 200px 200px;
    grid-template-areas: "firstImg firstImg secondImg" "thirdImg fourImg fourImg";
    gap: 6px 9px;
  }
}
</style>

