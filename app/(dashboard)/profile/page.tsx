"use client";

import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/button";
import Card from "../../components/card";
import { Input } from "../../components/input";
import { useUser } from "../../context/user";
import { appUrl } from "../../constants";

type FormData = {
  email: string;
};

const ProfilePage = () => {
  const { user } = useUser();
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: user?.email,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async ({ email }) => {
    try {
      const token = localStorage.getItem("access_token");
      if (token) {
        const { data } = await axios.patch(
          `${appUrl}/users/${user?._id}`,
          { email },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return data;
      }
      throw new Error();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>Profile Page</h1>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name="email" label="Email" register={register} textDark />
          <Button>Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default ProfilePage;
