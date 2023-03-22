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

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Summer Park</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={publicSans.className}>
        <Layout>
          <Header activePage="about" />

          <AboutMe />
          <DesignJourney />

          <Achievement />

          <Footer />
        </Layout>
      </main>
    </>
  );
};

export default AboutPage;
