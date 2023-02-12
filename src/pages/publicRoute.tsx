import * as React from "react";
import { NextComponentType } from "next";
import { useRouter } from "next/navigation";
import { protectedRoutes, publicRoutes } from "../constants/routes";

const PublicRoute = (Component: NextComponentType) => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("access_token");

      if (token) {
        setAuthenticated(true);
        if (publicRoutes.includes(window.location.href)) {
          router.replace("/");
        }
      } else if (protectedRoutes.includes(window.location.href)) {
        router.replace("/signin");
      }
    };
    checkToken();
  }, []);

  if (!authenticated) {
    return <Component />;
  } else {
    return null;
  }
};

export default PublicRoute;
