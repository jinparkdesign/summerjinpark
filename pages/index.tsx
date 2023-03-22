import Head from "next/head";
import Image from "next/image";
import { Public_Sans } from "next/font/google";
import HomePage from "./home/home-page";
import Layout from "@/components/layout";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Summer Park</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={publicSans.className}>
        <Layout>
          <HomePage />
        </Layout>
      </main>
    </>
  );
}
