import { NextComponentType } from "next";
import { useRouter } from "next/navigation";
import * as React from "react";

const authRoute = (Component: NextComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const [user, setUser] = React.useState(null);
    const [authenticated, setAuthenticated] = React.useState(false);
    React.useEffect(() => {
      const checkToken = async () => {
        const token = localStorage.getItem("access_token");

        if (!token) {
          router.replace("/signin");
        } else {
          console.log(token);

          //   const response: any = await findUser(JSON.parse(token));
          //   if (!response.ok) {
          //     localStorage.removeItem("token");
          //     router.replace("/");
          //   } else {
          //     const userData = await response.json();
          //     if (!userData.currentUser) {
          //       router.replace("/");
          //       localStorage.removeItem("token");
          //     } else {
          //       setUser(userData.currentUser);
          //       setAuthenticated(true);
          //     }
          //   }
        }
      };
      checkToken();
    }, []);

    if (authenticated) {
      return <Component {...props} />;
    } else {
    }
  };
};
export default authRoute;
