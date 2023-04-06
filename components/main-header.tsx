import Image from "next/image";
import styles from "./../styles/Home.module.css";
import main from "@/public/main.png";
import Link from "next/link";

const MainHeader = () => {
  return (
    <>
      <div
        className={`${styles.mainHeaderContainer} d-flex flex-column align-items-center`}
      >
        {/* FULL WIDTH IMAGE */}
        <div className={`w-100 mt-4 ${styles.mainImageContainer}`}>
          <Image
            className={`image ${styles.mainImage}`}
            src={main}
            alt={"Hi there, I am Summer Park"}
            fill
          />
        </div>
        <p className={`mt-4 text-center fs-5 ${styles.mainDescription}`}>
          I am a <span className="fw-bold ">visual product designer</span> with
          a passion for creating products that people will absolutely love. With
          2 years of experience in UX/UI design and 4 years in graphic design, I
          bring a unique skill set that combines beautiful visuals with
          effective products.{" "}
          <Link className={styles.moreLink} href={"about"}>
            More about me
          </Link>
        </p>
      </div>
    </>
  );
};

export default MainHeader;
