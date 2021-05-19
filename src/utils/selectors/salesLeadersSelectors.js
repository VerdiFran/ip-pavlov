import {IdGenerator} from "../generators/generators";

/**
 * Get sales leaders selector.
 * @param state Sales leaders state.
 */
export const getSalesLeaders = (state) => {
    const leadersGenerator = IdGenerator()

    return state.leaders.leaders.map(leader => ({
        ...leader,
        key: leadersGenerator.next().value
    }))
}