import {IdGenerator} from "../generators/generators";

/**
 * Get promotions selector.
 * @param state Global state.
 */
export const getPromotions = (state) => {
    const promotionsIdGenerator = IdGenerator()

    return state.promotions.promotions.map(promotion => ({
        ...promotion,
        key: promotionsIdGenerator.next().value
    }))
}