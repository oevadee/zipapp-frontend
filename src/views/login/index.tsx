import React from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

const LoginView = () => {
  return (
    <div>
      <Input label="email" type="email" />
      <Button>Text</Button>
    </div>
  );
};

export default LoginView;
