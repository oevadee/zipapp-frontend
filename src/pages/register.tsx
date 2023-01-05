import Head from "next/head";
import React from "react";
import { Layout } from "../layouts";
import { RegisterView } from "../views/register";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register for zipapp" />
      </Head>
      <Layout>
        <RegisterView />
      </Layout>
    </>
  );
};

export default RegisterPage;
