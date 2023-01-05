import Head from "next/head";
import { Layout } from "../layouts";
import { IndexView } from "../views/index";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard for zipapp" />
      </Head>
      <Layout>
        <IndexView />
      </Layout>
    </>
  );
};

export default IndexPage;
