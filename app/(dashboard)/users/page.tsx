"use client";

import axios from "axios";
import React from "react";
import styled from "styled-components";
import { User } from "../../types/user";
import { UsersList } from "./components/users-list";
import { backendUrl } from "../../constants";

const SHeading = styled.h1`
  margin-bottom: 1rem;
`;

const UsersPage = () => {
  const [users, setUsers] = React.useState<User[] | null>(null);

  React.useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      axios(`${backendUrl}/users`, {
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
      <SHeading>Users Page</SHeading>
      <UsersList users={users} />
    </>
  );
};

export default UsersPage;
