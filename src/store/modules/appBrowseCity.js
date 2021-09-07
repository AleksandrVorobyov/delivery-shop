export default {
    state: {
        browseCityTitle: "Browse by City",
        browseCityItems: [
          {
            title: "New York",
            img: "new-york",
            link: "#",
          },
          {
            title: "South View",
            img: "south-view",
            link: "#",
          },
          {
            title: "Los Angeles",
            img: "los-angeles",
            link: "#",
          },
          {
            title: "San Francisco",
            img: "san-francisco",
            link: "#",
          },
        ],
        browseCityList: [
          {
            title: "Arlington, VA",
            link: "#",
          },
          {
            title: "Atlanta, GA",
            link: "#",
          },
          {
            title: "Boston, MA",
            link: "#",
          },
          {
            title: "Bronx, NY",
            link: "#",
          },
          {
            title: "Brooklyn, NY",
            link: "#",
          },
          {
            title: "Cambridge, MA",
            link: "#",
          },
          {
            title: "Dallas, TX",
            link: "#",
          },
          {
            title: "Denver, CO",
            link: "#",
          },
          {
            title: "Hoboken, NJ",
            link: "#",
          },
          {
            title: "Jersey City, NJ",
            link: "#",
          },
          {
            title: "Miami, FL",
            link: "#",
          },
          {
            title: "Philadelphia, PA",
            link: "#",
          },
          {
            title: "Queens, NY",
            link: "#",
          },
          {
            title: "San Jose, CA",
            link: "#",
          },
          {
            title: "Somerville, MA",
            link: "#",
          },
          {
            title: "Stamford, CT",
            link: "#",
          },
          {
            title: "Washington, DC",
            link: "#",
          },
          {
            title: "See all cities",
            link: "#",
          },
        ],
    },
    getters: {
        browseCityTitle(state) {
            return state.browseCityTitle
        },
        browseCityItems(state) {
            return state.browseCityItems
        },
        browseCityList(state) {
            return state.browseCityList
        },
    }
}