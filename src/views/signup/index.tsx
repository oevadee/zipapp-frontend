import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { signupSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

const SWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignupView = () => {
  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<FormData> = ({
    email,
    password,
    confirmPassword,
  }) => {
    if (password === confirmPassword && email) {
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
          required
        />
        <Input
          label="password"
          type="password"
          register={register}
          name="password"
          placeholder="Insert password here"
          required
        />
        <Input
          label="Confirm password"
          type="password"
          register={register}
          name="confirmPassword"
          placeholder="Confirm password here"
          required
        />
        <SButtonsWrapper>
          <Button type="button" secondary href="/signin">
            Login
          </Button>
          <Button>Submit</Button>
        </SButtonsWrapper>
      </form>
    </SWrapper>
  );
};
