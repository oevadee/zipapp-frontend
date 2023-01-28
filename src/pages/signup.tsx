import Head from "next/head";
import React from "react";
import { Layout } from "../layouts";
import { SignupView } from "../views/signup";

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>Signup</title>
        <meta name="description" content="Register for zipapp" />
      </Head>
      <Layout>
        <SignupView />
      </Layout>
    </>
  );
};

export default SignupPage;
