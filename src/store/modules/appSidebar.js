export default {
    state: {
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
        sidebarStatus: false,
    },
    getters: {
        sidebarTitle(state) {
            return state.sidebarTitle
        },
        sidebarList(state) {
            return state.sidebarList
        },
        sidebarStatus(state) {
            return state.sidebarStatus
        },
    },
    mutations: {
        sidebarToggle(state) {
            if (state.sidebarStatus) {
              return (state.sidebarStatus = false);
            } else {
              return (state.sidebarStatus = true);
            }
          },
    }
}