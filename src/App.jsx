import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";
import Players from "./Players";



const fetchUsers = fetch(`https://jsonplaceholder.typicode.com/users`).then(
  (res) => res.json()
);

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Players></Players>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>
    </>
  );
}

export default App;
