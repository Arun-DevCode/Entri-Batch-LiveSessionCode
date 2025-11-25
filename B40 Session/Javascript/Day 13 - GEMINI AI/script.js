async function sendMessage() {
  const data = {
    contents: [
      {
        parts: [
          {
            text: "Do you know entri",
          },
        ],
      },
    ],
  };

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
    {
      method: "POST",
      headers: {
        "x-goog-api-key": "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const apiData = await response.json();
  console.log(apiData.candidates[0].content.parts[0]);
}

sendMessage();
