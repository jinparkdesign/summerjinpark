import styles from "../../styles/aboutMe.module.css";

const Achievement = () => {
  return (
    <div className={styles.achievementContainer}>
      <div className="row gx-5">
        <div className="col-md-6">
          <h2 className={styles.header}>My Achievements</h2>
          <ul className={styles.achievementList}>
            <li>
              Received President's Honour List with the grade of GPA 4.0 in
              college
            </li>
            <li>
              Won Best Designer’s Award in the field of product design at work
            </li>
            <li>
              Reached Social Media Followers 60k+ in Tiktok, 20k+ in Instagram
            </li>
            <li>Launched Android app and reached10k+ download organically</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className={styles.header}>When Not At Work</h2>
          <p>
            When I am not working, I enjoy creating cute digital contents like
            cat animations and cartoons. I also love painting!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
