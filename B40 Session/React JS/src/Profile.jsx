const TitleStyled = {
  color: "blue",
  border: "5px solid black",
  padding: "15px",
};

const NewTitle = {
  color: "purple",
  fontSize: "32px",
  border: "5px solid black",
  padding: "15px",
};

const Container = {
  display: "flex",
  justifyContent: "space-evenly",
  gap: "12px",
};

function Profile() {
  console.log("JSX Ran!");
  return (
    <div style={Container}>
      <h1 style={TitleStyled}>Welcome to JSX</h1>
      <h1 style={NewTitle}>Welcome to JSX</h1>
      {/* <ProfileUpdateForm /> */}
    </div>
  );
}

function UpdateForm() {
  return <h2>Update Form Here</h2>;
}

export { Profile, UpdateForm };
