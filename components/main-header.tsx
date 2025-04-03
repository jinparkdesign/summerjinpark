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
        <p className={`mt-4 mb-0 text-center fs-1 ${styles.mainDescription}`}>
          👋 Hi, I'm Summer Park.
        </p>
        <p className={`mt-4 mb-0 text-center fs-1 ${styles.mainDescription}`}>
          I am a <span className="fw-bold ">Social Media Marketer & Designer.</span> I create engaging digital experiences through content, branding, design and storytelling.
        </p>

        <p className={`mt-3 text-center fs-6 ${styles.mainDescription}`}>
          <span className="badge me-1 rounded-pill" style={{ backgroundColor: '#F1F5F9', color: '#64748B' }}>Branding</span>
          <span className="badge me-1 rounded-pill" style={{ backgroundColor: '#F1F5F9', color: '#64748B' }}>Content Creation</span>
          <span className="badge me-1 rounded-pill" style={{ backgroundColor: '#F1F5F9', color: '#64748B' }}>Marketing Strategy</span>
          <span className="badge me-1 rounded-pill" style={{ backgroundColor: '#F1F5F9', color: '#64748B' }}>Visual Design</span>
          <span className="badge me-1 rounded-pill" style={{ backgroundColor: '#F1F5F9', color: '#64748B' }}>UX/UI Design</span>
          <span className="badge me-1 rounded-pill" style={{ backgroundColor: '#F1F5F9', color: '#64748B' }}>Animation</span>
          <span className="badge me-1 rounded-pill" style={{ backgroundColor: '#F1F5F9', color: '#64748B' }}>Social Media Growth</span>
        </p>
           
      </div>
    </>
  );
};

export default MainHeader;
