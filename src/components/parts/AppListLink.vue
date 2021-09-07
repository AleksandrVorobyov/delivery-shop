<template>
  <ul class="listlink">
    <li class="listlink-item" v-for="item in shortList" :key="item">
      <a :href="item.link" class="listlink-item-link">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  computed: {
    shortList() {
      if (window.innerWidth < 420) {
        return this.list.slice(0, 10);
      } else {
        return this.list;
      }
    },
  },
};
</script>

<style lang="scss">
.listlink {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  gap: 15px 15px;
  justify-items: center;

  @media (min-width: 420px) {
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 720px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: repeat(6, 1fr);
    justify-items: start;
  }

  @media (min-width: 1035px) {
    gap: 15px 30px;
  }
}

.listlink-item-link {
  position: relative;
  font-size: 14px;
  font-family: var(--mainFontRg);
  color: var(--mainTextBl);
  line-height: 1;
}

.listlink-item-link::before {
  position: absolute;
  bottom: -10px;
  left: 0;
  height: 2px;
  width: 100%;
  content: "";
  background: var(--mainBg);
  opacity: 0;
  transform: scale(0.7);
  transition: all 0.4s ease-in-out;
}

.listlink-item-link:hover::before {
  bottom: -5px;
  opacity: 1;
  transform: scale(1);
}
</style>