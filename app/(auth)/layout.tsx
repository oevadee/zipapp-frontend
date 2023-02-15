"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import styled from "styled-components";
import { publicRoutes } from "../constants/routes";

const SWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  const { replace } = useRouter();
  const [authenticated, setAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      if (!publicRoutes.includes(window.location.href)) {
        replace("/signin");
      }
    } else {
      setAuthenticated(true);
      if (publicRoutes.includes(window.location.href)) {
        replace("/");
      }
    }
  }, []);

  if (!authenticated) {
    return <SWrapper>{children}</SWrapper>;
  }
};

export default AuthLayout;
