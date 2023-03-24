import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/project.module.css";

const Projects = (project: Project) => {
  const { id, title, description, startYear, endYear, tags, route } = project;

  return (
    <div className={`${styles.projectContainer} ${styles[id]}`}>
      <div className="row">
        <div className="col-lg-8">
          <div className="d-flex mb-5 align-items-center">
            <div className={`${styles.durationContainer} fs-5 me-4`}>
              <span>{startYear}</span>
              <span> - </span>
              <span>{endYear}</span>
            </div>

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
          <h1 className={styles.projectTitle}>{title}</h1>
          <h3 className="mt-3 fs-6">{description}</h3>
          <Link href={route} className="text-decoration-none">
            <button
              type="button"
              className={`cta btn btn-dark mt-5 align-items-center d-flex`}
            >
              <span className="me-2">View more</span>
              <Image
                src="/../public/ArrowRight.png"
                alt="arrow right"
                width={24}
                height={24}
              />
            </button>
          </Link>
        </div>
        <div className="col-lg-4 justify-content-end d-flex position-relative">
          <Image
            className="image"
            src={`/../public/${id}-thumbnail.png`}
            alt={id}
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
