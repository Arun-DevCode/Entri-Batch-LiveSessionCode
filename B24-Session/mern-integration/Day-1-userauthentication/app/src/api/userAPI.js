async function UserLogin(event) {
  event.preventDefault(); // Load Stop

  console.log("Triggered");
  try {
    const res = await fetch("http:/localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: "testuser",
        password: "testuser@2026",
      }),
    });

    const data = await res.json(); // JSON-> Object
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default UserLogin;
