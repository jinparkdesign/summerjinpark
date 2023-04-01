import { getProjectMain } from "@/lib/projectImages";
import Image from "next/image";
import styles from "../../styles/projectDetail.module.css";

const ProjectHeader = (project: Project) => {
  const {
    id,
    title,
    description,
    startYear,
    endYear,
    tags,
    thumbnail,
    role,
    team,
    duration,
    tool,
  } = project;

  return (
    <div className={styles.projectHeaderContainer}>
      <h1 className={styles.header}>{title}</h1>
      <div className={`${styles.durationContainer} fs-5 me-4`}>
        <span>{startYear}</span>
        <span> - </span>
        <span>{endYear}</span>
      </div>

      <Image className="image" src={getProjectMain(id)} alt={id} fill />

      <div className="mt-4">
        <div className="row">
          <div className="col-md-3">
            <h3 className={styles.projectDetailHeader}>My Role</h3>
            {role.map((r, i) => (
              <p key={i} className="mb-1">
                {r}
              </p>
            ))}
          </div>
          <div className="col-md-3">
            <h3 className={styles.projectDetailHeader}>Team</h3>
            {team.map((team, i) => (
              <p key={i} className="mb-1">
                {team}
              </p>
            ))}
          </div>
          <div className="col-md-3">
            <h3 className={styles.projectDetailHeader}>Duration</h3>
            <p>{duration}</p>
          </div>
          <div className="col-md-3">
            <h3 className={styles.projectDetailHeader}>Tool</h3>
            <p>{tool}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
