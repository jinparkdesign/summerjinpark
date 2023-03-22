import Image from "next/image";
import styles from "./../styles/footer.module.css";

const Footer = () => {
  return (
    <div
      className={`${styles.footerContainer} d-flex flex-column justify-content-center align-items-center position-relative`}
    >
      <p>Thank you for your time! Please feel free to contact me.</p>
      <div className="d-flex">
        <a href="#">
          <Image
            src="/../public/LinkedinLogo.png"
            alt="LinkedIn Logo"
            width={32}
            height={32}
          />
        </a>
        <a href="#" className="ms-4">
          <Image
            src="/../public/Envelope.png"
            alt="Email"
            width={32}
            height={32}
          />
        </a>

        <div
          className={`${styles.backToTop} d-flex flex-column align-items-center `}
        >
          <a href="#">
            <Image
              src="/../public/backToTop.png"
              alt="back to top"
              width={48}
              height={48}
            />
          </a>
          <p className="mt-2">Back to top</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
