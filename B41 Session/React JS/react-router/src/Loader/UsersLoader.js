// To get all users
export async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // return json
    // Conversion
    const data = await response.json(); // JSON -> Object
    return data;
  } catch (error) {
    console.log(error);
  }
}

// To Get User By Name
export async function getUserByName({ request }) {
  const url = new URL(request.url); // string-> url

  // Search params
  const name = url.searchParams.get("name"); // test user

  if (!name) {
    alert("Please provide user name to find user.");
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?name=${name}`,
  );

  const data = await res.json(); // conversion from json to object

  // Error Handling
  if (!data) {
    return { error: true, message: "Failed to fetch user." };
  }

  return { error: false, data };
}

// To create account
export async function createUserAccount({ request }) {
  const form = await request.formData();
  console.log("Router Form WIth Value : ", form);
  // Accessing field value
  const name = form.get("name");
  const email = form.get("email");
  const password = form.get("password");
  const formData = { name, email, password };

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  // conversion
  const data = await res.json();

  return data;
}
