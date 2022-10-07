import Head from "next/head";
import Link from "next/link";
import Tool from "/components/Tool/Tool";
import Layout from "/components/Layout/Layout";
import { toolsData } from "/utils/data/toolsData";

const FirstPost = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Front-End</title>
        </Head>

        <h1>Popular Front-End Development Tools</h1>
        <br />
        {toolsData.map((tool, index) => (
          <Tool key={index} {...tool} />
        ))}
        <h2>
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
};

export default FirstPost;
