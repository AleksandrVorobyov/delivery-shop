<template>
  <section class="contact">
    <div class="container">
      <div class="contact__wrap">
        <div class="contact__col">
          <div class="contact__card">
            <h3 class="contact__card-title">
              {{ contactCardTitle }}
            </h3>
            <div class="contact__card-list">
              <dl
                class="contact__card-list-row"
                v-for="item in contactList"
                :key="item"
              >
                <dt class="contact__card-list-title">{{ item.title }}</dt>
                <dd
                  class="contact__card-list-item"
                  v-for="itemList in item.list"
                  :key="itemList"
                >
                  {{ itemList }}
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="contact__col">
          <div class="contact__map">
            <img src="@/assets/img/contacts/map.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["contactCardTitle", "contactList"]),
};
</script>

<style lang="scss">
.contact {
  padding-top: 40px;
}

.contact__wrap {
  display: grid;
  grid-template-columns: 470px 470px;
  grid-template-rows: 470px;
  gap: 35px;
  justify-content: center;

  @media (max-width: 1035px) {
    grid-template-columns: 470px;
    grid-template-rows: 470px 470px;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 470px 470px;
  }
}

.contact__wrap > * {
  max-width: 470px;
}

.contact__card {
  position: relative;
  padding: 30px 30px;
  background: var(--grayBg);
}
.contact__card::before {
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  content: "";
  background: transparent;
  border: 5px solid var(--mainClOg);
  z-index: 10;
  pointer-events: none;
}

.contact__card-title {
  font-size: 24px;
  font-family: var(--mainFontBd);
  letter-spacing: 1px;
  margin-bottom: 15px;
}

.contact__card-list-row + .contact__card-list-row {
  margin-top: 15px;
}

.contact__card-list-title {
  font-size: 18px;
  font-family: var(--mainFontBd);
  margin-bottom: 10px;
  letter-spacing: 0.7px;
}

.contact__card-list-item + .contact__card-list-item {
  margin-top: 5px;
}

.contact__card-list-item {
  font-size: 14px;
  letter-spacing: 0.5px;
}

.contact__map {
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
}

@media (min-width: 460px) {
  .contact__card-title {
    font-size: 28px;
  }

  .contact__card-list-title {
    font-size: 22px;
  }

  .contact__card-list-item {
    font-size: 16px;
  }
}
</style>