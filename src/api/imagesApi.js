import {instanceForDownloadFile} from './instances'

/**
 * API for images upload/download.
 */
export const imagesApi = {
    /**
     * Returns GET request on image.
     * @param imageId Image id.
     * @param {"normal" | "mini"} size Size of image
     */
    async downloadImage(imageId, size = "normal") {
        const config = {
            params: {

            }
        }

        try {
            const response = await instanceForDownloadFile.get(`images/${imageId}/${size}`, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}