<template>
  <aside
    class="sidebar"
    :class="this.sidebarStatus ? 'active' : ''"
    id="sidebar"
  >
    <div class="sidebar__wrap">
      <h2 class="sidebar__title">{{ sidebarTitle }}</h2>
      <ul class="sidebar__list">
        <li
          class="sidebar__list-item"
          @click="sidebarToggle(), burgerToggle()"
          v-for="item in sidebarList"
          :key="item"
        >
          <router-link :to="item.link" class="sidebar__list-item-link">{{
            item.text
          }}</router-link>
        </li>
      </ul>
      <div class="sidebar__social">
        <app-social :socialList="footerSocial" />
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
import AppSocial from "./parts/AppSocial.vue";

export default {
  data() {
    return {
      sidebarTitle: "Menu:",
      sidebarList: [
        {
          link: "/",
          text: "Home",
        },
        {
          link: "/about",
          text: "About Us",
        },
        {
          link: "/contacts",
          text: "Contacts",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["footerSocial", "sidebarStatus"]),
  },
  components: {
    AppSocial,
  },
  methods: {
    sidebarToggle() {
      this.$store.commit("sidebarToggle");
    },
    burgerToggle() {
      this.$store.commit("burgerToggle");
    },
  },
};
</script>

<style>
.sidebar {
  position: fixed;
  background: #fff;
  left: 0;
  top: 100%;
  width: 100%;
  height: 100vh;
  z-index: 100;
  box-shadow: inset 0px 0px 10px var(--asideBg);
  padding: 20px 15px;
  transition: top 0.5s ease-in;
}

.sidebar.active {
  top: 190px;
}

.sidebar__wrap {
  background: var(--grayBg);
  width: 100%;
  height: 100%;
  padding: 10px 0;
}

.sidebar__title {
  margin-bottom: 20px;
  font-size: 32px;
  font-family: var(--mainFontBd);
  letter-spacing: 1px;
  text-align: center;
  color: var(--mainTextBl);
}

.sidebar__list-item + .sidebar__list-item {
  margin-top: 10px;
}

.sidebar__list-item-link {
  position: relative;
  display: block;
  padding: 15px 10px;
  font-size: 26px;
  letter-spacing: 1px;
  color: #fff;
  border: 3px solid var(--asideBg);
  border-radius: 10px;
  background: var(--mainClGr);
  z-index: 10;
  overflow: hidden;
}

.sidebar__list-item-link::before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--mainClOg);
  content: "";
  width: 700px;
  height: 700px;
  border-radius: 50%;
  z-index: -10;
  transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
}

.sidebar__list-item-link.router-link-active::before {
  width: 0;
  height: 0;
}

.sidebar__list-item-link:hover::before {
  width: 0;
  height: 0;
}

.sidebar__social {
  margin-top: 30px;
}
</style>