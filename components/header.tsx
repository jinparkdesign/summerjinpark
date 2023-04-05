import Link from "next/link";
import styles from "./../styles/header.module.css";
import mobileMenu from "@/public/mobile-menu.png";
import Image from "next/image";

const Header = ({ activePage }: { activePage: string }) => {
  return (
    <nav
      className={`navbar sticky-top navbar-expand-md navbar-light ${styles.navContainer}`}
    >
      <div className="container-fluid ps-0">
        <Link className="navbar-brand" href="/">
          <span className={styles.mainLogo}>Summer Park</span>
        </Link>
        <button
          className="navbar-toggler border-0 transition-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Image src={mobileMenu} alt={"mobileMenu"} width={32} height={32} />
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link
            className={`nav-link ${styles.navItem} ${
              activePage === "home" ? styles.activeNavItem : ""
            } `}
            aria-current="page"
            href="/"
          >
            Home
          </Link>
          {activePage === "home" ? (
            <a className={`nav-link ${styles.navItem}`} href="#work">
              Work
            </a>
          ) : (
            <Link
              className={`nav-link ${styles.navItem} ${
                activePage === "home" ? styles.activeNavItem : ""
              } `}
              aria-current="page"
              href="/#work"
            >
              Work
            </Link>
          )}

          <Link
            className={`nav-link ${styles.navItem} ${
              activePage === "about" ? styles.activeNavItem : ""
            }`}
            href="/about"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
