export default {
    state: {
        menuTitle: 'Browse by Category',
        menuCategory: [
            {
                title: 'Food',
                src: 'food.png',
                alt: 'food',
                id: 'food',
                isActive: true,
            },
            {
                title: 'Alcohol',
                src: 'alcohol.png',
                alt: 'alcohol',
                id: 'alcohol',
                isActive: false,
            },
            {
                title: 'Groceries',
                src: 'groceries.png',
                alt: 'groceries',
                id: 'groceries',
                isActive: false,
            },
            {
                title: 'Laundry',
                src: 'laundry.png',
                alt: 'laundry',
                id: 'laundry',
                isActive: false,
            },
        ],
        activeCategory: 'food'
    },
    getters: {
        menuTitle(state) {
            return state.menuTitle
        },
        menuCategory(state) {
            return state.menuCategory
        },
        activeCategory(state) {
            return state.activeCategory
        },
    },
    mutations: {
        menuCatActive(state, idx) {
            for (let i = 0; i < state.menuCategory.length; i++) {
                const elem = state.menuCategory[i];
                elem.isActive = false;
            }
            state.menuCategory[idx.index].isActive = true;
            state.activeCategory = state.menuCategory[idx.index].id
        }
    }
}