import styles from "../../styles/aboutMe.module.css";

const Achievement = () => {
  return (
    <div className={`cotainer ${styles.achievementContainer}`}>
      <div className="row gx-5">
        <div className="col-md-12">
          <h2 className={styles.header}>My Achievements</h2>
          <ul className={styles.achievementList}>
          <li><strong>Instagram Growth:</strong> Managed and grew @Miuustudio to <strong>228K+</strong> followers on Instagram, with a top post reaching <strong>12M</strong> views</li>
          <li><strong>YouTube Channel:</strong> Ran a successful YouTube channel, accumulating <strong>15K+</strong> subscribers, with the highest-viewed video reaching <strong>1.3M</strong> views.</li>
          <li><strong>Launched Miuu Note App:</strong> Successfully launched Android app, Miuu Note, which achieved <strong>1.5M+</strong> organic downloads</li>
          <li><strong>Best Designer’s Award:</strong> Awarded Best Designer’s Award in product design at work, recognizing excellence in design</li>
            <li>
              Received President's Honour List with the grade of GPA 4.0 in
              college
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
