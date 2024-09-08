const express = require("express");
const cors = require("cors");
const url = require("url");
require("dotenv").config();
const needle = require("needle");
const app = new express();
const PORT = process.env.PORT || 4000; //Enable CORS
app.use(cors()); // Enviornment variable
let API_URL = process.env.API_URL || "https://api.restful-api.dev/objects";
// const API_KEY_VARIABLE = process.env.API_KEY_VARIABLE;
// const API_KEY_VALUE = process.env.API_KEY_VALUE; //create the route
app.get("/api", async (req, res) => {
  API_URL = req.headers.myurl || API_URL;
  let options = {};
  for (let header of req.headers.headerlist.split(",")) {
    head = header.toLowerCase();
    options[head] = req.headers[head];
  }
  delete req.headers.myurl;
  delete req.headers.headerlist;

  try {
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query, //Query parameters passed to the proxy e.g city here
    });

    const apiResponse = await needle("get", `${API_URL}?${params}`, {
      headers: options,
    });
    const data = apiResponse.body;
    res.status(200).json(data);
  } catch (ex) {
    res.status(500).json({ ex });
  }
});
app.listen(PORT, () => console.log(`Proxy server listening at port ${PORT}`));

// To run this use the following code -
// >_ npm run start
// in postman replicate the following
// const myHeaders = new Headers();
// myHeaders.append("myUrl", "https://workday--wdgtmdev.sandbox.my.salesforce.com/services/data/v62.0/metadata/deployRequest/0Af7600000WNrp6?includeDetails=true");
// myHeaders.append("Authorization", "Bearer 00D760000004g8M!ARQAQNJ9WMA00.EYlYOb3TG1oomPIBJiHi8UyUTk9U.arvc91tn3BDfqluamOBevvjfOC9c4aC1hAz5I2QausYmVdscqZCxD");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("headerlist", "Authorization,Content-Type");

// const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow"
// };

// fetch("localhost:4000/api", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
