function SearchResult({ status, data }) {

  // Error handling
  if (!status && data?.length === 0) {
    return (
      <>
        <div>
          <h1 className="my-2.5 italic">{`No User found`}</h1>
        </div>
      </>
    );
  }
  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default SearchResult;
