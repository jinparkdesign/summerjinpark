import AboutMe from "@/components/About/about-me";
import Achievement from "@/components/About/achievement";
import DesignJourney from "@/components/About/design-journey";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import { Public_Sans } from "next/font/google";
const publicSans = Public_Sans({ subsets: ["latin"] });

const ContentDesignPage = () => {
  return (
    <>
      <Head>
        <title>Summer Park</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <main className={`${publicSans.className} d-flex flex-column min-vh-100 container`}>

          <Header activePage="content-design" />

        <div className="text-center d-flex flex-column align-items-center justify-content-center flex-grow-1">
          <h1 className="">
          This page is currently under construction.  </h1>
          <h1>Stay tuned for awesome content! 🚧</h1>
        </div>
          

          <Footer />
      </main>
    </>
  );
};

export default ContentDesignPage;
