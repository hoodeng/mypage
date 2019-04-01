let baseUrl;

if (process.env.NODE_ENV == 'development') {
  baseUrl = "http://pgykeji.com";
} else {
  baseUrl = 'http://pgykeji.com'
}

export {
  baseUrl
}
