import { getProjectThumbnail } from "@/lib/projectImages";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/projectDetail.module.css";

const MoreProject = (project: Project) => {
  const { title, id, route } = project;

  return (
    <Link href={route} className="text-decoration-none">
      <div className={styles.moreProjectContainer}>
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <p className={`mb-0 ${styles.improvementSectionSubHeader}`}>
              {title}
            </p>
          </div>
          <div className="col-md-6">
            <Image
              className="image"
              src={getProjectThumbnail(id)}
              alt={id}
              fill
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MoreProject;
