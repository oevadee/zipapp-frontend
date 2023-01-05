import Head from "next/head";
import React from "react";
import { Layout } from "../layouts";
import { LoginView } from "../views/login";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login for zipapp" />
      </Head>
      <Layout>
        <LoginView />
      </Layout>
    </>
  );
};

export default LoginPage;
