import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Personal Info</title>
        <meta name="description" content="An application to fill out your personal information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl font-bold">Please update this text!</h1>
          <Link href="/apply" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply Now!
          </Link>
        </div>
      </Layout>
    </>

  );
};

export default Home;
