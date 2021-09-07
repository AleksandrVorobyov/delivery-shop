<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrap">
        <div class="footer__list">
          <ul class="footer__list-wrap">
            <li
              class="footer__list-item"
              v-for="item in footerList"
              :key="item"
            >
              <a :href="item.link" class="footer__list-link">{{
                item.title
              }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__social">
          <app-social :socialList="footerSocial"/>
        </div>
        <div class="footer__copy">
          <p class="footer__copy-text">{{ footerCopy }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import AppSocial from "./parts/AppSocial.vue"

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["footerList", "footerCopy", "footerSocial"]),
  },
  components: {
    AppSocial
  }
};
</script>

<style lang="scss">
.footer {
  padding: 30px 0px;
  background: var(--grayBg);
}

.footer-wrap > * + * {
  margin-top: 40px;
}

.footer__list-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  justify-items: center;
}

.footer__list-link {
  position: relative;
  font-size: 14px;
  font-family: var(--mainFontRg);
  color: var(--mainTextBl);
  line-height: 1;
}

.footer__list-link::before {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--mainBg);
  content: "";
  opacity: 0;
  transform: scale(0.7);
  transition: all 0.4s ease-in-out;
}

.footer__list-link:hover::before {
  transform: scale(1);
  opacity: 1;
  bottom: -5px;
}

.footer__copy-text {
  position: relative;
  display: block;
  font-size: 12px;
  font-family: "Lato";
  color: var(--mainTextBl);
  text-align: center;
}

@media (min-width: 720px) {
  .footer__list-wrap {
    display: flex;
    justify-content: center;
    justify-items: auto;
    gap: 0;
  }

  .footer__list-item + .footer__list-item {
    margin-left: 20px;
  }
}

@media (min-width: 420px) {
  .footer__list-wrap {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>