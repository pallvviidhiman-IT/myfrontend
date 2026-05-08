import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

function addUser() {
 fetch("http://localhost:5000/users", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({ name: name })
 })
 .then((res) => res.json())
 .then(() => {
 getUsers(); // Refresh the list
 setName(""); // Clear the input
 });
}

return (
 <div>
 <h1>User App</h1>
 <input
 value={name}
 placeholder="Enter Name"
 onChange={(e) => setName(e.target.value)}
 />
 <button onClick={addUser}>Add User</button>
 {users.map((user) => (
 <h2 key={user._id}>{user.name}</h2>
 ))}
 </div>
);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <h2 key={user._id}>{user.name}</h2>
      ))}
    </div>
  );
}

export default App;