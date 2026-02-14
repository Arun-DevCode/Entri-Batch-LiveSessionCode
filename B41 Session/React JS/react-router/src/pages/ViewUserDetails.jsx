import { useParams } from "react-router";

function ViewUserDetails() {
  const params = useParams();
  console.log(params);
  return <div>ViewUserDetails</div>;
}

export default ViewUserDetails;
