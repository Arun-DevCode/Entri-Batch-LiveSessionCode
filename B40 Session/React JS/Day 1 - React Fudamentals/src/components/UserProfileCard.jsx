function UserProfileCard(props) {
  console.log("Child Rendered again");
  console.log(props);
  return (
    <div>
      <h1>User Profile Details:</h1>
      <ul>
        <li>Name : {props.employeeData.name}</li>
        <li>Role : {props.employeeData.role}</li>
        <li>Experience : {props.employeeData.experience}</li>
      </ul>
    </div>
  );
}

export default UserProfileCard;
