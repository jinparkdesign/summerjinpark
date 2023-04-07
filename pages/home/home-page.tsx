import Footer from "@/components/footer";
import Header from "@/components/header";
import MainHeader from "@/components/main-header";
import VisualProjects from "@/components/Project/visual-project";
import Projects from "@/components/projects";
import { getAllProjects, getAllVisualProjects } from "@/lib/projects";
import styles from "../../styles/Home.module.css";

const HomePage = () => {
  const allProjects = getAllProjects();
  const allVisualProjects = getAllVisualProjects();

  return (
    <>
      <Header activePage="home" />
      <MainHeader />

      <div className="row mb-3" id="work">
        <h3 className={`${styles.featuredProjectHeader} fs-6  mb-0`}>
          Featured UX/UI Projects
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

      <div className="row mb-3" id="visual">
        <h3 className={`${styles.featuredProjectHeader} fs-6  mb-0`}>
          Featured Visual Projects (Under Construction)
        </h3>
      </div>

      <div className="row">
        {allVisualProjects.map((project, i) => {
          return <VisualProjects {...project} key={i} />;
        })}
      </div>

      <div className="mt-122">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
