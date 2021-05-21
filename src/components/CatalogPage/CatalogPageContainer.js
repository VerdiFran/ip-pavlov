import React from 'react'
import CatalogPage from './CatalogPage'
import {connect} from 'react-redux'
import {getCategories} from '../../utils/selectors/catalogSelectors'
import bearProduct from '../../assets/images/distributorsProducts/bearProduct.png'

const mapStateToProps = (state) => ({
    categories: getCategories(state)
})

const CatalogPageContainer = ({categories}) => {
    const products = [
        {
            id: 0,
            description: 'СОУС СОЕВЫЙ пикантный ТМ "Медведь любимый" 200/24 (бут.груша)',
            quantity: 1,
            price: 15.20,
            image: bearProduct
        },
        {
            id: 1,
            description: 'СОУС СОЕВЫЙ пикантный ТМ "Медведь любимый" 200/24 (бут.груша)',
            quantity: 1,
            price: 15.20,
            image: bearProduct
        },
        {
            id: 2,
            description: 'СОУС СОЕВЫЙ пикантный ТМ "Медведь любимый" 200/24 (бут.груша)',
            quantity: 1,
            price: 15.20,
            image: bearProduct
        },
        {
            id: 3,
            description: 'СОУС СОЕВЫЙ пикантный ТМ "Медведь любимый" 200/24 (бут.груша)',
            quantity: 1,
            price: 15.20,
            image: bearProduct
        },
        {
            id: 4,
            description: 'СОУС СОЕВЫЙ пикантный ТМ "Медведь любимый" 200/24 (бут.груша)',
            quantity: 1,
            price: 15.20,
            image: bearProduct
        },
        {
            id: 5,
            description: 'СОУС СОЕВЫЙ пикантный ТМ "Медведь любимый" 200/24 (бут.груша) СОУС СОЕВЫЙ пикантный ТМ "Медведь любимый" 200/24 (бут.груша)',
            quantity: 1,
            price: 15.20,
            image: bearProduct
        }
    ]

    return <CatalogPage categories={categories} products={products}/>
}

export default connect(mapStateToProps)(CatalogPageContainer)
