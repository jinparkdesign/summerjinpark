import Header from "@/components/header";
import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import { Public_Sans } from "next/font/google";
import ProjectHeader from "@/components/Project/project-header";
import { getAllProjects, ProjectId } from "@/lib/projects";
const publicSans = Public_Sans({ subsets: ["latin"] });
import styles from "../../styles/projectDetail.module.css";
import Footer from "@/components/footer";
import MoreProject from "@/components/Project/more-project";

const FCMSplitTicketing = () => {
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

          <ProjectHeader {...fcmProject} />

          <div className={styles.projectDetailContainer}>
            <div className="mb-5">
              {/* OVERVIEW */}
              <h3 className={styles.subHeader}>OVERVIEW</h3>

              <p>
                FCM is a platform for{" "}
                <span className="fw-bold">
                  {" "}
                  booking business travel, including flights.{" "}
                </span>
                However, their flight search only displays combined fares and
                does not support separate ticketing (also known as split
                ticketing, which means buying two or more ‘one way’ tickets for
                your trip instead of one combined ticket, in order to
                potentially save money on your total airfare cost). This has
                resulted in customer complaints due to missing flight contents.
              </p>
            </div>
            {/* PROBLEM */}
            <div>
              <h3 className={styles.subHeader}>PROBLEM</h3>
              <p className={styles.emphasizedLine}>
                Customers are missing flight contents due to the absence of a
                split ticketing feature.
              </p>
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* SOLUTION & IMPACT */}
            <div>
              <h3 className={styles.subHeader}>
                THE SOLUTION & EXPECTED IMPACT
              </h3>
              <p className={styles.emphasizedLine}>
                Implement a split ticketing feature that will allow customers to
                book separate tickets for each leg of their trip.
              </p>

              {/* Image & Bullet point component */}
              <div className="row mt-5">
                <div className="col-md-2">
                  <Image
                    className="image"
                    src={`/rocketship.png`}
                    alt={"rocketship"}
                    fill
                  />
                </div>
                <div className="col-md-10">
                  <h4 className={styles.subSectionHeader}>
                    We anticipate that...
                  </h4>
                  <ul className="mt-3">
                    <li className="mb-3">
                      This feature will resolve over{" "}
                      <span className="fw-bold">80%</span> of the missing
                      content issues
                    </li>
                    <li className="mb-3">
                      Provide customers with{" "}
                      <span className="fw-bold">more flight options</span>
                    </li>
                    <li>
                      Ultimately resulting in increased{" "}
                      <span className="fw-bold">customer satisfaction.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* FINAL DESIGN IMPLEMENTATION */}
            <div>
              <h3 className={styles.subHeader}>FINAL DESIGN IMPLEMENTATION</h3>

              {/* 1. Outbound Flight Selection Page */}
              {/* Image & Bullet point component */}
              <div className="row mt-5">
                <div className="col-md-1">
                  <Image
                    className="image"
                    src={`/number-1.png`}
                    alt={"number one"}
                    fill
                  />
                </div>
                <div className="col-md-11">
                  <h4 className={styles.subSectionHeader}>
                    Outbound Flight Selection Page
                  </h4>
                  <ul className="mt-3">
                    <li className="mb-3">
                      Display the lowest price point with copy stating "Round
                      trip starting from", instead of “Round trip total”.
                    </li>
                    <li className="mb-3">
                      Display fare rules based on the cheapest option
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-12 mt-2">
                <Image
                  className="image"
                  src={`/fc-final-design-implementation-1.png`}
                  alt={"number one"}
                  fill
                />
              </div>
              {/* ------ */}

              {/* 2. Return Flight Selection Page */}
              {/* Image & Bullet point component */}
              <div className="row mt-96">
                <div className="col-md-1">
                  <Image
                    className="image"
                    src={`/number-2.png`}
                    alt={"number one"}
                    fill
                  />
                </div>
                <div className="col-md-11">
                  <h4 className={styles.subSectionHeader}>
                    Return Flight Selection Page
                  </h4>
                  <ul className="mt-3">
                    <li className="mb-3">
                      Display fare rules with updated and intuitive icons.
                    </li>
                    <li className="mb-3">
                      Badge separate ticket options with a tooltip explaining
                      what a separate ticket is and the associated rules and
                      restrictions.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-12 mt-2">
                <Image
                  className="image"
                  src={`/fc-final-design-implementation-2.png`}
                  alt={"number one"}
                  fill
                />
              </div>

              {/* ----- */}

              {/* 3. Checkout Page */}
              {/* Image & Bullet point component */}
              <div className="row mt-96">
                <div className="col-md-1">
                  <Image
                    className="image"
                    src={`/number-3.png`}
                    alt={"number one"}
                    fill
                  />
                </div>
                <div className="col-md-11">
                  <h4 className={styles.subSectionHeader}>Checkout Page</h4>
                  <ul className="mt-3">
                    <li className="mb-3">
                      Show a heads-up message in the trip details section to
                      alert customers about separate tickets.
                    </li>
                    <li className="mb-3">
                      Display "fare rules" section that reminds customers that
                      fare rules and baggage rules apply individually to each
                      ticket.
                    </li>
                    <li className="mb-3">
                      Provide the price details section clearer by breaking down
                      separate tickets.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-12 mt-2">
                <Image
                  className="image"
                  src={`/fc-final-design-implementation-3.png`}
                  alt={"number one"}
                  fill
                />
              </div>
              {/* ----- */}
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* Process | Analysis from other websites */}
            <div>
              <h3 className={styles.subHeader}>
                Process | Analysis from other websites
              </h3>
              <p className={styles.emphasizedLine}>
                Most travel booking websites offer split ticketing options for
                flights.
              </p>
              <p>
                Before I design, I conducted a competitive analysis and found
                that split ticketing options for flights are commonly offered by
                popular travel websites such as Expedia, Navan, and Google
                Flights, as well as other online booking tools. By identifying
                these best practices, I can propose improvements for FCM's
                booking platform and ensure that we offer a competitive and
                user-friendly experience for our customers.
              </p>

              {/* EXPEDIA */}
              <div className="row gx-5">
                <div className="col-md-6">
                  <Image
                    className="image"
                    src={`/expedia.png`}
                    alt={"expedia example"}
                    fill
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  {/* PROS */}
                  <div className="d-flex align-items-center">
                    <Image
                      src={`/pros-icon.png`}
                      alt={"thumbs up"}
                      width={24}
                      height={24}
                    />
                    <span className={`ms-2 ${styles.prosLabel}`}>Pros</span>
                  </div>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li>
                      Icons are <span className="fw-bold"> simple</span>,
                      straightforward and{" "}
                      <span className="fw-bold">consistent.</span>
                    </li>
                    <li>
                      <span className="fw-bold">Clean layout</span> for each
                      section for seats, bags and fare rules.
                    </li>
                    <li>
                      <span className="fw-bold">Baggage disclaimer</span> is
                      clearly stated.
                    </li>
                    <li>
                      <span className="fw-bold">Change fee</span> is displayed,
                      which helps customers make informed decisions.
                    </li>
                    <li>
                      <span className="fw-bold">
                        Separate tickets disclaimer
                      </span>{" "}
                      on the checkout page is helpful.
                    </li>
                  </ul>

                  {/* CONS */}
                  <div className="d-flex align-items-center">
                    <Image
                      src={`/cons-icon.png`}
                      alt={"thumbs down"}
                      width={24}
                      height={24}
                    />
                    <span className={`ms-2 ${styles.prosLabel}`}>Cons</span>
                  </div>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li>
                      No separate tickets disclaimer displayed on the results
                      page.
                    </li>
                    <li>
                      The change and cancellation information is not displayed
                      on the checkout page.
                    </li>
                    <li>
                      The price summary doesn't break out the price by flights,
                      which can be confusing for customers who are trying to
                      understand the cost breakdown.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Google Flights */}
              <div className="row gx-5 mt-5">
                <div className="col-md-6">
                  <Image
                    className="image"
                    src={`/google-flights-comparison.png`}
                    alt={"google flights example"}
                    fill
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  {/* PROS */}
                  <div className="d-flex align-items-center">
                    <Image
                      src={`/pros-icon.png`}
                      alt={"thumbs up"}
                      width={24}
                      height={24}
                    />
                    <span className={`ms-2 ${styles.prosLabel}`}>Pros</span>
                  </div>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li>
                      Displays a{" "}
                      <span className="fw-bold">
                        clear "separate tickets" disclaimer
                      </span>{" "}
                      on the results page. The disclaimer is prominently
                      displayed in red color, making it{" "}
                      <span className="fw-bold">hard to miss.</span>
                    </li>
                  </ul>

                  {/* CONS */}
                  <div className="d-flex align-items-center">
                    <Image
                      src={`/cons-icon.png`}
                      alt={"thumbs down"}
                      width={24}
                      height={24}
                    />
                    <span className={`ms-2 ${styles.prosLabel}`}>Cons</span>
                  </div>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li>
                      The website lacks any further explanation or additional
                      information regarding what separate tickets mean.
                    </li>
                    <li>
                      When expanding the flight option, the badge indicating
                      separate tickets disappears, potentially causing customers
                      to overlook this important detail.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Navan */}
              <div className="row gx-5 mt-5">
                <div className="col-md-6">
                  <Image
                    className="image"
                    src={`/navan-comparison.png`}
                    alt={"Navan example"}
                    fill
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  {/* PROS */}
                  <div className="d-flex align-items-center">
                    <Image
                      src={`/pros-icon.png`}
                      alt={"thumbs up"}
                      width={24}
                      height={24}
                    />
                    <span className={`ms-2 ${styles.prosLabel}`}>Pros</span>
                  </div>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li>
                      Displays a{" "}
                      <span className="fw-bold">
                        clear "separate tickets" disclaimer
                      </span>{" "}
                      on the results page. The disclaimer is prominently
                      displayed in red color, making it{" "}
                      <span className="fw-bold">hard to miss.</span>
                    </li>
                  </ul>

                  {/* CONS */}
                  <div className="d-flex align-items-center">
                    <Image
                      src={`/cons-icon.png`}
                      alt={"thumbs down"}
                      width={24}
                      height={24}
                    />
                    <span className={`ms-2 ${styles.prosLabel}`}>Cons</span>
                  </div>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li>
                      The website lacks any further explanation or additional
                      information regarding what separate tickets mean.
                    </li>
                    <li>
                      When expanding the flight option, the badge indicating
                      separate tickets disappears, potentially causing customers
                      to overlook this important detail.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* Process | initial design review */}
            <div>
              <h3 className={styles.subHeader}>
                PROCESS | INITIAL DESIGN REVIEW
              </h3>
              <p>
                After conducting a competitive analysis, I generated some
                initial ideas and reviewed them with the product manager, design
                team, and stakeholders. Through this process, I was able to make
                three major improvements to my early ideation{" "}
              </p>

              <div className="col-md-12 mt-5">
                <Image
                  className="image"
                  src={`/fc-initial-design-review.png`}
                  alt={"number one"}
                  fill
                />
              </div>

              <p className={`my-5 ${styles.emphasizedLine} `}>
                3 major improvements in my early ideation
              </p>

              {/* Improvement 1 */}
              <div className={`mb-4 ${styles.improvementSectionContainer}`}>
                <div className="d-flex align-items-center ">
                  <Image
                    className="me-3"
                    src={`/number-1.png`}
                    alt={"number one"}
                    width={51}
                    height={51}
                  />
                  <span className={styles.subSectionHeader}>
                    Fare Rule Section Improvements
                  </span>
                </div>
                <div className="col-md-12 mt-4">
                  <Image
                    className="image"
                    src={`/fc-improvement-1.png`}
                    alt={"number one"}
                    fill
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <ul>
                    <li className="mb-1">
                      Based on{" "}
                      <span className="fw-bold"> Engineers’ feedback</span> that
                      we don’t have a cancellation fee data, I removed the fee
                      info.
                    </li>
                    <li className="mb-1">
                      <span className="fw-bold">
                        Upon stakeholders’ feedback,
                      </span>{" "}
                      I included “baggage allowance” along with the cancellation
                      and change rules.
                    </li>
                    <li className="mb-1">
                      <span className="fw-bold">PM</span> provided me additional
                      context about the baggage purchase rule. so I added the
                      disclaimer about purchasing additional bags.
                    </li>

                    <li className="mb-1">
                      I shared my initial design options with my
                      <span className="fw-bold"> design team.</span>
                      They provided valuable feedback to refine and finalize the
                      cleanest layout for the first version.
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
                    src={`/number-2.png`}
                    alt={"number one"}
                    width={51}
                    height={51}
                  />
                  <span className={styles.subSectionHeader}>
                    Disclaimer vs Badging
                  </span>
                </div>
                <div className="col-md-12 mt-4">
                  <Image
                    className="image"
                    src={`/fc-improvement-2.png`}
                    alt={"number one"}
                    fill
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <ul>
                    <li className="mb-1">
                      In the review session with{" "}
                      <span className="fw-bold"> stakeholders,</span> we chose
                      badging option over the text-heavy disclaimer.
                    </li>
                    <li className="mb-1">
                      A hover-over tooltip was added to explain the split ticket
                      with the simpler badging design.
                    </li>
                  </ul>
                </div>
              </div>
              {/* ---- */}
              {/* Improvement 3 */}
              <div className={styles.improvementSectionContainer}>
                <div className="d-flex align-items-center ">
                  <Image
                    className="me-3"
                    src={`/number-3.png`}
                    alt={"number one"}
                    width={51}
                    height={51}
                  />
                  <span className={styles.subSectionHeader}>
                    Use Consistent Icons Across the Product
                  </span>
                </div>
                <div className="col-md-9 mt-4">
                  <Image
                    className="image"
                    src={`/fc-improvement-3.png`}
                    alt={"number one"}
                    fill
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <ul>
                    <li className="mb-1">
                      Based on the feedback, I updated the fare rule icons to
                      what’s used in our fare rules section on the checkout
                      page, resulting in a simpler and more intuitive design.
                    </li>
                  </ul>
                </div>
              </div>
              {/* ---- */}
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* Process | USABILITY TESTING */}
            <div>
              <h3 className={styles.subHeader}>PROCESS | USABILITY TESTING</h3>
              <p>
                Our UX researcher conducted{" "}
                <span className="fw-bold">
                  {" "}
                  two rounds of unmoderated usability tests
                </span>{" "}
                from UserTesting.com with 12 business travelers.
              </p>

              <div className="d-flex">
                <div className={styles.task}>Task</div>

                <p className={styles.taskLabel}>
                  Book a combined trip and split ticket trip and share your
                  thoughts on the interface.
                </p>
              </div>

              <div className="d-flex align-items-center my-5">
                <Image
                  src={`/star-icon.png`}
                  alt={"star icon"}
                  width={24}
                  height={24}
                />
                <span className={`${styles.usabilitySubHeader} ms-3`}>
                  Top Finding
                </span>
              </div>

              <div className="row gx-5">
                <div className="col-md-7">
                  <Image
                    className="image"
                    src={`/fc-usability-1.png`}
                    alt={"usability testing illustration 1"}
                    fill
                  />
                </div>
                <div className="col-md-5 d-flex flex-column justify-content-center">
                  <div className="d-flex mb-3">
                    <Image
                      className="me-2"
                      src={`/hushed-face.png`}
                      alt={"hushed face"}
                      width={60}
                      height={60}
                    />
                    <span className={styles.improvementSectionSubHeader}>
                      Layout issue in the fare rules section
                    </span>
                  </div>
                  <p>
                    One participant incorrectly assumed that the text
                    "Non-refundable" was applicable to Flight 1, and "No change
                    fee" applied to Flight 2.{" "}
                    <span className="fw-bold">
                      {" "}
                      This was due to the texts being written in the same row.
                    </span>
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <div className={styles.improvementSectionVL}></div>
              </div>

              <div className={styles.improvementSectionQuote}>
                <span className={styles.improvementSectionMain}>
                  This confusion was successfully eliminated in the second
                  version
                </span>
                <span className={styles.improvementSectionSub}>
                  {" "}
                  where a line separator was introduced between Flight 1 and 2,
                  as follows:
                </span>
              </div>

              <div className="d-flex justify-content-center">
                <div className={styles.improvementSectionVL}></div>
              </div>

              <div className="row gx-5">
                <div className="col-md-7">
                  <Image
                    className="image"
                    src={`/fc-usability-2.png`}
                    alt={"usability testing illustration 2"}
                    fill
                  />
                </div>
                <div className="col-md-5 d-flex flex-column justify-content-center">
                  <div className="d-flex mb-3">
                    <Image
                      className="me-2"
                      src={`/relieved-face.png`}
                      alt={"hushed face"}
                      width={60}
                      height={60}
                    />
                    <span className={styles.improvementSectionSubHeader}>
                      Issue solved in the second round
                    </span>
                  </div>
                  <p>
                    With revised design in the second round, no issues were
                    reported in the fare rules section. The clarity of fare
                    rules for split ticket fare was rated a{" "}
                    <span className="fw-bold"> 5 out of 5.</span>
                  </p>
                </div>
              </div>

              <p className={`${styles.usabilitySubHeader} my-5`}>
                Other Finding
              </p>

              <p className={styles.improvementSectionSubHeader}>
                Use better copy
              </p>
              <p>
                Participants were asked about the meaning of "Roundtrip total,"
                and 5 out of 6 thought it represented the final amount they
                needed to pay. However, the total amount may increase depending
                on the return flight option they select. As a result,{" "}
                <span className="fw-bold">
                  {" "}
                  the team changed the label to "Round trip starting from" to
                  more accurately reflect the pricing.
                </span>
              </p>
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* PROCESS | DESIGN VALIDATION */}
            <div>
              <h3 className={styles.subHeader}>PROCESS | DESIGN VALIDATION</h3>
              <p>
                Before the launch, our UX researcher conducted{" "}
                <span className={styles.fs20fwbold}>
                  {" "}
                  a moderated usability test{" "}
                </span>{" "}
                with 9 clients with our clients by using a QA beta site, to
                collect their initial reactions to the actual search results.
              </p>
              <div className="d-flex">
                <div className={styles.task}>Task</div>

                <p className={styles.taskLabel}>
                  Do a trial flight search on their current FCM website and then
                  on the QA site to compare search results.
                </p>
              </div>
              <div className="d-flex align-items-center my-5">
                <Image
                  src={`/star-icon.png`}
                  alt={"star icon"}
                  width={24}
                  height={24}
                />
                <span className={`${styles.usabilitySubHeader} ms-3`}>
                  Top Finding
                </span>
              </div>

              <p className={styles.improvementSectionSubHeader}>
                Participants were generally satisfied with how split ticketing
                is communicated across the booking process.
              </p>

              <div className="row gx-5 mt-5">
                <div className="col-md-2">
                  <Image
                    className="image"
                    src={`/fc-design-validation.png`}
                    alt={"note pad with checkmark"}
                    fill
                  />
                </div>
                <div className="col-md-10">
                  <div
                    className={`mb-4 ${styles.designValidationSectionQuote}`}
                  >
                    <span className="fw-bold"> All participants </span> saw the
                    "Heads Up!" banner on the check out page.
                  </div>
                  <div
                    className={`mb-4 ${styles.designValidationSectionQuote}`}
                  >
                    There were{" "}
                    <span className="fw-bold"> no reported issues </span> with
                    the banner's copy.
                  </div>
                  <div
                    className={`mb-4 ${styles.designValidationSectionQuote}`}
                  >
                    <span className="fw-bold">All participants understood</span>{" "}
                    the fare rules as displayed in the Fare Rules section.
                  </div>
                  <div
                    className={`mb-4 ${styles.designValidationSectionQuote}`}
                  >
                    <span className="fw-bold">5 out of 9</span> participants
                    noticed the badge.
                  </div>
                  <div className={`${styles.designValidationSectionQuote}`}>
                    <span className="fw-bold">All participants</span> understood
                    the meaning of "split ticketing." Suggestions for
                    alternative phrases included: one-way ticketing, flex
                    ticket, flex fare, split fare, hacker fare.v
                  </div>
                </div>
              </div>

              <p className={`${styles.usabilitySubHeader} my-5`}>
                Other Finding
              </p>

              <div className="row gx-5">
                <div className="col-md-6">
                  <Image
                    className="image"
                    src={`/fc-design-validation-2.png`}
                    alt={"Design Validation Illustration"}
                    fill
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <ul>
                    <li className="mb-3">
                      We currently only display one loyalty number on the
                      checkout page. Two participants asked how they could add a
                      second loyalty number for the second airline in the
                      booking as they wanted to make sure they get points on
                      each.
                    </li>
                    <li>
                      To provide travelers with a clearer checkout experience,
                      we have placed an information message below the loyalty
                      number on the checkout page.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-12 mt-3">
                <ul>
                  <li>
                    Two participants did not mind split tickets as long as they
                    reached their destination, and felt that highlighting the
                    split ticketing may cause unnecessary worry.
                  </li>
                </ul>
              </div>
            </div>
            {/* ------ */}

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* Conclusion */}
            <div>
              <h3 className={styles.subHeader}>CONCLUSION</h3>
              <p className={styles.fs20fwbold}>Final Screens</p>
              <div className="col-md-12 my-5">
                <Image
                  className="image"
                  src={`/fc-conclusion.png`}
                  alt={"number one"}
                  fill
                />
              </div>
              <p className={styles.fs20fwbold}>Achieving User goals</p>
              <div className="row">
                <div className="col-md-6">
                  <div className={styles.userGoalSection}>
                    <Image
                      className="me-3"
                      src={`/checkmark.png`}
                      alt={"checkmark"}
                      width={40}
                      height={40}
                    />
                    Increased booking completion for travelers without using the
                    support chat function.
                  </div>
                </div>
                <div className="col-md-6 d-flex ">
                  <div className={styles.userGoalSection}>
                    <Image
                      className="me-3"
                      src={`/checkmark.png`}
                      alt={"checkmark"}
                      width={40}
                      height={40}
                    />
                    Resolved the missing contents issue on the website.
                  </div>
                </div>
              </div>

              <p className={`${styles.fs20fwbold} ${styles.mt75} `}>
                Achieving User metrics
              </p>

              <div className="d-flex align-items-center">
                <Image
                  src={`/military-medal.png`}
                  alt={"medal"}
                  width={80}
                  height={80}
                />
                <span className={`${styles.header} ms-3`}>
                  We increased CSAT score from 7.2 to{" "}
                  <span className={styles.purple}> 7.9 </span> after the
                  implementation{" "}
                </span>
              </div>

              <p className={`${styles.fs20fwbold} mt-5 `}>What I learned... </p>

              <div className={`mb-3 ${styles.designValidationSectionQuote}`}>
                During the design process, I created multiple prototypes and
                went through many design iterations. Through this experience, I
                learned the importance of taking the time to ensure that changes
                made to the design are effective and beneficial for the users.
                While this implementation process can be time-consuming, the end
                result is ultimately worth the effort.
              </div>
              <div className={`mb-3 ${styles.designValidationSectionQuote}`}>
                Working together as a team is very important to succeed. By
                listening to each other's ideas, sharing their own opinions and
                using their strengths, team members were able to work together
                smoothly and move the project forward.
              </div>
              <div className={styles.designValidationSectionQuote}>
                It is also glad to see the design is making a real influence on
                the business travellers. According to the metrics and user
                feedback, complains significantly decreased regarding the
                missing content issue.
              </div>

              <p className={`mt-5 ${styles.header}`}>Thank you for reading!</p>
            </div>

            {/* ------ */}

            <hr className={`${styles.divider} mb-5 mt-5`} />

            <p className={`${styles.fs20fwbold} ${styles.purple}`}>
              View more projects :)
            </p>

            <div className="row gx-5 mb-5">
              <div className="col-md-6">
                <MoreProject {...hotelRedesignProject} />
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
};

export default FCMSplitTicketing;
