<template>
  <ul class="social-wrap">
    <li class="social-item" v-for="item in socialList" :key="item.id">
      <a
        :href="item.link"
        class="social-item-link"
        v-html="item.html"
      ></a>
    </li>
  </ul>
</template>

<script>
export default {
    props: {
        socialList: Array
    }
};
</script>

<style lang="scss">
.social-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-item + .social-item {
  margin-left: 20px;
}

.social-item {
  transition: transform 0.5s linear;
}

.social-item:hover {
  transform: rotate(360deg);

  .social-item-link {
    border: 2px solid var(--mainClGr);
  }

  svg {
    fill: var(--mainClGr);
  }
}

.social-item-link {
  position: relative;
  display: block;
  padding: 10px;
  width: 44px;
  height: 44px;
  border-radius: 2px;
  background-color: rgb(137, 137, 137);
  border: 2px solid transparent;
  transition: border 0.5s linear;

  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
    transition: fill 0.5s linear;
  }
}
</style>