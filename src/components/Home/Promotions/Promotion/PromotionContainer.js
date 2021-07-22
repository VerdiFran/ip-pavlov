import Promotion from './Promotion'
import {useEffect, useState} from 'react'
import ProductLink from './ProductLink/ProductLink'

const PromotionContainer = ({promotionInfo, openProduct}) => {
    const [processedText, setProcessedText] = useState()

    useEffect(() => {
        setProcessedText(handleText(promotionInfo.text))
    }, [promotionInfo])

    const handleText = (text) => {
        const regexp = new RegExp(/\[(.+?):(.+?)]/, 'g')
        const matches = []

        const newText = text.replaceAll(regexp, (...params) => {
            matches.push({id: params[1], name: params[2]})

            return '[]'
        })

        const textParts = newText.split('[]')

        return textParts.reduce((acc, part, index) =>
            index !== matches.length ? [
                ...acc,
                part,
                <ProductLink
                    productId={+matches[index].id}
                    productName={matches[index].name}
                    openProduct={openProduct}
                />
            ] : [
                ...acc,
                part
            ], [])
    }

    return <Promotion promotionInfo={{...promotionInfo, text: processedText}} openProduct={openProduct}/>
}

export default PromotionContainer