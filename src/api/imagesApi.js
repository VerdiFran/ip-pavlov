import {instanceForDownloadFile} from "./instances";

/**
 * API for images upload/download.
 */
export const imagesApi = {

    /**
     * Returns GET request on image.
     * @param imageId Image id.
     * @param type Type of image.
     */
    async downloadImage(imageId, type) {
        const config = {
            params: {
                type
            }
        }

        try {
            const response = await instanceForDownloadFile.get(`images/${imageId}`, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}