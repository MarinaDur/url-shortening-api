const fetch = require("node-fetch");

exports.handler = async function (event) {
  const apiUrl = "https://cleanuri.com/api/v1/shorten";

  const data = new URLSearchParams();
  data.append("url", event.body.trim());

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    });

    const responseData = await response.json();
    console.log("my func chat's value:", responseData.shortUrl);
    console.log("my func my value:", responseData.result_url);

    return {
      statusCode: 200,
      body: JSON.stringify({
        shortUrl: responseData.result_url,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal Server Error",
      }),
    };
  }
};
