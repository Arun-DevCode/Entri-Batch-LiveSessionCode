async function handleUserRegister(event) {
    event.preventDefault();

  console.log(formdata.get("email"));

  try {
    // const response = await fetch("http://localhost:5173/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(),
    // });
    // const data = await response.json();
    // // Validation
    // if (!data) {
    //   throw new Error("failed to register!");
    // }

    console.log(data);
  } catch (error) {
    alert(error.message || "An error occured while registering..");
  }
}

export default handleUserRegister;
