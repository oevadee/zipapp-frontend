"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { protectedRoutes, publicRoutes } from "../constants/routes";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  const { replace } = useRouter();
  const [authenticated, setAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      setAuthenticated(true);
      if (publicRoutes.includes(window.location.href)) {
        replace("/");
      }
    } else {
      replace("/signin");
    }
  }, []);

  React.useEffect(() => console.log(authenticated), [authenticated]);

  if (authenticated) {
    return children;
  }
};

export default DashboardLayout;
