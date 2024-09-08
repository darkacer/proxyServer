// Create a proxy to redirect requests of the "/api/*" path to "https://example.org".
//
// Examples:
// GET /api/hello → GET https://example.org/hello
// POST /api/test?color=red → POST https://example.org/test?color=red
//
// Additionally, the proxy will:
// - Add an "x-added" header
// - Remove the "x-removed" header
// From the proxied response.
//
// You can/should update the proxy to suit your needs.
// See https://github.com/chimurai/http-proxy-middleware for more details.
// const { createProxyMiddleware } = require("http-proxy-middleware");

// const apiProxy = createProxyMiddleware({
//   target: "https://example.org",
//   changeOrigin: true,
//   pathRewrite: {
//     "^/api": "", // strip "/api" from the URL
//   },
//   onProxyRes(proxyRes) {
//     console.log("hello", proxyRes);
//     proxyRes.headers["x-added"] = "foobar"; // add new header to response
//     delete proxyRes.headers["x-removed"]; // remove header from response
//   },
// });

// // Expose the proxy on the "/api/*" endpoint.
// export default function (req, res) {
//   return apiProxy(req, res);
// }

const express = require("express");
const cors = require("cors");
const url = require("url");
require("dotenv").config();
const needle = require("needle");
const app = new express();
const PORT = process.env.PORT || 4000; //Enable CORS
app.use(cors()); // Enviornment variable
const API_URL = process.env.API_URL || "https://api.restful-api.dev/objects";
// const API_KEY_VARIABLE = process.env.API_KEY_VARIABLE;
// const API_KEY_VALUE = process.env.API_KEY_VALUE; //create the route
app.get("/api", async (req, res) => {
  // console.log(API_URL, req.get("myUrl"));
  for (key in req.headers) {
    console.log(key);
  }
  delete req.headers.myurl;
  console.log("after-------");
  for (key in req.headers) {
    console.log(key);
  }
  try {
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query, //Query parameters passed to the proxy e.g city here
      headers: req.headers,
    });
    //Call the actual api here using needle
    const apiResponse = await needle("get", `${API_URL}?${params}`, {});
    const data = apiResponse.body;
    res.status(200).json(data);
  } catch (ex) {
    res.status(500).json({ ex });
  }
});
app.listen(PORT, () => console.log(`Proxy server listening at port ${PORT}`));
