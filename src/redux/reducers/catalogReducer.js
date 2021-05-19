const SET_CATEGORIES = 'SET-CATEGORIES'

const initialState = {
    categories: []
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            }
        }
        default: {
            return state
        }
    }
}

const setCategories = (categories) => ({type: SET_CATEGORIES, categories})

/**
 * Get categories from server and set categoryMenuItem to state
 * @returns {function(*): Promise<void>}
 */
export const downloadCategories = () => async (dispatch) => {
    // getting data from server

    /*const {data} = await catalogAPI.getCategoriesNames()

    data.then(response => setSubmenuItems(response.map(category => ({
        title: category.name,
        path: `/categories/${category.routeName}`
    }))))*/

    // test data

    const data = await new Promise(resolve => {
        console.log('...')
        setTimeout(() => {
            console.log('resolve')
            resolve([
                {
                    id: 4,
                    routeName: 'konservi',
                    name: 'Консервы'
                },
                {
                    id: 5,
                    routeName: 'maslo',
                    name: 'Масло'
                },
                {
                    id: 6,
                    routeName: 'bakaleya',
                    name: 'Бакалея'
                },
                {
                    id: 4,
                    routeName: 'konservi',
                    name: 'Мясные консервы'
                },
                {
                    id: 5,
                    routeName: 'maslo',
                    name: 'Овощные консервы'
                },
                {
                    id: 6,
                    routeName: 'bakaleya',
                    name: 'Шоколад'
                },
                {
                    id: 4,
                    routeName: 'konservi',
                    name: 'Хозтовары'
                },
                {
                    id: 5,
                    routeName: 'maslo',
                    name: 'Дрожжи'
                },
                {
                    id: 6,
                    routeName: 'bakaleya',
                    name: 'Чай и кофе'
                },
                {
                    id: 4,
                    routeName: 'konservi',
                    name: 'Крупы и мука'
                },
                {
                    id: 5,
                    routeName: 'maslo',
                    name: 'Маслины'
                },
                {
                    id: 6,
                    routeName: 'bakaleya',
                    name: 'Молочная продукция'
                },
            ])
        }, 1000)
    })

    dispatch(setCategories(data.map(category => ({
        title: category.name,
        path: `/categories/${category.routeName}`
    }))))
}

export default catalogReducer
