import React, { useState, useEffect } from "react";

const UserInput = ({ addUserHandler, userSelected }) => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const { userName, password, email } = userData;

  useEffect(() => {
    if (userSelected) {
      setUserData(userSelected);
    }
  }, [userSelected]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    addUserHandler({
      ...userData,
      ...(userSelected ? {} : { id: Date.now() }),
    });

    setUserData({
      userName: "",
      password: "",
      email: "",
    });
  };

  const onChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>MY CRUD APP</h1>
      <form className="form" onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={onChangeHandler}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
          placeholder="Password"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
          placeholder="Email"
        />
        <button type="submit"> Add</button>
      </form>
    </div>
  );
};

export default UserInput;
