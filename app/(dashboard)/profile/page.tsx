"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../../components/button";

const ProfilePage = () => {
  const { push } = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    push("/signin");
  };

  return (
    <>
      <h1>Profile Page</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default ProfilePage;
