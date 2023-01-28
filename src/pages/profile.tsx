import Head from "next/head";
import React from "react";
import { Layout } from "../layouts";
import { ProfileView } from "../views/profile";
import authRoute from "./authRoute";

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>ProfilePage</title>
        <meta name="description" content="Check your profile" />
      </Head>
      <Layout>
        <ProfileView />
      </Layout>
    </>
  );
};

export default authRoute(ProfilePage);
