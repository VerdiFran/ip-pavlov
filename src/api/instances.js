import * as axios from 'axios'

export const baseURL = 'http://' + process.env.REACT_APP_SERVER_HOST + ':' +
    process.env.REACT_APP_SERVER_PORT + '/api/v1'

/**
 * Default API instance.
 */
export const instance = axios.create({
    baseURL: baseURL
})

/**
 * Instance for file downloading.
 */
export const instanceForDownloadFile = axios.create({
    baseURL: baseURL,
    responseType: 'blob'
})