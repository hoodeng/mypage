// URL = 'https://pgykeji.com/api'
// URL = 'http://192.168.1.4:8080/api'

import {
  baseUrl
} from './config'
import {
  network
} from './network'
// import request from '@/commo'
// URL = 'http://127.0.0.1:8080/api'

console.info('networks')
console.info(network)

const request = {
  // getAddrTreeCascade: function(data, success, fail) {
  //   // let request = require('request')
  //   let url = baseUrl + '/dict/addr/cascade'
  //   network.get(url, data, success, fail)
  // },
  // feedback: function (data, success, fail) {
  //   // let request = require('request')
  //   let url = baseUrl + '/user/feedback'
  //   network.post(url, data, success, fail);
  // },
  getBlog: function (data, success, fail) {
    // let request = require('request')
    let url = baseUrl + '/blog/article'
    network.get(url, data, success, fail);
  },
  getBlogList: function (data, success, fail) {
    let url = baseUrl + '/blog/list'
    network.get(url, data, success, fail);
  },
  getBlogCount: function (data, success, fail) {
    let url = baseUrl + '/blog/count'
    network.get(url, data, success, fail);
  },
  getPrevBlog: function (data, success, fail) {
    let url = baseUrl + '/blog/prev'
    network.get(url, data, success, fail);
  },
  getNextBlog: function (data, success, fail) {
    let url = baseUrl + '/blog/next'
    network.get(url, data, success, fail);
  },
  getPrevBlogId: function (data, success, fail) {
    let url = baseUrl + '/blog/previd'
    network.get(url, data, success, fail);
  },
  getNextBlogId: function (data, success, fail) {
    let url = baseUrl + '/blog/nextid'
    network.get(url, data, success, fail);
  },
}

export {
  request
}
