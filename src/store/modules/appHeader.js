export default {
    state: {
        logo: "Delivery Shop",
        navLinks: [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "About us",
            link: "/about",
        },
        {
            title: "Contacts",
            link: "/contacts",
        },
        ],
        contentTitle: "See who delivers in your neighborhood!",
        headerFormAdress: {
            placeholder: "Street address,City,State",
            value: "",
            id: "header-form-input-adress",
            isValid: true,
        },
        headerFormPlace: {
            placeholder: "Food or Place",
            value: "",
            id: "header-form-input-place",
            isValid: true,
        },
        formError: "Заполните форму!",
        formSuccess: "Форма отправлена!",
        formValid: true,
        isSubmit: false,
        btnHeadText: 'Login',
        navBurger: false,
    },
    getters: {
        logo(state) {
            return state.logo
        },
        navLinks(state) {
            return state.navLinks
        },
        contentTitle(state) {
            return state.contentTitle
        },
        headerFormAdress(state) {
            return state.headerFormAdress
        },
        headerFormPlace(state) {
            return state.headerFormPlace
        },
        formError(state) {
            return state.formError
        },
        formSuccess(state) {
            return state.formSuccess
        },
        formValid(state) {
            return state.formValid
        },
        isSubmit(state) {
            return state.isSubmit
        },
        btnHeadText(state) {
            return state.btnHeadText
        },
        navBurger(state) {
            return state.navBurger
        },
    },
    mutations: {
        validForm(state) {
            state.formValid = true;
            if (
                state.headerFormAdress.value !== "" &&
                state.headerFormPlace.value !== ""
            ) {
                state.headerFormAdress.isValid = true;
                state.headerFormPlace.isValid = true;
                state.formValid = true;
                state.isSubmit = true;
                state.headerFormAdress.value = "";
                state.headerFormPlace.value = "";
            } else {
                state.formValid = false;
              if (
                state.headerFormAdress.value === "" &&
                state.headerFormPlace.value === ""
              ) {
                state.headerFormAdress.isValid = false;
                state.headerFormPlace.isValid = false;
              } else if (state.headerFormPlace.value === "") {
                state.headerFormPlace.isValid = false;
              } else if (state.headerFormAdress.value === "") {
                state.headerFormAdress.isValid = false;
              }
            }
            return state.formValid;
        },
        isSubmit(state) {
            if (state.isSubmit) {
                state.isSubmit = false;
            }
        },
        burgerToggle(state) {
            if( state.navBurger ) {
                return (state.navBurger = false);
            } else {
                return (state.navBurger = true);
            }
        },
    },
    actions: {
        deleteSuccess(context) {
            setTimeout(() => {
                context.commit('isSubmit', {
                })
            }, 2000);
          },
    },
}