<template>
  <nav class="header__nav">
    <div class="header__nav-logo">
      <router-link to="/home" class="header__nav-logo-text">{{
        logo
      }}</router-link>
    </div>
    <div class="header__nav-links">
      <ul class="header__nav-links-row">
        <li class="header__nav-links-item" v-for="item in navLinks" :key="item">
          <router-link :to="item.link" class="header__nav-links-link">{{
            item.title
          }}</router-link>
        </li>
      </ul>
      <button class="header__nav-btn">{{ btnHeadText }}</button>
    </div>
    <div class="header__nav-menu">
      <button
        class="header__nav-menu-burger"
        :class="navBurger ? 'active' : ''"
        @click="burgerToggle($event), sidebarToggle()"
      >
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppNav",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: mapGetters(["logo", "navLinks", "btnHeadText", "sidebarStatus", "navBurger"]),
  methods: {
    burgerToggle() {
      this.$store.commit("burgerToggle");
    },
    sidebarToggle() {
      this.$store.commit("sidebarToggle");
    },
  },
};
</script>

<style lang="scss" scoped>
.header__nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header__nav-logo-text {
  font-size: 28px;
  font-family: var(--mainFontBd);
  color: rgb(255, 255, 255);
  font-style: italic;
  line-height: 1.2;
  text-shadow: 0px 4px 0px rgba(0, 0, 0, 0.18);
  text-decoration: none;
}

.header__nav-links {
  display: none;
}

.header__nav-links > * + * {
  margin-left: 30px;
}

.header__nav-links-row {
  list-style-type: none;
  display: flex;
}

.header__nav-links-link {
  position: relative;
  padding: 15px 0;
  font-size: 14px;
  font-family: var(--mainFontBd);
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1.2;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
}

.header__nav-links-link::before {
  position: absolute;
  content: "";
  bottom: 10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  transform: scale(0.5);
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.header__nav-links-link:hover::before,
.router-link-active.header__nav-links-link::before {
  opacity: 1;
  transform: scale(1);
  bottom: 0;
  background: var(--mainClGr);
}

.header__nav-links-link:hover,
.router-link-active.header__nav-links-link {
  color: var(--mainClGr);
  text-shadow: 0px 0px 3px #000;
}

.header__nav-links-item + .header__nav-links-item {
  margin-left: 25px;
}

.header__nav-links .header__nav-btn {
  display: none;
}

.header__nav-btn {
  position: relative;
  padding: 7px 30px;
  font-size: 14px;
  font-family: var(--mainFontBd);
  color: #fff;
  line-height: 1.2;
  background: transparent;
  border: 0.5px solid #fff;
  cursor: pointer;
  z-index: 100;
}

.header__nav-btn::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  content: "";
  background: var(--mainClGr);
  transition: width 0.5s linear;
  z-index: -1;
}

.header__nav-btn::after {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
  content: "";
  background: var(--mainClGr);
  transition: width 0.5s linear;
  z-index: -1;
}

.header__nav-btn:hover {
  &::before,
  &::after {
    width: 50%;
  }
}

.header__nav-menu-burger {
  position: relative;
  width: 50px;
  height: 40px;
  cursor: pointer;
  outline: none;
  border: none;
  background: var(--mainClOg);
  padding: 5px;

  &::before,
  &::after,
  span::before {
    position: absolute;
    content: "";
    height: 3px;
    width: calc(100% - 10px);
    pointer-events: none;
    background: var(--grayBg);
    transition: opacity 0.3s linear, top 0.3s linear 0.3s,
      bottom 0.3s linear 0.3s, transform 0.4s ease-in-out 0.6s;
  }

  &::before {
    top: 5px;
    left: 5px;
  }

  &::after {
    bottom: 5px;
    left: 5px;
  }

  span::before {
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
  }
}

.header__nav-menu-burger.active {
  &::before {
    top: 50%;
    transform: rotate(405deg) translateY(-50%);
    transform-origin: center;
  }

  &::after {
    bottom: 50%;
    transform: rotate(-405deg) translateY(50%);
    transform-origin: center;
  }

  span::before {
    opacity: 0;
  }
}

@media (min-width: 720px) {
  .header__nav-links .header__nav-btn {
    display: block;
  }

  .header__nav-menu {
    display: none;
  }
}

@media (min-width: 600px) {
  .header__nav-links {
    display: flex;
    align-items: center;
  }
}
</style>