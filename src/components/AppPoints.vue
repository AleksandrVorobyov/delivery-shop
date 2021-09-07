<template>
  <section class="points">
    <div class="container">
      <div class="points-wrap">
        <div class="points__nav">
          <button class="points__nav-download">
            <span>
              <img
                :src="require('@/assets/img/icons/' + pointsNav.src)"
                :alt="pointsNav.alt"
              />
            </span>
            {{ pointsNav.title }}
          </button>
        </div>
        <div class="points__steps">
          <ul class="points__steps-row">
            <li
              class="points__steps-item"
              v-for="item in pointsSteps"
              :key="item"
            >
              <div class="points__steps-item-img">
                <img
                  :src="require('@/assets/img/icons/' + item.src)"
                  :alt="item.alt"
                />
              </div>
              <h4 class="points__steps-item-title">{{ item.title }}</h4>
              <p class="points__steps-item-text">{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppPoints",
  props: {},
  data() {
    return {};
  },
  computed: mapGetters(["pointsNav", "pointsSteps"]),
};
</script>

<style lang="scss">
.points {
  position: relative;
  padding: 80px 0 40px;
  background: #fff;
}

.points__nav {
  display: flex;
  justify-content: center;
}

.points__nav-download {
  position: relative;
  display: inline-flex;
  margin-bottom: 80px;
  align-items: center;
  padding: 15px 15px;
  font-size: 16px;
  font-family: var(--mainFontBd);
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1.2;
  background: var(--mainClOg);
  min-height: 50px;
  max-width: 353px;
  cursor: pointer;
  outline: none;
  border: none;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    pointer-events: none;
  }

  span img {
    object-fit: contain;
  }
}

.points__nav-download::before {
  position: absolute;
  content: "";
  left: 0;
  bottom: -4px;
  height: 4px;
  width: 100%;
  background: url("~@/assets/img/icons/zigzag.png");
}

.points__steps-row {
  display: grid;
  grid-template-columns: 250px;
  gap: 50px;
  list-style-type: none;
  justify-content: center;
  border-left: 5px solid var(--mainClOg);
  border-right: 5px solid var(--mainClOg);
}

.points__steps-item {
  text-align: center;
}

.points__steps-item-img {
  position: relative;
  height: 75px;
  margin-bottom: 25px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  img {
    object-fit: contain;
  }
}

.points__steps-item-title {
  margin-bottom: 10px;
  font-size: 22px;
  font-family: var(--mainFontBd);
  color: var(--mainTextBl);
  font-weight: bold;
  line-height: 1.2;
}

.points__steps-item-text {
  font-size: 16px;
  font-family: var(--mainFontRg);
  color: var(--mainTextBl);
  line-height: 1.2;
}

@media (min-width: 720px) {
  .points__steps-row {
    grid-template-columns: 1fr 1fr 1fr;
    border-left: 0px solid var(--mainClOg);
    border-right: 0px solid var(--mainClOg);
  }
}

@media (min-width: 420px) {
  .points__nav-download {
    padding: 15px 48px;
  }
}
</style>
