import Layout from "@/components/Layout";
import React from "react";
import Styles from "./about.module.scss";

const Page = () => {
  return (
    <Layout>
      <div className={Styles.aboutcontainer}>
        <h1>About</h1>
      </div>
    </Layout>
  );
};

export default Page;
