import Image from "next/image";
import styles from "../../styles/aboutMe.module.css";
import Envelope from "@/public/Envelope.png";
import profile from "@/public/profile.png";
import MapPin from "@/public/MapPin.png";

const AboutMe = () => {
  return (
    <div className="mt-5 container">
      <h2 className={styles.header}>About Me</h2>

      <div>
        <div className="row">
          <div className="col-md-3">
            <Image
              src={profile}
              alt="Jin Park"
              fill
              className={`image ${styles.profilePic}`}
            />

            <div className="d-flex align-items-center mt-4">
              <Image
                src={Envelope}
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
                src={MapPin}
                alt="Email"
                width={24}
                height={24}
                className="me-4"
              />

              <span className={styles.emailText}>New York</span>
            </div>
          </div>

          <div className={`col-md-9 ${styles.aboutContainer}`}>
            <p className={styles.aboutText}>
            Hi there! I’m a Social Media Marketer & Visual Designer who loves creating eye-catching visuals and engaging content. 🎨📱
            </p>
            <p className={styles.aboutText}>
            From social media strategy to design, I enjoy bringing brands to life with unique storytelling and creative visuals. I specialize in content creation, trend analysis, and branding, making sure each piece resonates with the audience in a fun and meaningful way.
            </p>

            <p className={styles.aboutText}>
            I also create various animations and comics featuring my character, Miuu, developing original content and character IPs along the way. My goal is to blend design and marketing to craft visually appealing and impactful content.
            </p>

            <p className={styles.aboutText}>
            📩 Let’s connect and create something amazing together! 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
