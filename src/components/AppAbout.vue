<template>
  <section class="about">
    <div class="container">
      <div class="about__wrap">
        <div class="about__title">
          <app-title>About Us</app-title>
        </div>
        <div class="about__body">
          <div class="about__body-col">
            <div class="about__body-avatar">
              <img
                :src="require('@/assets/img/avatar/' + person.avatar)"
                alt="avatar"
              />
            </div>
          </div>
          <div class="about__body-col">
            <h3 class="about__body-title">{{ person.name }}</h3>
            <p class="about__body-text">
              {{ person.text }}
            </p>
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
  components: {
    AppTitle,
  },
  computed: mapGetters(["person"]),
};
</script>

<style lang='scss'>
.about {
  padding-top: 40px;
}
.about__title {
  margin-bottom: 30px;
}

.about__body-title {
  margin-bottom: 20px;
  font-size: 22px;
  font-family: var(--mainFontBd);
  text-align: center;
}

.about__body-text {
  text-align: center;
  font-size: 16px;
  letter-spacing: 1.5px;
}

.about__body {
  display: grid;
  grid-template-columns: 400px 400px;
  gap: 35px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1035px) {
    grid-template-columns: 400px;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
}

.about__body-col {
  position: relative;
}

.about__body-avatar {
  position: relative;
  height: 600px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.about__body-avatar::before {
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  content: "";
  background: transparent;
  border: 5px solid var(--mainClOg);
  z-index: 10;
}

@media (min-width: 550px) {
  .about__body-title {
    font-size: 26px;
  }

  .about__body-text {
    font-size: 18px;
  }
}
</style>