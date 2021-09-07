export default {
  state: {
    contactCardTitle: "Contacts information:",
    contactList: [
      {
        title: "Adress",
        list: ["Tyler Durden", "420 Paper St", "New York", "DE 19886", "USA"],
      },
      {
        title: "Telephone",
        list: ["+44(780)076-76-90", "+44(785)333-25-25"],
      },
      {
        title: "Technical support service",
        list: ["From 9 to 22 on working days, from 10 to 20 on weekends."],
      },
    ],
  },
  getters: {
    contactCardTitle(state) {
        return state.contactCardTitle
    },
    contactList(state) {
        return state.contactList
    },
  },
};
