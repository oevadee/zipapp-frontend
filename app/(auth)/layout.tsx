"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import styled from "styled-components";
import { publicRoutes } from "../constants/routes";
import { validateAccessToken } from "../utils/jwt";

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
      console.log("Auth No token");
      if (!publicRoutes.includes(window.location.href)) {
        console.log("Auth no url in public routes -> navigate to: /signin");
        replace("/signin");
      }
    } else {
      const isValid = validateAccessToken(token);
      console.log(`Auth isValid: ${isValid}`);
      if (isValid) {
        setAuthenticated(true);
        if (publicRoutes.includes(window.location.href)) {
          replace("/");
        }
      }
    }
  }, []);

  if (!authenticated) {
    return <SWrapper>{children}</SWrapper>;
  }
};

export default AuthLayout;
