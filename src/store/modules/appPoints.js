export default {
    state: {
        pointsNav: {
            title: "Order and earn Delivery Points",
            src: "trophy.png",
            alt: "trophy",
          },
        pointsSteps: [
        {
            title: "Easy ordering",
            text: "It's quick, convenient, and free to  use on any device.",
            src: "iphone.png",
            alt: "iphone",
        },
        {
            title: "More choices",
            text: "Everything you want, including wine and  liquor, in one place.",
            src: "businessman.png",
            alt: "businessman",
        },
        {
            title: "Earn rewards",
            text: "Score Delivery Points with every purchase  and get great rewards.",
            src: "trophy-black.png",
            alt: "trophy-black",
        },
        ],
    },
    getters: {
        pointsNav(state) {
            return state.pointsNav
        },
        pointsSteps(state) {
            return state.pointsSteps
        },
    }
}