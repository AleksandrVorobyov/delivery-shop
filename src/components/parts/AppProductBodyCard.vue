<template>
  <div class="product__body-cards">
    <ul class="product__body-cards-wrap">
      <li
        class="product__body-cards-item"
        v-for="item in block.list"
        :key="item"
      >
        <a href="#" class="product__body-cards-item-link">
          <img
            :src="
              require('@/assets/img/category/' +
                activeCategory +
                '/' +
                item.src +
                '.jpg')
            "
            alt="fast-food"
          />
          <h4>{{ item.title }}</h4>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    block: Object,
    activeCategory: String,
  },
  mounted() {},
};
</script>

<style lang="scss">
.product__body-wrap {
  padding: 45px 0;
}

.product__body-cards-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px 200px;
  gap: 10px;
}

.product__body-cards-item {
  position: relative;
}

.product__body-cards-item-link {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h4 {
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 20px;
    font-family: var(--mainFontBd);
    color: rgb(255, 255, 255);
    font-weight: bold;
    line-height: 1;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 1);
  }
}

.product__body-cards-item-link:hover {
  opacity: 0.7;
}

@media (min-width: 720px) {
  .product__body-cards-wrap {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 200px 200px;
  }
}
</style>
