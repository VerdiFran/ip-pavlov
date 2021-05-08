/**
 * Id generator for setting components keys
 * @return Generator for getting next id.
 */
export function* IdGenerator() {
    let id = 1
    for (; ; id++) {
        yield id
    }
}
