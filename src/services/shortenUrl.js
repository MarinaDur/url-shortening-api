export async function shortenLink(value) {
  try {
    const response = await fetch("/.netlify/functions/shortenUrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: value.trim() }),
    });

    const responseData = await response.json();
    // console.log("my func chat's value:", responseData.shortUrl);
    console.log("my func my value:", responseData.result_url);
    return responseData.result_url;
  } catch (error) {
    console.error("error:", error);
  }
}
