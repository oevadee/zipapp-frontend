"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema } from "./schema";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "../../../../components/input";
import { Button } from "../../../../components/button";
import { useUser } from "../../../../context/user";
import { decodeJwtToken } from "../../../../utils/decodeJwtToken";
import { User } from "../../../../types/user";

const SWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.spaceCadet};
`;

const SButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  gap: 0.5rem;
`;

const SAuthNavigateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: ${({ theme }) => theme.font.size.small};
  gap: 0.25rem;
`;

type FormData = {
  email: string;
  password: string;
};

export const Form = () => {
  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: yupResolver(signinSchema),
  });
  const { push } = useRouter();
  const { setUser } = useUser();

  const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {
    const { data } = await axios.post("http://localhost:3000/auth/signin", {
      email,
      password,
    });

    if (data.access_token) {
      localStorage.setItem("access_token", data.access_token);
      const decoded = decodeJwtToken<User>(data.access_token);
      setUser({
        _id: decoded._id,
        email: decoded.email,
      });
      push("/");
    } else {
      console.log(data);
    }
    reset();
  };

  return (
    <SWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="email"
          type="email"
          register={register}
          name="email"
          placeholder="Insert email here"
          textDark
        />
        <Input
          label="password"
          type="password"
          register={register}
          name="password"
          placeholder="Insert password here"
          textDark
        />
        <SButtonWrapper>
          <SAuthNavigateWrapper>
            <p>Don't have an account yet?</p>
            <Button href="/signup" variant="text" textDark>
              Signup
            </Button>
          </SAuthNavigateWrapper>
          <Button>Submit</Button>
        </SButtonWrapper>
      </form>
    </SWrapper>
  );
};
