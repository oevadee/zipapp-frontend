import * as React from "react";
import { NextComponentType } from "next";
import { useRouter } from "next/navigation";
import { protectedRoutes, publicRoutes } from "../constants/routes";

const AuthRoute = (Component: NextComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const [authenticated, setAuthenticated] = React.useState(false);

    React.useEffect(() => {
      const token = localStorage.getItem("access_token");

      if (!token && protectedRoutes.includes(window.location.href)) {
        router.replace("/signin");
      } else {
        setAuthenticated(true);
        if (publicRoutes.includes(window.location.href)) {
          router.replace("/");
        }
      }
    }, []);

    if (authenticated) {
      return <Component {...props} />;
    } else {
      return null;
    }
  };
};

export default AuthRoute;
