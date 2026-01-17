async function getAllCoins() {
  const res = await fetch(
    "https://coinranking1.p.rapidapi.com/coins/trending?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&limit=50&offset=0",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "93652e0971msh3b01c85cb7a7f39p16785ajsn231625015e14",
      },
    }
  );

  // JSON -> OBject
  const data = await res.json();// JSON parse

  return data;
}

getAllCoins().then((response) => console.log(response));
