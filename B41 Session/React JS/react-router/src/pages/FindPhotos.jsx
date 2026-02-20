import { useLoaderData, Form } from "react-router";

function FindPhotoPage() {
  const photos = useLoaderData();

  // Photo Validate
  if (!photos.length === 0) {
    return (
      <div>
        <h1>No Photo Found by 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    );
  }
  return (
    <div>
      {/* Router Form - GET */}
      <h1>Find Photos</h1>
      <p>Search by id , name ,etc</p>
      <Form method="GET" className="flex gap-x-3.5 my-12 p-12">
        <input
          type="text"
          name="id"
          placeholder="Search photo by Id"
          className="border border-gray-200 px-5 py-2"
        />
        <button
          type="submit"
          className="bg-teal-700 text-white rounded font-medium "
        >
          Find
        </button>
      </Form>

      <h1>Photo Details:</h1>

      <div>
        {photos.map((photo) => {
          return (
            <div>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s" ||
                  photo.thumbnailUrl
                }
                alt={photo.title}
              />
              <h3>{photo.title}</h3>
              <span>{photo.albumId}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FindPhotoPage;
