import { useRouter } from "next/router";
import * as React from "react";
import { Button } from "../../components/button";

export const ProfileView = () => {
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
