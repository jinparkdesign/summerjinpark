import Image from "next/image";
import styles from "../../styles/project.module.css";

const ProjectHeader = (project: Project) => {
  const { id, title, description, startYear, endYear, tags, thumbnail } =
    project;

  return (
    <div>
      <div className={`${styles.durationContainer} fs-5 me-4`}>
        <span>{startYear}</span>
        <span> - </span>
        <span>{endYear}</span>
      </div>
    </div>
  );
};

export default ProjectHeader;
