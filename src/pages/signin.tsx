import Head from "next/head";
import React from "react";
import { Layout } from "../layouts";
import { SigninView } from "../views/signin";
import PublicRoute from "./publicRoute";

const SigninPage = () => {
  return (
    <>
      <Head>
        <title>Signin</title>
        <meta name="description" content="Login for zipapp" />
      </Head>
      <Layout>
        <SigninView />
      </Layout>
    </>
  );
};

export default PublicRoute(SigninPage);
