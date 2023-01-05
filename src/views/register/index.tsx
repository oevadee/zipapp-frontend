import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { registerSchema } from "./schema";
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

export const RegisterView = () => {
  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (values) => {
    console.log(values.email);
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
          <Button type="button" secondary href="/login">
            Login
          </Button>
          <Button>Submit</Button>
        </SButtonsWrapper>
      </form>
    </SWrapper>
  );
};
