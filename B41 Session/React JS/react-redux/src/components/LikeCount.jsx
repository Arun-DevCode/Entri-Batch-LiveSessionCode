import { useState } from "react";

function LikeCount() {
  let [likes, setLikes] = useState(0);

  function updateLikeCount() {
    console.log("Updated");
    // likes += 1;
    setLikes(likes + 1);
  }
  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={updateLikeCount}>Give like</button>
    </div>
  );
}

export default LikeCount;
