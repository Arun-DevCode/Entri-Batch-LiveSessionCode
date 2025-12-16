function Products() {
  //   const products = [
  //     { name: "Laptop", Price: 21000 },
  //     { name: "Mobile", Price: 2500 },
  //     { name: "Travel Back Bag", Price: 4999 },
  //   ];
  //   const value = products.forEach((product) => {
  //     return product.Price * 2;
  //   });
  //   console.log(value)

  const users = [
    {
      name: "Banu",
      role: "Developer",
      experience: [
        {
          organizationName: "Company Name 1",
          period: "1 Year",
          Skills: ["React JS", "Tailwindcss", "HTML & CSS", "Bootstrap"],
        },
      ],
    },
    {
      name: "Gopinath",
      role: "Project Manager",
      experience: [
        {
          organizationName: "Company Name 1",
          period: "1 Year",
          Skills: ["React JS", "Tailwindcss", "HTML & CSS", "Bootstrap"],
        },
      ],
    },
    {
      name: "Kaviya",
      role: "Team Lead",
      experience: [
        {
          organizationName: "Company Name 1",
          period: "1 Year",
          Skills: ["React JS", "Tailwindcss", "HTML & CSS", "Bootstrap"],
        },
      ],
    },
  ];

  console.table(users);
  return (
    <div>
      <h1>Product Details:</h1>
      <div id="product-list">
        {/* Users Data */}
        {users.map((user, index) => {
          return (
            <div className="shadow bg-gray-100" key={index}>
              <h3>{user.name}</h3>
              <p>{user.role}</p>
              <ul>
                {user.experience.map((details, DetailsInndex) => (
                  <div key={DetailsInndex}>
                    <li>{details.organizationName}</li>
                    <li>{details.period}</li>
                  </div>
                ))}
              </ul>
              <div>
                <h2>SkillS : </h2>
                <ul>
                  {user.experience.map((details, DetailsInndex) => {
                    return (
                      <>
                        {details.Skills.map((Skill, SKillIndex) => {
                          return <li key={SKillIndex}>{Skill}</li>;
                        })}
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
