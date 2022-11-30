import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddUser from "./AddUser";
import UserList from "./UserList";

function App() {
  const LOCAL_STORAGE_KEY = "users";
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addUserHandler = (user) => {
    console.log(user);
    setUsers([...users, { id: uuid(), ...user }]);
  };

  const removeUserHandler = (id) => {
    const newUserList = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(newUserList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <Header />
      <AddUser addUserHandler={addUserHandler} />
      <UserList users={users} getUserId={removeUserHandler} />
    </div>
  );
}

export default App;
