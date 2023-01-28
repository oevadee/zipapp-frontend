import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schema";

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
};

export const SigninView = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (values) => {
    console.log(values);
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
        />
        <Input
          label="password"
          type="password"
          register={register}
          name="password"
          placeholder="Insert password here"
        />
        <SButtonsWrapper>
          <Button type="button" secondary href="/signup">
            Register
          </Button>
          <Button>Submit</Button>
        </SButtonsWrapper>
      </form>
    </SWrapper>
  );
};
