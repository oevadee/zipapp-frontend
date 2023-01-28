import Head from "next/head";
import React from "react";
import { Layout } from "../layouts";
import { SigninView } from "../views/signin";
import authRoute from "./authRoute";

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

export default authRoute(SigninPage);
