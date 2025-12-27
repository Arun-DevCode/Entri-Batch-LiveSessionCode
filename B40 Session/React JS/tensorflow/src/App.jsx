import mobileNet from "@tensorflow-models/mobilenet";

function App() {
  const url =
    "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg";

  async function handleImageClassification() {
    console.log("Classification Started!");
    // load model - classify model from TF
    const model = await mobileNet?.load({ version: 2, alpha: 0.5 });
    // start image classification
    const prediction = await model.classify(url);
    console.log("First Prediction:", prediction);
  }
  return (
    <>
      <h1 className="text-4xl font-bold font-serif text-center my-12 capitalize">
        Welcome to <span className="text-orange-400">Tensorflow JS</span>
      </h1>

      <button
        className="text-white bg-orange-400 rounded-lg text-center"
        onClick={handleImageClassification}
      >
        Start Classify
      </button>
    </>
  );
}

export default App;
