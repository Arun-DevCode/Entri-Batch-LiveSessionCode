import { useForm } from "react-hook-form";

function AddInventoryForm() {
  const { register, handleSubmit } = useForm();

  async function createProduct(data) {
    const response = await fetch(
      "https://6925447482b59600d722ec31.mockapi.io/products",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response) {
      console.table(response);
    }
    console.log(response);
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-xl font-semibold text-center">Create Product</h1>
      <p className="my-1.5 text-gray-400">Lorem ipsum dolor sit</p>
      <form onSubmit={handleSubmit(createProduct)}>
        <div className="flex flex-col space-t-3">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            placeholder="product name"
            name="productName"
            {...register("productName")}
            className="border border-gray-100 px-3.5 my-2.5 py-1.5"
          />
        </div>
        <div className="flex flex-col space-t-3">
          <label htmlFor="Price">Price</label>
          <input
            type="number"
            placeholder="product name"
            {...register("productPrice")}
            className="border border-gray-100 px-3.5 my-2.5 py-1.5"
          />
        </div>
        <div className="flex flex-col space-t-3">
          <label htmlFor="image-url">Product Image</label>
          <input
            type="url"
            placeholder="Paste Image URL"
            {...register("productImageURL")}
            className="border border-gray-100 px-3.5 my-2.5 py-1.5"
          />
        </div>
        <button type="submit" className="active-btn">
          Create Product
        </button>
      </form>
    </div>
  );
}

export default AddInventoryForm;
