import { useRouter } from "next/router";
import * as React from "react";
import { Button } from "../../components/button";

const getUser = async () => {
  const response = await fetch("http://localhost:3000/user");
  return response.json();
};

export const ProfileView = async () => {
  const { push } = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    push("/");
  };

  return (
    <div>
      <h1>ProfileView</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
