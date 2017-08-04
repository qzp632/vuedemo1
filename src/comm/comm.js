import axios from 'axios'
import urlDev from './config'
export function listF(url) {
	// var urls = "https://api.douban.com/v2/";
	var urls = urlDev.url+url
    return axios.get(urls)
  	.then( res => {
    	return Promise.resolve(res.data.subjects)
  	})
}  