import * as axios from 'axios'

/**
 * Default API instance.
 */
export const instance = axios.create({
    baseURL: 'http://176.119.158.143:9090/api/v1'
})

/**
 * Instance for file downloading.
 */
export const instanceForDownloadFile = axios.create({
    baseURL: "http://176.119.158.143:9090/api/v1",
    responseType: 'blob'
})
