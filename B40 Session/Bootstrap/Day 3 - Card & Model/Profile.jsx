/*
 props : {
   name : "Gopalakrishnan"
 }
*/

// Operator : Dot notation
import { useRef } from "react";

export default function Profile({ name }) {
  console.log(name); // Gopalakrishnan
  const ref = useRef();

  ref.current.textContent = "Clarification to React Questions!"
  return (
    <>
      <h1 ref={ref}>Title</h1>
      <p>Descripition</p>
    </>
  );
}

// Focus :

/*
 <div>
      <div>
        <h1>Title</h1>
        <p>Descripition</p>
      </div>
      <button>Explore Me</button>
    </div>
*/
