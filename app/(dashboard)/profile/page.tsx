"use client";

import React from "react";
import { useUser } from "../../context/user";

const ProfilePage = () => {
  const { user } = useUser();
  return (
    <>
      <h1>Profile Page</h1>
      {user?.email}
    </>
  );
};

export default ProfilePage;
