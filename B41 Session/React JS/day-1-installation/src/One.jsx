import Two from "./Two";

//Parent
export default function One() {
  let Username = null;

  // Event handler from parent
  function sendMessage(message) {
    console.log("Children Component :", message);
  }

  if (!Username) {
    return <h1 className="p-4 text-red-500">No Username found in component</h1>;
  }
  return (
    <div>
      <h1>{Username}</h1>
      {/* React Element */}
      {/* {Two && <Two />} */}
    </div>
  );
}