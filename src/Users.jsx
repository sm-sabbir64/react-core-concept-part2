import { use } from "react";

export default function Users({ fetchUsers }) {
    const users = use(fetchUsers)
    console.log(users);
    
  return (
    <div className="card">
      <p className="font">User: {users.length} </p>
    </div>
  );
}
