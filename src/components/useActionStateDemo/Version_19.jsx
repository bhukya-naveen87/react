import React, { useState } from "react";
import { useActionData } from "react-router-dom";

const Version_19 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

//   const [data, ]
    const myData = useActionData();
    console.log(myData)

  const login = (e) => {
    e.preventDefault();
    alert(username + password);
  };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "username") setUsername(value);
//     if (name === "password") setPassword(value);
//   };
  return (
    <div className="right_notes">
      Version: 19
      <hr />
      <div className="form__box">
        <form action={login}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              type="text"
              name="username"
            //   value={username}
            //   onChange={handleChange}
            />
          </div>
          <br />

          <div>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="text"
              name="password"
            //   value={password}
            //   onChange={handleChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Version_19;
