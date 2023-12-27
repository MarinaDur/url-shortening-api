import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const apiUrl = process.env.API_URL;
export async function handler(event) {
  const body = event.body ? JSON.parse(event.body) : {};
  const { url } = body;
  const data = new URLSearchParams();
  data.append("url", url);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    });

    const responseData = await response.json();

    return {
      statusCode: 200,
      // headers: {
      //    "Access-Control-Allow-Origin": "*",

      // },
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      // headers: {
      //   "Access-Control-Allow-Origin": "*",

      // },
      body: JSON.stringify({
        error: "Internal Server Error",
      }),
    };
  }
}
