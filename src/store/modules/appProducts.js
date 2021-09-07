export default {
    state: {
        productsTitle: 'Browse by Cuisine',
        productCategory: [ 
            {
                list: [
                    {
                        src: 'pizza',
                        link: '#',
                        title: 'Pizza'
                    },
                    {
                        src: 'chinese',
                        link: '#',
                        title: 'Chinese'
                    },
                    {
                        src: 'mexican',
                        link: '#',
                        title: 'Mexican'
                    },
                    {
                        src: 'sushi',
                        link: '#',
                        title: 'Sushi'
                    },
                    {
                        src: 'fast-food',
                        link: '#',
                        title: 'Fast Food'
                    },
                    {
                        src: 'thai',
                        link: '#',
                        title: 'Thai'
                    },
                ],
                id: 'food',
                mainTitle: 'Browse by Cuisine',
            },
            {
                list: [
                    {
                        src: 'beer',
                        link: '#',
                        title: 'Beer'
                    },
                    {
                        src: 'whiskey',
                        link: '#',
                        title: 'Whiskey'
                    },
                    {
                        src: 'tequila',
                        link: '#',
                        title: 'Tequila'
                    },
                    {
                        src: 'vodka',
                        link: '#',
                        title: 'Vodka'
                    },
                    {
                        src: 'wine',
                        link: '#',
                        title: 'Wine'
                    },
                    {
                        src: 'champagne',
                        link: '#',
                        title: 'Champagne'
                    },
                ],
                id: 'alcohol',
                mainTitle: 'Browse by Alcohol',
            },
            {
                list: [
                    {
                        src: 'egg',
                        link: '#',
                        title: 'Egg'
                    },
                    {
                        src: 'milk',
                        link: '#',
                        title: 'Milk'
                    },
                    {
                        src: 'melon',
                        link: '#',
                        title: 'Melon'
                    },
                    {
                        src: 'tomato',
                        link: '#',
                        title: 'Tomato'
                    },
                    {
                        src: 'cheese',
                        link: '#',
                        title: 'Cheese'
                    },
                    {
                        src: 'bread',
                        link: '#',
                        title: 'Bread'
                    },
                ],
                id: 'groceries',
                mainTitle: 'Browse by Groceries',
            },
            {
                list: [
                    {
                        src: 'washing-powder',
                        link: '#',
                        title: 'Washing powder'
                    },
                    {
                        src: 'soap',
                        link: '#',
                        title: 'Soap'
                    },
                    {
                        src: 'mop',
                        link: '#',
                        title: 'Mop'
                    },
                    {
                        src: 'towel',
                        link: '#',
                        title: 'Towel'
                    },
                    {
                        src: 'cream',
                        link: '#',
                        title: 'Cream'
                    },
                    {
                        src: 'detergent',
                        link: '#',
                        title: 'Detergent'
                    },
                ],
                id: 'laundry',
                mainTitle: 'Browse by Laundry',
            },
        ],
        productLinks: [
            {
                title:'American',
                link: '#',
            }, 
            {
                title:'Asian',
                link: '#',
            }, 
            {
                title:'Bagels',
                link: '#',
            }, 
            {
                title:'BBQ',
                link: '#',
            }, 
            {
                title:'Breakfast',
                link: '#',
            }, 
            {
                title:'Burgers',
                link: '#',
            }, 
            {
                title:'Deli',
                link: '#',
            }, 
            {
                title:'Desserts',
                link: '#',
            }, 
            {
                title:'Fusion',
                link: '#',
            }, 
            {
                title:'Indian',
                link: '#',
            }, 
            {
                title:'Italian',
                link: '#',
            }, 
            {
                title:'Japanese',
                link: '#',
            }, 
            {
                title:'Mediterranean',
                link: '#',
            }, 
            {
                title:'Middle Eastern',
                link: '#',
            }, 
            {
                title:'Sandwiches',
                link: '#',
            }, 
            {
                title:'Vegetarian',
                link: '#',
            }, 
            {
                title:'Wings',
                link: '#',
            }, 
            {
                title:'See all',
                link: '#',
            },
        ],
    },
    getters: {
        productsTitle(state) {
            return state.productsTitle
        },
        productCategory(state) {
            return state.productCategory
        },
        productLinks(state) {
            return state.productLinks
        },
    },
    mutations: {
    }
}