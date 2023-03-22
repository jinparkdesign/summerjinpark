import styles from "../../styles/aboutMe.module.css";
import Image from "next/image";

const DesignJourney = () => {
  return (
    <div className={styles.designJourneyContainer}>
      <h2 className={styles.header}>My Design Journey</h2>

      <div className="row">
        <Image
          className="image"
          src={`/../public/design-journey.png`}
          alt="Flight Centre Travel Group"
          fill
        />
      </div>

      <button
        type="button"
        className="cta btn btn-dark mt-5 align-items-center d-flex "
      >
        <span className="me-2">Download Resume (PDF)</span>
      </button>
    </div>
  );
};

export default DesignJourney;
