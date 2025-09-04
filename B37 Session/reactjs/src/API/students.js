async function getAllStudents() {
  const response = await fetch(
    "https://68b8648bb715405043281a5e.mockapi.io/students"
  );
  const data = await response.json();
  return data;
}

export default getAllStudents;
