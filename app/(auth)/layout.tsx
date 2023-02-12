"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { protectedRoutes, publicRoutes } from "../constants/routes";

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
    console.log(authenticated);
    // if (publicRoutes.includes(window.location.href)) {
    //   replace("/");
    // }
  }, []);

  if (!authenticated) {
    return children;
  }
};

export default AuthLayout;
