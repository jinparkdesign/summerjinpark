import Head from "next/head";
import Header from "@/components/header";
import { Public_Sans } from "next/font/google";
import Layout from "@/components/layout";
import ProjectHeader from "@/components/Project/project-header";
import { getAllProjects, ProjectId } from "@/lib/projects";
import styles from "../../styles/projectDetail.module.css";
import Image from "next/image";
import numberOne from "@/public/number-1.png";
import numberTwo from "@/public/number-2.png";
import numberThree from "@/public/number-3.png";
import numberFour from "@/public/number-4.png";
import numberFive from "@/public/number-5.png";
import hotelProblemOne from "@/public/hotel-problem-1.png";
import hotelProblemTwo from "@/public/hotel-problem-2.png";
import hotelProblemThree from "@/public/hotel-problem-3.png";
import hotelProblemFour from "@/public/hotel-problem-4.png";
import hotelProblemFive from "@/public/hotel-problem-5.png";
import magnifyingGlass from "@/public/magnifying-glass.png";
import thinkingFace from "@/public/thinking-face.png";
import starIcon from "@/public/star-icon.png";
import hotelUserTesting from "@/public/hotel-user-testing.png";
import checkmark from "@/public/checkmark.png";
import xIcon from "@/public/x-icon.png";
import upside from "@/public/upside.png";
import travelPerk from "@/public/travel-perk.png";
import tripActions from "@/public/trip-actions.png";
import prosIcon from "@/public/pros-icon.png";
import consIcon from "@/public/cons-icon.png";
import hotelCurrentDesign from "@/public/hotel-current-design.png";
import hotelDesignIterations from "@/public/hotel-design-iterations.png";
import hotelImprovement1 from "@/public/hotel-improvement-1.png";
import hotelImprovement2_1 from "@/public/hotel-improvement-2-1.png";
import hotelImprovement2_2 from "@/public/hotel-improvement-2-2.png";
import hotelImprovement3 from "@/public/hotel-improvement-3.png";
import hotelConclusion from "@/public/hotel-conclusion.png";
import militaryMedal from "@/public/military-medal.png";
import MoreProject from "@/components/Project/more-project";
import Footer from "@/components/footer";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function HotelRedesignPage() {
  const allProjects: Array<Project> = getAllProjects();
  const fcmProject = allProjects.find(
    (project) => project.id === ProjectId.FLIGHT_CENTRE
  )!;
  const hotelRedesignProject = allProjects.find(
    (project) => project.id === ProjectId.HOTEL_REDESIGN
  )!;

  const miuuNoteProject = allProjects.find(
    (project) => project.id === ProjectId.MIUU_NOTE
  )!;

  return (
    <>
      <Head>
        <title>Summer Park</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={publicSans.className}>
        <Layout>
          <Header activePage="work" />

          <ProjectHeader {...hotelRedesignProject} />

          <div className={styles.projectDetailContainer}>
            {/* OVERVIEW */}
            <div className="mb-5">
              <h3 className={styles.subHeader}>OVERVIEW</h3>

              <p>
                We want to improve the hotel room shopping experience for
                travelers and arrangers by revamping our hotel room display. Our
                plan is to optimize the way information is displayed on the
                hotel page to help facilitate their decision-making process.
                This will make it easier for them to evaluate their options and
                ultimately choose the best room for their needs.
              </p>
            </div>

            {/* PROBLEM */}
            <div>
              <h3 className={styles.subHeader}>PROBLEM</h3>
              <p className={styles.emphasizedLine}>
                Our hotel rate display needs improvement to help business
                travellers and arrangers quickly evaluate and identify the best
                fare/rate.
              </p>
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* SOLUTION & IMPACT */}
            <div>
              <h3 className={styles.subHeader}>SOLUTION</h3>

              {/* 1. Improved Photo Display */}
              {/* Image & Bullet point component */}
              <div className="row mt-5">
                <div className="col-md-1">
                  <Image
                    className="image"
                    src={numberOne}
                    alt={"number one"}
                    fill
                  />
                </div>
                <div className="col-md-11">
                  <h4 className={styles.subSectionHeader}>
                    Improved Photo Display
                  </h4>
                  <ul className="mt-3">
                    <li className="mb-3">
                      Enlarged the photo section to display 8 images, offering
                      users a more immersive and detailed view of the hotel.
                    </li>
                    <li className="mb-3">
                      Enhanced the overall user experience by allowing
                      travellers and arrangers to make more informed decisions
                      based on the visual representation of the hotel.{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <Image
                  className="image"
                  src={hotelProblemOne}
                  alt={"hotel problem one"}
                  fill
                />
              </div>

              {/* 2. Simplified Hotel Description and Amenity Display */}
              {/* Image & Bullet point component */}
              <div className="row mt-5">
                <div className="col-md-1">
                  <Image
                    className="image"
                    src={numberTwo}
                    alt={"number two"}
                    fill
                  />
                </div>
                <div className="col-md-11">
                  <h4 className={styles.subSectionHeader}>
                    Simplified Hotel Description and Amenity Display
                  </h4>
                  <ul className="mt-3">
                    <li className="mb-3">
                      Made it easier for the users to access hotel description
                      and amenity details by displaying them upfront and
                      eliminating the need for them to navigate to a separate
                      tab to access this information.{" "}
                    </li>
                    <li className="mb-3">
                      Simplified the decision-making process by providing a
                      clear and concise overview of the hotel's features and
                      amenities, enabling users to quickly evaluate and choose
                      the best room for their needs.
                    </li>
                  </ul>
                </div>
              </div>
              {/* FULL WIDTH IMAGE */}
              <div className="col-md-12 mt-4">
                <Image
                  className="image"
                  src={hotelProblemTwo}
                  alt={"hotel problem two"}
                  fill
                />
              </div>

              {/* 3. Compact Hotel Map Display */}
              {/* Image & Bullet point component */}
              <div className="row mt-5">
                <div className="col-md-1">
                  <Image
                    className="image"
                    src={numberThree}
                    alt={"number three"}
                    fill
                  />
                </div>
                <div className="col-md-11">
                  <h4 className={styles.subSectionHeader}>
                    Compact Hotel Map Display
                  </h4>
                  <ul className="mt-3">
                    <li className="mb-3">
                      Reduced the size of the hotel map display significantly,
                      allowing users to focus on other important information on
                      the page.
                    </li>
                    <li className="mb-3">
                      Retained the essential features of the map display such as
                      the hotel location, departure (airport) location, and
                      distance between them.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <Image
                  className="image"
                  src={hotelProblemThree}
                  alt={"hotel problem three"}
                  fill
                />
              </div>

              {/* 4. Simplified UI with Clear Payment and Cancellation Information */}
              {/* Image & Bullet point component */}
              <div className="row mt-5">
                <div className="col-md-1">
                  <Image
                    className="image"
                    src={numberFour}
                    alt={"number Four"}
                    fill
                  />
                </div>
                <div className="col-md-11">
                  <h4 className={styles.subSectionHeader}>
                    Simplified UI with Clear Payment and Cancellation
                    Information
                  </h4>
                  <ul className="mt-3">
                    <li className="mb-3">
                      Reduced clutter in the user interface by removing
                      unnecessary text and making essential information such as
                      cancellation and refund policies more prominent using
                      badges and icons.
                    </li>
                    <li className="mb-3">
                      Improved the user experience by creating a cleaner and
                      more intuitive layout, enabling travellers and arrangers
                      to quickly find and understand the information they need
                      to make informed decisions.
                    </li>
                    <li className="mb-3">
                      Simplified the pricing display, making it easier for users
                      to understand the room rate and any additional charges.{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <Image
                  className="image"
                  src={hotelProblemFour}
                  alt={"hotel problem four"}
                  fill
                />
              </div>

              {/* 5. Improved Room Display with Best Room Options and Room Types */}
              {/* Image & Bullet point component */}
              <div className="row mt-5">
                <div className="col-md-1">
                  <Image
                    className="image"
                    src={numberFive}
                    alt={"number five"}
                    fill
                  />
                </div>
                <div className="col-md-11">
                  <h4 className={styles.subSectionHeader}>
                    Improved Room Display with Best Room Options and Room Types
                  </h4>
                  <ul className="mt-3">
                    <li className="mb-3">
                      Grouped hotel rooms by "best room options" to provide
                      users with the cheapest and most flexible rooms with the
                      best loyalty benefits.{" "}
                    </li>
                    <li className="mb-3">
                      Reorganized the display of hotel rooms by grouping them
                      based on room types instead of bed types.{" "}
                    </li>
                    <li className="mb-3">
                      Improved the overall room display, providing users with
                      multiple ways to view and compare rooms based on their
                      budget, flexibility, and loyalty status.{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <Image
                  className="image"
                  src={hotelProblemFive}
                  alt={"hotel problem five"}
                  fill
                />
              </div>
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* PROCESS | USER TESTING */}
            <div>
              <h3 className={styles.subHeader}>PROCESS | USER TESTING</h3>
              <p className={styles.emphasizedLine}>
                Gathering insights from user testing and clients
              </p>

              <p>
                We conducted an unmoderated test with{" "}
                <span className="fw-bold"> 8 business travellers </span>
                recruited from UserTesting to gather insights about:
              </p>

              <div className={`mb-3 ${styles.designValidationSectionQuote}`}>
                <Image
                  className="me-2"
                  alt="Magnifying Glass"
                  src={magnifyingGlass}
                  width={24}
                  height={24}
                />
                What information do travelers value the most (e.g. room type,
                bed size, price) so that we can design around that?
              </div>

              <div className={`mb-3 ${styles.designValidationSectionQuote}`}>
                <Image
                  className="me-2"
                  alt="Magnifying Glass"
                  src={magnifyingGlass}
                  width={24}
                  height={24}
                />
                What are travelers' priorities when choosing a hotel room?
              </div>

              <div className={`mb-3 ${styles.designValidationSectionQuote}`}>
                <Image
                  className="me-2"
                  alt="Magnifying Glass"
                  src={magnifyingGlass}
                  width={24}
                  height={24}
                />
                What filters are we missing?
              </div>

              {/* Image & Bullet point component */}
              <div className="row mt-5">
                <div className="col-md-2">
                  <Image
                    className="image"
                    src={thinkingFace}
                    alt={"thinkingFace"}
                    fill
                  />
                </div>
                <div className="col-md-10">
                  <h4 className={styles.subSectionHeader}>
                    Our assumptions were..{" "}
                  </h4>
                  <ul className="mt-3">
                    <li className="mb-3">
                      Displaying hotel room rates by bed type does not provide a
                      clear understanding for travelers.
                    </li>
                    <li className="mb-3">
                      Business travellers prioritize the inclusions in a rate
                      such as breakfast, parking, etc., rather than the room or
                      bed type.
                    </li>
                    <li>
                      A cluttered and text-heavy UI can make it difficult for
                      travelers to quickly find the information they need.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="d-flex mt-5">
                <div className={styles.task}>Task</div>

                <p className={styles.taskLabel}>
                  During the test, the testers were instructed to use their
                  favourite website first, then Booking.com, and finally our
                  product.
                </p>
              </div>

              <div className="d-flex align-items-center my-5">
                <Image
                  src={starIcon}
                  alt={"star icon"}
                  width={24}
                  height={24}
                />
                <span className={`${styles.usabilitySubHeader} ms-3`}>
                  Top Finding
                </span>
              </div>

              <p className={styles.subSectionHeader}>
                Factors that were taken into consideration:
              </p>

              {/* FULL WIDTH IMAGE */}
              <div className="col-md-12 mt-3">
                <Image
                  className="image"
                  src={hotelUserTesting}
                  alt={"hotel user testing"}
                  fill
                />
              </div>

              <p className={`text-center mt-5 ${styles.subSectionHeader}`}>
                We also received feedback from clients that “breakfast”,
                “flexibility”, and “payment” are the most important factors
              </p>

              <p className={`${styles.usabilitySubHeader} my-5`}>
                Other Finding
              </p>

              <p className={styles.improvementSectionSubHeader}>
                Use better title
              </p>

              <div className="row">
                <div className="col-md-4">
                  <div className={styles.userGoalSection}>
                    <Image
                      className="me-3"
                      src={checkmark}
                      alt={"checkmark"}
                      width={40}
                      height={40}
                    />
                    Queen Room
                  </div>
                </div>
                <div className="col-md-4 d-flex ">
                  <div className={styles.userGoalSection}>
                    <Image
                      className="me-3"
                      src={checkmark}
                      alt={"checkmark"}
                      width={40}
                      height={40}
                    />
                    Deluxe Room with Queen bed
                  </div>
                </div>
                <div className="col-md-4 d-flex ">
                  <div className={styles.userGoalSection}>
                    <Image
                      className="me-3"
                      src={xIcon}
                      alt={"x-icon"}
                      width={40}
                      height={40}
                    />
                    Deluxe Room
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-4">
                <ul>
                  <li className="mb-3">
                    Participants preferred seeing the bed size with the room
                    name. with Queen Room and Deluxe Room with Queen bed being
                    the most favored. None favoured Deluxe Room.
                  </li>
                  <li className="mb-3">
                    However, bed size or room type did not seem to be a major
                    consideration.{" "}
                  </li>
                </ul>
              </div>
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* Process | Analysis from other websites */}
            <div>
              <h3 className={styles.subHeader}>
                PROCESS | ANALYSIS FROM OTHER WEBSITES
              </h3>
              <p className={styles.emphasizedLine}>
                Exploring how other booking websites present their hotel display
                pages.
              </p>
              <p className="mb-5">
                Before beginning my design work, I conducted a thorough
                competitive analysis by examining how other booking platforms
                presented hotel options to their users. Specifically, I paid
                close attention to how the platforms grouped hotel options and
                how they presented information about each hotel.
              </p>

              {/* upside */}
              <div className="row gx-5">
                <div className="col-md-6">
                  <Image
                    className="image"
                    src={upside}
                    alt={"upside example"}
                    fill
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <p>
                    <span className="fw-bold">
                      Grouped by Room Type & Payment{" "}
                    </span>
                    (Pay Now vs Pay Later)
                  </p>
                  {/* PROS */}
                  <div className="d-flex align-items-center">
                    <Image
                      src={prosIcon}
                      alt={"thumbs up"}
                      width={24}
                      height={24}
                    />
                    <span className={`ms-2 ${styles.prosLabel}`}>Pros</span>
                  </div>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li>Easy to compare options by payment schedule</li>
                    <li>
                      Loyalty points or no loyalty points label looks stand out.
                    </li>
                    <li>The UI is very clean and easy to navigate.</li>
                    <li>Provides room photos for each room type.</li>
                  </ul>

                  {/* CONS */}
                  <div className="d-flex align-items-center">
                    <Image
                      src={consIcon}
                      alt={"thumbs down"}
                      width={24}
                      height={24}
                    />
                    <span className={`ms-2 ${styles.prosLabel}`}>Cons</span>
                  </div>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li>
                      Does not have information about the inclusion of free
                      breakfast.
                    </li>
                    <li>
                      Refundable and payment schedule info is just in text
                      format, which could be better visualized.
                    </li>
                    <li>Does not have a refundable schedule or policy.</li>
                    <li>Hotel photos are hidden and not upfront. </li>
                  </ul>
                </div>
              </div>

              {/* travelPerk */}
              <div className="row gx-5 mt-5">
                <div className="col-md-6">
                  <Image
                    className="image"
                    src={travelPerk}
                    alt={"travelPerk example"}
                    fill
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <p>
                    <span className="fw-bold">
                      Grouped by Room Type & Refunability
                    </span>
                  </p>
                  {/* PROS */}
                  <div className="d-flex align-items-center">
                    <Image
                      src={prosIcon}
                      alt={"thumbs up"}
                      width={24}
                      height={24}
                    />
                    <span className={`ms-2 ${styles.prosLabel}`}>Pros</span>
                  </div>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li>
                      Very clean label and easy to differentiate non-refundable
                      and free cancellation.
                    </li>
                    <li>Clear view of breakfast inclusion info.</li>
                    <li>Provides info about bed sizing in cm.</li>
                    <li>Easy to see room photos and hotel photos.</li>
                    <li>Hotel overview is very clear.</li>
                  </ul>

                  {/* CONS */}
                  <div className="d-flex align-items-center">
                    <Image
                      src={consIcon}
                      alt={"thumbs down"}
                      width={24}
                      height={24}
                    />
                    <span className={`ms-2 ${styles.prosLabel}`}>Cons</span>
                  </div>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li>
                      Does not provide information about the payment schedule.
                    </li>
                    <li>Does not have info about loyalty.</li>
                    <li>
                      Does not have info about Wi-Fi and other room inclusions.
                    </li>
                  </ul>
                </div>
              </div>

              {/* tripActions */}
              <div className="row gx-5 mt-5">
                <div className="col-md-6">
                  <Image
                    className="image"
                    src={tripActions}
                    alt={"tripActions example"}
                    fill
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <p>
                    <span className="fw-bold">Grouped by Room Type & Rate</span>
                  </p>
                  {/* PROS */}
                  <div className="d-flex align-items-center">
                    <Image
                      src={prosIcon}
                      alt={"thumbs up"}
                      width={24}
                      height={24}
                    />
                    <span className={`ms-2 ${styles.prosLabel}`}>Pros</span>
                  </div>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li>
                      <span className="fw-bold">
                        Recommends the best room at the top.
                      </span>
                    </li>
                    <li>
                      Provides most of the information about payment schedule
                      and cancellation, loyalty, inclusions, and other
                      information.
                    </li>
                    <li>Clean layout for hotel overview.</li>
                  </ul>

                  {/* CONS */}
                  <div className="d-flex align-items-center">
                    <Image
                      src={consIcon}
                      alt={"thumbs down"}
                      width={24}
                      height={24}
                    />
                    <span className={`ms-2 ${styles.prosLabel}`}>Cons</span>
                  </div>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li>Layout is a little bit cluttered.</li>
                    <li>
                      Inconsistent use of icons, such as "pay at hotel" not
                      having an icon while "prepay" has an icon.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* Process | UX aUDIT */}
            <div>
              <h3 className={styles.subHeader}>PROCESS | UX AUDIT</h3>
              <p className={styles.emphasizedLine}>
                Opportunities for Improving Our User Experience
              </p>
              <p>
                Based on the insights that I gathered. here are some
                opportunities for improving our website’s user experience.
              </p>
              <p className={`my-5 ${styles.subSectionHeader}`}>
                Current design:
              </p>
              {/* FULL WIDTH IMAGE */}
              <div className="col-md-12 mb-5">
                <Image
                  className="image"
                  src={hotelCurrentDesign}
                  alt={"hotel current design"}
                  fill
                />
              </div>
              <div className="row gx-5">
                <div className="col-md-6">
                  <p className={styles.needsToBeFixedHeader}>
                    Needs to be fixed
                  </p>
                  <div className="d-flex">
                    <div className={styles.needsFixedNumber}>1</div>
                    <p>
                      <span className="fw-bold">
                        Hotel and room information should be easily accessible
                      </span>{" "}
                      without requiring users to navigate to a separate tab.
                      This is a common best practice on other websites, and it
                      would help to streamline the booking process and make it
                      more efficient.
                    </p>
                  </div>
                  <div className="d-flex">
                    <div className={styles.needsFixedNumber}>2</div>
                    <p>
                      <span className="fw-bold">
                        Grouping hotel rooms room type
                      </span>{" "}
                      could help users quickly identify which rooms meet their
                      specific needs. Our user testing showed that bed type was
                      the least considered factor when choosing a room.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <p className={styles.needsImprovementHeader}>
                    Needs improvement
                  </p>
                  <div className="d-flex">
                    <div className={styles.needsImprovementNumber}>1</div>
                    <p>
                      <span className="fw-bold">
                        Our hotel photo view could be improved
                      </span>{" "}
                      to showcase the unique features of each property and
                      entice customers to book. One suggestion would be to
                      feature more photos upfront and make them easily
                      accessible on the main display page.
                    </p>
                  </div>
                  <div className="d-flex">
                    <div className={styles.needsImprovementNumber}>2</div>
                    <p>
                      Overall, there is room for{" "}
                      <span className="fw-bold">improvement in the UI</span> for
                      information displayed. We could explore ways to present
                      hotel and room information more clearly and effectively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row gx-5 mt-5">
                <div className="col-md-6">
                  <p className={styles.hotelIdeaHeader}>Idea</p>
                  <div className="d-flex">
                    <div className={styles.hotelIdeaNumber}>1</div>
                    <p>
                      <span className="fw-bold">
                        Reducing the size of the map
                      </span>{" "}
                      on the hotel display page could be a way to simplify the
                      page and make it less overwhelming for users. While maps
                      can be helpful, we may be presenting it too prominently
                      compared to other websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* Process | design iterations */}
            <div>
              <h3 className={styles.subHeader}>PROCESS | DESIGN ITERATIONS</h3>
              <p>
                After conducting a competitive analysis and ux audit, I worked
                on design mock ups. I received valuable feedback from other
                designers, project managers, and stakeholders that helped me to
                continually iterate and refine my design. This collaborative
                process allowed me to create a more effective and user-friendly
                product.
              </p>
              {/* FULL WIDTH IMAGE */}
              <div className="col-md-12 mb-5 mt-3">
                <Image
                  className="image"
                  src={hotelDesignIterations}
                  alt={"hotelDesignIterations"}
                  fill
                />
              </div>

              <p className={`my-5 ${styles.emphasizedLine} `}>
                3 major improvements in my design
              </p>

              {/* Improvement 1 */}
              <div className={`mb-4 ${styles.improvementSectionContainer}`}>
                <div className="d-flex align-items-center ">
                  <Image
                    className="me-3"
                    src={numberOne}
                    alt={"number one"}
                    width={51}
                    height={51}
                  />
                  <span className={styles.subSectionHeader}>
                    Reduce the map size even further and enhance the hotel photo
                    view
                  </span>
                </div>
                <div className="col-md-12 mt-4">
                  <Image
                    className="image"
                    src={hotelImprovement1}
                    alt={"hotelImprovement1"}
                    fill
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <ul>
                    <li className="mb-1">
                      Based on feedback from design team and stakeholders, I
                      reduced the map size even smaller.
                    </li>
                    <li className="mb-1">
                      Reducing the map size allowed for more space to showcase
                      hotel photos
                    </li>
                  </ul>
                </div>
              </div>
              {/* ---- */}

              {/* Improvement 2 */}
              <div className={`mb-4 ${styles.improvementSectionContainer}`}>
                <div className="d-flex align-items-center ">
                  <Image
                    className="me-3"
                    src={numberTwo}
                    alt={"number one"}
                    width={51}
                    height={51}
                  />
                  <span className={styles.subSectionHeader}>
                    Design Changes Based on Engineer’s Input
                  </span>
                </div>
                <div className="col-md-12 mt-4">
                  <Image
                    className="image"
                    src={hotelImprovement2_1}
                    alt={"hotelImprovement2_1"}
                    fill
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <ul>
                    <li className="mb-1">
                      Removed the CO2 information that was not ready for
                      implementation in this sprint.
                    </li>
                    <li className="mb-1">
                      Removed icons for amenities based on engineer's feedback
                      regarding technical limitations.
                    </li>
                  </ul>
                </div>
                <div className="col-md-12 mt-4">
                  <Image
                    className="image"
                    src={hotelImprovement2_2}
                    alt={"hotelImprovement2_2"}
                    fill
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <ul>
                    <li className="mb-1">
                      Removed room photos due to technical limitation.
                    </li>
                  </ul>
                </div>
              </div>
              {/* ---- */}

              {/* Improvement 3 */}
              <div className={`mb-4 ${styles.improvementSectionContainer}`}>
                <div className="d-flex align-items-center ">
                  <Image
                    className="me-3"
                    src={numberThree}
                    alt={"number one"}
                    width={51}
                    height={51}
                  />
                  <span className={styles.subSectionHeader}>
                    Room Grouping with User Needs in Mind
                  </span>
                </div>
                <div className="col-md-12 mt-4">
                  <Image
                    className="image"
                    src={hotelImprovement3}
                    alt={"hotelImprovement3"}
                    fill
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <ul>
                    <li className="mb-1">
                      After conducting a design workshop with stakeholders and
                      PM, we decided to group hotel rooms by "best room options"
                      first.
                    </li>
                    <li className="mb-1">
                      Prioritized cheapest and most flexible rooms with the best
                      loyalty benefits.
                    </li>
                    <li className="mb-1">
                      We also included a section where users can view hotel
                      rooms by room type.
                    </li>
                    <li className="mb-1">
                      Through user research and analyzing other websites, we
                      found that 'viewing by room type' was the expected
                      behavior and necessary for most users.
                    </li>
                  </ul>
                </div>
              </div>
              {/* ---- */}
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* CONCLUSION */}
            <div>
              <h3 className={styles.subHeader}>CONCLUSION</h3>
              <p className={styles.subSectionHeader}>Final Screens</p>
              {/* FULL WIDTH IMAGE */}
              <div className="col-md-12 mt-4">
                <Image
                  className="image"
                  src={hotelConclusion}
                  alt={"hotelConclusion"}
                  fill
                />
              </div>
              <p className={`${styles.fs20fwbold} ${styles.mt75} `}>
                Achieving User metrics
              </p>

              <div className="d-flex align-items-center">
                <Image
                  src={militaryMedal}
                  alt={"medal"}
                  width={80}
                  height={80}
                />
                <span className={`${styles.header} ms-3`}>
                  We increased CSAT score from 6.9 to{" "}
                  <span className={styles.purple}> 7.5 </span> after the
                  implementation{" "}
                </span>
              </div>

              <p className={`${styles.fs20fwbold} mt-5 `}>What I learned... </p>
              <p>
                I learned that communication with engineers is crucial in order
                to ensure that the design is feasible within the technical
                limitations of the backend. For instance, during this project, I
                discovered that displaying photos for each room type was not
                currently possible due to a lack of data in the backend. As a
                result, I had to make last minute changes to the design before
                frontend implementation
              </p>

              <p className={`${styles.fs20fwbold} mt-5 `}>Next Step</p>
              <div className={`mb-3 ${styles.designValidationSectionQuote}`}>
                Conduct further usability testing to validate the design changes
                and identify any additional pain points or areas for
                improvement.
              </div>
              <div className={`mb-3 ${styles.designValidationSectionQuote}`}>
                Monitor user feedback and behavior to continuously iterate and
                optimize the design.
              </div>
              <div className={styles.designValidationSectionQuote}>
                Conduct research on hotel filters to identify areas for
                improvement.
              </div>

              <p className={`mt-5 ${styles.header}`}>Thank you for reading!</p>
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            <p className={`${styles.fs20fwbold} ${styles.purple}`}>
              View more projects :)
            </p>

            <div className="row gx-5 mb-5">
              <div className="col-md-6">
                <MoreProject {...fcmProject} />
              </div>
              <div className="col-md-6">
                <MoreProject {...miuuNoteProject} />
              </div>
            </div>

            {/* END OF PAGE */}
          </div>
          <Footer />
        </Layout>
      </main>
    </>
  );
}
