<template>
  <header class="header" id="header">
    <div class="container">
      <div class="header__wrapper">
        <app-nav></app-nav>
        <app-header-content
          :contentTitle="contentTitle"
          @action="validForm($event), deleteSuccess()"
          :isValid="formValid"
          :formError="formError"
          :formSuccess="formSuccess"
          :isSubmit="isSubmit"
        >
          <input
            class="form-input"
            :class="{ isvalid: !headerFormAdress.isValid }"
            type="text"
            :id="headerFormAdress.id"
            :placeholder="headerFormAdress.placeholder"
            v-model="headerFormAdress.value"
          />
          <input
            class="form-input"
            :class="{ isvalid: !headerFormPlace.isValid }"
            type="text"
            :id="headerFormPlace.id"
            :placeholder="headerFormPlace.placeholder"
            v-model="headerFormPlace.value"
          />
        </app-header-content>
      </div>
    </div>
    <app-sidebar/>
  </header>
</template>

<script>
import AppNav from "./parts/AppNav.vue";
import AppHeaderContent from "./parts/AppHeaderContent.vue";
import AppSidebar from "./AppSidebar.vue";
import { mapGetters } from "vuex";

export default {
  name: "AppHeader",
  components: {
    AppNav,
    AppHeaderContent,
    AppSidebar,
  },
  computed: mapGetters([
    "contentTitle",
    "headerFormAdress",
    "headerFormPlace",
    "formError",
    "formSuccess",
    "formValid",
    "isSubmit",
  ]),
  data() {
    return {};
  },
  methods: {
    validForm() {
      this.$store.commit("validForm");
    },
    deleteSuccess() {
      this.$store.dispatch("deleteSuccess");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  min-height: 400px;
  padding: 80px 0;
  background: url("../assets/img/header/fast-food.jpg") top center / cover
    no-repeat;
}

.header__wrapper > * + * {
  margin-top: 80px;
}
</style>