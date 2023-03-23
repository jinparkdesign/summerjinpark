import Header from "@/components/header";
import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import { Public_Sans } from "next/font/google";
import ProjectHeader from "@/components/Project/project-header";
import { getAllProjects, ProjectId } from "@/lib/projects";
const publicSans = Public_Sans({ subsets: ["latin"] });

const FCMSplitTicketing = () => {
  const allProjects: Array<Project> = getAllProjects();
  const fcmProject = allProjects.find(
    (project) => project.id === ProjectId.FLIGHT_CENTRE
  )!;

  return (
    <>
      <Head>
        <title>Summer Park</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={publicSans.className}>
        <Layout>
          <Header activePage="work" />

          <ProjectHeader {...fcmProject} />
        </Layout>
      </main>
    </>
  );
};

export default FCMSplitTicketing;
