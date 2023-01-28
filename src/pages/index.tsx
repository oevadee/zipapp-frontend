import { IndexView } from "../views/index";
import authRoute from "./authRoute";

const IndexPage = () => {
  return <IndexView />;
};

export default authRoute(IndexPage);
