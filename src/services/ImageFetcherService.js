import axios from "axios"

class ImageFetcherService {
    constructor(httpClient) {
        this.httpClient = httpClient
        this._lastPage = 1;
    }

    async fetchImages(count) {
        try {
            const result = await this.httpClient.get(`/v2/list?limit=${count}&page=${++this._lastPage}`)
            return result.data;
        } catch (e) {
            this._lastPage = 1
            const result = await this.httpClient.get(`/v2/list?limit=${count}&page=${this._lastPage}`)
            return result.data;
        }
    }
}

export default class ImageFetcherServicePlugin {
    install(Vue) {
        Vue.prototype.$imageFetcherService = new ImageFetcherService(axios.create({
            baseURL: 'https://picsum.photos/',
            timeout: 2500
        }))
    }
}