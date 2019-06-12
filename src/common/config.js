let baseUrl;

if (process.env.NODE_ENV == 'development') {
  baseUrl = "http://127.0.0.1:8080";
} else {
  baseUrl = 'http://pgykeji.com'
}

export {
  baseUrl
}
