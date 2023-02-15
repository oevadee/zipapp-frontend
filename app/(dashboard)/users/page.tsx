"use client";

import axios from "axios";
import React from "react";
import { User } from "../../types/user";

const UsersPage = () => {
  const [users, setUsers] = React.useState<User[] | null>(null);

  React.useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      axios("http://localhost:3000/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(({ data }) => setUsers(data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <>
      <h1>Users Page</h1>
      <ul>
        {users?.map(({ _id, email }) => (
          <li key={_id}>
            <div>
              <p>id: {_id}</p>
              <p>email: {email}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
