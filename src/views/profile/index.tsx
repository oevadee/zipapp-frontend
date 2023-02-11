import * as React from "react";
import { Button } from "../../components/button";

export const ProfileView = () => {
  const handleLogout = () => {
    localStorage.removeItem("access_token");
  };

  return (
    <div>
      <h1>ProfileView</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
