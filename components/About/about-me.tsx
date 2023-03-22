import Image from "next/image";
import styles from "../../styles/aboutMe.module.css";

const AboutMe = () => {
  return (
    <div>
      <h2 className={styles.header}>About Me</h2>

      <div>
        <div className="row">
          <div className="col-md-3">
            <Image
              src="/../public/profile.png"
              alt="Jin Park"
              fill
              className="image"
            />

            <div className="d-flex align-items-center mt-4">
              <Image
                src="/../public/Envelope.png"
                alt="Email"
                width={24}
                height={24}
                className="me-4"
              />

              <a href="mailto:jinizzuru@gmail.com" className={styles.emailText}>
                jinizzuru@gmail.com
              </a>
            </div>

            <div className="d-flex align-items-center mt-3">
              <Image
                src="/../public/MapPin.png"
                alt="Email"
                width={24}
                height={24}
                className="me-4"
              />

              <span className={styles.emailText}>Toronto, Canada</span>
            </div>
          </div>

          <div className={`col-md-9 ${styles.aboutContainer}`}>
            <p className={styles.aboutText}>
              👋 Hello and welcome! My name is Summer Park. I am a passionate
              visual product designer dedicated to creating products that people
              will absolutely love!
            </p>
            <br />
            <p className={styles.aboutText}>
              With 2 years of experience in product design and 4 years in
              graphic design, I bring a unique skill set that combines beautiful
              visuals with effective products.
            </p>
            <br />

            <p className={styles.aboutText}>
              My approach to design is centered around the user. I believe that
              design should not only be aesthetically pleasing but should also
              enhance the user experience. By considering the user's needs and
              preferences, I strive to create designs that are both beautiful
              and functional.
            </p>
            <br />

            <p className={styles.aboutText}>
              Thank you for taking the time to learn more about me and my work.
              I am excited to collaborate with you and bring your design vision
              to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
