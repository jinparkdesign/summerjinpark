import Footer from "@/components/footer";
import Header from "@/components/header";
import MainHeader from "@/components/main-header";
import Projects from "@/components/projects";
import { getAllProjects } from "@/lib/projects";
import styles from "../../styles/Home.module.css";

const HomePage = () => {
  // TODO: fetch project data from somewhere
  const allProjects = getAllProjects();

  return (
    <>
      <Header activePage="home" />
      <MainHeader />

      <div className="row mb-3" id="work">
        <h3 className={`${styles.featuredProjectHeader} fs-6  mb-0`}>
          Featured Projects
        </h3>
      </div>

      {allProjects.map((project, i) => {
        const isLast = i === allProjects.length;
        return (
          <div className={isLast ? "" : styles.projectContainer} key={i}>
            <Projects {...project} />
          </div>
        );
      })}

      <div className="mt-122">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
