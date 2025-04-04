import Image from "next/image";
import styles from "../../styles/visualProject.module.css";
import { getProjectThumbnail } from "@/lib/projectImages";
import { useRouter } from 'next/router';

const VisualProjects = (project: Project) => {
  const { id, title, description, startYear, endYear, tags, route } = project;
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div onClick={handleClick} className={`col-lg-4 col-md-6 portfolio ${styles.portfolio}`}>
      <div className={`${styles.portfolioWrap}`}>
        <Image
          className="image"
          src={getProjectThumbnail(id)}
          alt={description}
          fill
        />
        <div className={`${styles.portfolioInfo}`}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default VisualProjects;
