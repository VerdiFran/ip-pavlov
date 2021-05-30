import {instanceForDownloadFile} from './instances'

/**
 * API for images upload/download.
 */
export const imagesApi = {

    /**
     * Returns GET request on image.
     * @param imageId Image id.
     * @param size Size of image: normal | mini.
     */
    async downloadImage(imageId, size) {
        const imageSize = size ?? 'normal'

        try {
            const response = await instanceForDownloadFile.get(`images/${imageId}/${imageSize}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}