import React from "react";
import { useState, useEffect } from "react";
import UserInput from "./componnents/UserInput";
import UserList from "./componnents/UserList";
import "./index.css";

function App() {
  const [userSelected, setUserSelected] = useState(null);
  const [userData, setUserData] = useState(() => {
    const storedData = localStorage.getItem("users");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userData));
  }, [userData]);

  const addUserHandler = (user) => {
    const userIndex = userData.findIndex((u) => u.id === user.id);
    if (userIndex !== -1) {
      setUserData((prevUsers) => {
        prevUsers[userIndex] = user;
        return prevUsers;
      });
      setUserSelected(null);
      return;
    }
    setUserData((prev) => {
      return [user, ...prev];
    });
  };

  const deleteUserHandler = (id) => {
    setUserData((prev) => prev.filter((user) => user.id !== id));
  };

  const editUserHandler = (id) => {
    setUserSelected(userData.find((user) => user.id == id));
  };

  return (
    <div className="App">
      <UserInput addUserHandler={addUserHandler} userSelected={userSelected} />
      <UserList
        userData={userData}
        deleteUserHandler={deleteUserHandler}
        editUserHandler={editUserHandler}
      />
    </div>
  );
}

export default App;
