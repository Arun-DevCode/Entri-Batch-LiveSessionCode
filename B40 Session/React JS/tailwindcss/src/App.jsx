function App() {
  return (
    <section className="Entri space-y-5 h-svh">
      {/* Card Container */}
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
          alt="Bird with Nature"
        />
        <h1 className="card-title">Bird with nature</h1>
        <h4>Author : John Doe</h4>
        <h4>Liked by 3600</h4>
        <h4>Liked by 3600</h4>
        <h4>Liked by 3600</h4>
        <h4>Liked by 3600</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          consectetur modi, sunt dolorum doloribus aperiam obcaecati! Repellat,
          dicta, omnis libero ipsum earum assumenda velit doloremque saepe,
          commodi ducimus quidem qui?
        </p>
        <div className="p-4">
          <p className="text-md text-paragraph font-serif text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ipsam eius accusamus soluta ratione excepturi ex quos quisquam
            necessitatibus hic dicta alias voluptas, distinctio illo. Earum
            repudiandae debitis itaque velit.
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
          alt="Bird with Nature"
        />
        <h1 className="text-blue-1000">Bird with nature</h1>
        <div className="p-4">
          <p className="text-md text-paragraph font-serif text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ipsam eius accusamus soluta ratione excepturi ex quos quisquam
            necessitatibus hic dicta alias voluptas, distinctio illo. Earum
            repudiandae debitis itaque velit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
