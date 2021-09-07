<template>
  <div class="header__content">
    <h2 class="header__content-title">{{ contentTitle }}</h2>
    <form
      action="#"
      class="header__content-form"
      :class="{ isvalid: isValid }"
      @submit.prevent="$emit('action')"
    >
      <slot></slot>
      <button class="btn-submit" type="submit">Search</button>
    </form>
    <small v-if="!isValid" class="form__error">{{ formError }}</small>
    <small v-if="isSubmit" class="form__success">{{ formSuccess }}</small>
  </div>
</template>

<script>
export default {
  name: "AppHeaderContent",
  components: {},
  props: {
    contentTitle: String,
    isValid: Boolean,
    isSubmit: Boolean,
    formError: String,
    formSuccess: String,
  },
};
</script>

<style lang="scss">
.header__content {
  position: relative;
}

.header__content-form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  justify-items: center;
}

.header__content-title {
  margin-bottom: 35px;
  font-size: 32px;
  font-family: var(--mainFontBd);
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  text-shadow: 0px 4px 0px rgba(0, 0, 0, 0.18);
}

.btn-submit {
  position: relative;
  width: 100%;
  padding: 0 70px;
  background: #6ea326;
  height: 50px;
  font-size: 14px;
  font-family: var(--mainFontRg);
  color: rgb(255, 255, 255);
  line-height: 1.2;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: inset 0px 0px 5px #416908;
  overflow: hidden;
  z-index: 5;
}

.form-input.isvalid {
  border-color: var(--mainValid);
}

.btn-submit::before,
.btn-submit::after {
  position: absolute;
  content: "";
  top: 0;
  width: 50%;
  height: 100%;
  background: var(--mainClGr);
  transition: width 0.5s ease-in-out;
  z-index: -1;
}

.btn-submit::before {
  left: 0;
}

.btn-submit::after {
  right: 0;
}

.btn-submit:hover::before,
.btn-submit:hover::after {
  width: 0;
}

.form-input {
  position: relative;
  padding: 20px;
  min-width: 100%;
  height: 50px;
  font-size: 16px;
  font-family: var(--mainFontRg);
  color: rgb(137, 137, 137);
  line-height: 1.2;
  background-color: rgb(255, 255, 255);
  border: 2px solid transparent;
  outline: none;
  transition: border 0.4s linear;
}

.form-input:hover,
.form-input:focus {
  border-color: var(--mainClGr);
}

.form__error,
.form__success {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: inherit;
  margin-top: 10px;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  text-shadow: 1px 1px 3px #000;
}

.form__error {
  color: var(--mainValid);
}

.form__success {
  color: var(--mainClGr);
}

@media (min-width: 900px) {
  .header__content-form {
    display: flex;
    justify-content: center;
    justify-items: auto;
    gap: 0;
  }

  .header__content-form > * + * {
    margin-left: 4px;
  }

  .btn-submit {
    width: auto;
  }
}

@media (min-width: 480px) {
  .header__content-title {
    font-size: 38px;
  }

  .form-input {
    min-width: 300px;
  }

  .btn-submit {
    width: 300px;
  }
}
</style>

