import Profile from "./Profile";

export default function UserData() {
  const username = "Gopalakrishnan";

  if (username) {
    return <Profile name={username} />;
  } else {
    <Profile name={"Guest User"} />;
  }
  return (
    <>
      {username === undefined || username === null ? (
        <Profile name={"Guest User"} />
      ) : (
        <Profile name={username} />
      )}
    </>
  );
}
