import { IndexView } from "../views/index";
import AuthRoute from "./authRoute";

const IndexPage = () => {
  return <IndexView />;
};

export default AuthRoute(IndexPage);
