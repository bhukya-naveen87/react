import React, { useState } from "react";

const Version_18 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    alert(username + password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };
  return (
    <div className="left_notes">
      Version: 18
      <hr />
      <div className="form__box">
        <form onSubmit={login}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <br />

          <div>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="text"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Version_18;
