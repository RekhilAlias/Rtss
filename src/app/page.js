import Layout from "@/components/Layout";
import Style from "./home.module.scss";

export default function Home() {
  return (
    <Layout>
      <div className={Style.homecontainer}>
        <h1>Home page</h1>
      </div>
    </Layout>
  );
}
