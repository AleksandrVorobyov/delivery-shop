<template>
  <div class="page">
    <app-header></app-header>
    <main>
      <router-view />
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
:root {
  --mainClGr: #8dc63f;
  --mainClOg: #f48807;
  --mainValid: #ff2626;
  --mainTextBl: #363636;
  --mainFontBd: "LatoBold";
  --mainFontLi: "LatoLight";
  --mainFontRg: "LatoRegular";
  --mainBg: #363636;
  --grayBg: #ebebeb;
  --asideBg: #a0a0a0;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span {
  cursor: default;
}

.container {
  max-width: 1005px;
  padding: 0 15px;
  margin: 0 auto;
}

body {
  font-family: var(--mainFontRg);
}

*::selection {
  background: var(--mainClGr);
}

img {
  pointer-events: none;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
