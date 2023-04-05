import useWindowSize from "@/hooks/useWindowSize";
import { getProjectThumbnail } from "@/lib/projectImages";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/projectDetail.module.css";

const MoreProject = (project: Project) => {
  const { title, id, route } = project;

  const size = useWindowSize();

  return (
    <Link href={route} className={`text-decoration-none `}>
      <div
        className={`${size.width > 576 ? "" : "mt-4"} ${
          styles.moreProjectContainer
        }`}
      >
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <p className={`mb-0 ${styles.improvementSectionSubHeader}`}>
              {title}
            </p>
          </div>
          <div className={`col-md-6 ${size.width > 576 ? "" : "mt-4"}`}>
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
