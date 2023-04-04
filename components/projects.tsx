import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/project.module.css";
import ArrowRight from "@/public/ArrowRight.png";
import { getProjectThumbnail } from "@/lib/projectImages";

const Projects = (project: Project) => {
  const { id, title, description, startYear, endYear, tags, route } = project;

  return (
    <div className={`${styles.projectContainer} ${styles[id]}`}>
      <div className="row">
        <div className="col-lg-8">
          <div
            className={`d-flex align-items-center ${styles.yearTagContainer}`}
          >
            <div className={`${styles.durationContainer} fs-5 me-4`}>
              <span>{startYear}</span>
              <span> - </span>
              <span>{endYear}</span>
            </div>

            <div className={styles.tagContainer}>
              {tags.map((tag, i) => {
                const isLast = i === tags.length;

                return (
                  <span
                    className={isLast ? styles.tag : `${styles.tag} me-2`}
                    key={i}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
          <div className={styles.tagContainerMobile}>
            {tags.map((tag, i) => {
              const isLast = i === tags.length;

              return (
                <div
                  className={isLast ? styles.tag : `${styles.tag} me-2`}
                  key={i}
                >
                  {tag}
                </div>
              );
            })}
          </div>
          <h1 className={styles.projectTitle}>{title}</h1>
          <h3 className="mt-3 fs-6">{description}</h3>

          <div className={styles.ctaContainer}>
            <Link href={route} className="text-decoration-none">
              <button
                type="button"
                className={`cta btn btn-dark mt-5 align-items-center d-flex`}
              >
                <span className="me-2">View more</span>
                <Image
                  src={ArrowRight}
                  alt="arrow right"
                  width={24}
                  height={24}
                />
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`col-lg-4 justify-content-end d-flex position-relative ${styles.thumbnailContainer}`}
        >
          <Image
            className="image"
            src={getProjectThumbnail(id)}
            alt={id}
            fill
          />
        </div>

        <div className={styles.thumbnailContainerMobile}>
          <Image
            className="image"
            src={getProjectThumbnail(id)}
            alt={id}
            fill
          />
          <Link href={route} className="text-decoration-none">
            <button
              type="button"
              className={`cta btn btn-dark mt-5 align-items-center d-flex`}
            >
              <span className="me-2">View more</span>
              <Image
                src={ArrowRight}
                alt="arrow right"
                width={24}
                height={24}
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
