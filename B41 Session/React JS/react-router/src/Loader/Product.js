async function findPhoto({ request }) {
  // URL Parsing : String -> URL
  const photoURL = new URL(request.url);

  const photoId = photoURL.searchParams.get("id");

  if (!photoId) {
    alert("PhotoId is Not provided!");
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?id=${photoId}`,
  );

  // Body Parser : JSON -> Object
  const data = await res.json();

  return data;
}

export default findPhoto;
