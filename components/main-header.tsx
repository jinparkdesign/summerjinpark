import Image from "next/image";
import styles from "./../styles/Home.module.css";
import main from "@/public/main.png";

const MainHeader = () => {
  return (
    <>
      <div
        className={`${styles.mainHeaderContainer} d-flex flex-column align-items-center`}
      >
        <Image src={main} alt="" width={500} height={187} />
        <p className="mt-4 w-75 text-center fs-5">
          I am a <span className="fw-bold ">visual product designer</span> with
          a passion for creating products that people will absolutely love. With
          2 years of experience in UX/UI design and 4 years in graphic design, I
          bring a unique skill set that combines beautiful visuals with
          effective products.
        </p>
      </div>
    </>
  );
};

export default MainHeader;
