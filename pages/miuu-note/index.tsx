import Head from "next/head";
import Header from "@/components/header";
import { Public_Sans } from "next/font/google";
import Layout from "@/components/layout";
import ProjectHeader from "@/components/Project/project-header";
import { getAllProjects, ProjectId } from "@/lib/projects";
import styles from "../../styles/projectDetail.module.css";
import Image from "next/image";
import Footer from "@/components/footer";
import thinkingFace from "@/public/thinking-face.png";
import miuu1 from "@/public/miuu-1.gif";
import miuu1_1 from "@/public/miuu-1-1.gif";
import miuu2 from "@/public/miuu-2.gif";
import miuu2_2 from "@/public/miuu-2-1.gif";
import miuu3 from "@/public/miuu-3.gif";
import miuu3_3 from "@/public/miuu-3-1.gif";
import miuu4 from "@/public/miuu-4.gif";
import miuu4_4 from "@/public/miuu-4-1.gif";
import miuuProcess from "@/public/miuu-process.png";
import miuuConclusion1 from "@/public/miuu-conclusion-1.png";
import miuuConclusion2 from "@/public/miuu-conclusion-2.png";
import miuuConclusion3 from "@/public/miuu-conclusion-3.png";
import miuuConclusion4 from "@/public/miuu-conclusion-4.png";
import miuuConclusion5 from "@/public/miuu-conclusion-5.png";
import miuuPersona from "@/public/miuu-persona.png";
import miuuimProvement1 from "@/public/miuu-improvement-1.png";
import miuuimProvement2 from "@/public/miuu-improvement-2.png";
import miuuimProvement3 from "@/public/miuu-improvement-3.png";

import miuuFinal1 from "@/public/miuu-final-1.png";
import miuuFinal2 from "@/public/miuu-final-2.png";
import miuuFinal3 from "@/public/miuu-final-3.png";
import miuuFinal4 from "@/public/miuu-final-4.png";
import miuuFinal5 from "@/public/miuu-final-5.png";

import miuuReview from "@/public/miuu-review.png";

import numberOne from "@/public/number-1.png";
import numberTwo from "@/public/number-2.png";
import numberThree from "@/public/number-3.png";
import numberFour from "@/public/number-4.png";
import numberFive from "@/public/number-5.png";
import starIcon from "@/public/star-icon.png";
import checkmark from "@/public/checkmark.png";

import prosIcon from "@/public/pros-icon.png";
import consIcon from "@/public/cons-icon.png";
import miuuMyDiary from "@/public/miuu-my-diary.png";
import miuuLunaDiary from "@/public/miuu-luna-diary.png";
import miuuMiniNote from "@/public/miuu-mini-note.png";
import linkImg from "@/public/link.png";
import MoreProject from "@/components/Project/more-project";

import useWindowSize from "@/hooks/useWindowSize";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function HotelRedesignPage() {
  const size = useWindowSize();

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
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <main className={publicSans.className}>
        <Layout>
          <Header activePage="work" />

          <ProjectHeader {...miuuNoteProject} />

          <div className={styles.projectDetailContainer}>
            {/* OVERVIEW */}
            <div className="mb-5">
              <h3 className={styles.subHeader}>OVERVIEW</h3>

              <p>
                Miuu Note app is a personal project that I worked on with
                another developer. It’s a diary app that allows users to express
                their daily thoughts using a variety of adorable stickers and
                backgrounds. With over 340+ stickers and 120+ backgrounds, users
                can enjoy a fun and creative experience. The app was launched on
                the Google Play Store and has gained over 10k organic downloads.
                This was achieved without any paid advertising. Our future plan
                is to launch the iOS version of the app later this year to reach
                even more users.
              </p>
            </div>

            {/* PROBLEM */}
            <div>
              <h3 className={styles.subHeader}>PROBLEM</h3>
              <p className={styles.emphasizedLine}>
                Many existing diary apps lack engaging features to make the
                diary writing experience more enjoyable and fun.
              </p>
              <div className="row mt-5">
                <div className={`col-md-2 ${styles.thinkingFaceContainer}`}>
                  <Image
                    className={`image ${styles.thinkingFace}`}
                    src={thinkingFace}
                    alt={"thinkingFace"}
                    fill
                  />
                </div>
                <div className="col-md-10 d-flex flex-column justify-content-center">
                  <h4 className={`fs-36 ${styles.fontChivo}`}>
                    “I want to develop an app that transforms daily writing into
                    a <span className="fw-bold">fun, engaging,</span> and
                    <span className="fw-bold">customizable</span> experience
                    with a <span className="fw-bold">cute </span>and{" "}
                    <span className="fw-bold">personalized </span>touch.”
                  </h4>
                </div>
              </div>
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* SOLUTION */}
            <div>
              <h3 className={styles.subHeader}>SOLUTION</h3>
              <p className={styles.emphasizedLine}>
                Provide a unique feature that allows users to collect cute
                stickers daily and use them in their diary entries, making the
                process of diary writing more enjoyable and motivating.
              </p>

              {/* GIF ROW 1 */}
              <div className="row mt-5">
                <div className="col-md-6 d-flex">
                  <div className="col-md-6 me-32">
                    <Image className="image " src={miuu1} alt={"miuu1"} fill />
                  </div>
                  <div className="col-md-6">
                    <Image
                      className="image"
                      src={miuu1_1}
                      alt={"miuu1_1"}
                      fill
                    />
                  </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <div
                    className={`d-flex ${size.width > 576 ? "ms-32" : "mt-4"} `}
                  >
                    <Image
                      className="me-3"
                      src={numberOne}
                      alt={"number one"}
                      width={44}
                      height={44}
                    />
                    <h4 className={styles.improvementSectionSub}>
                      Create a diary app that encourages users to write daily
                      entries by offering a unique daily reward system.
                    </h4>
                  </div>
                </div>
              </div>

              {/* GIF ROW 2 */}
              <div className="row mt-96 ">
                <div className="col-md-6 d-flex">
                  <div className="col-md-6 me-32">
                    <Image className="image " src={miuu2} alt={"miuu2"} fill />
                  </div>
                  <div className="col-md-6">
                    <Image
                      className="image"
                      src={miuu2_2}
                      alt={"miuu2_2"}
                      fill
                    />
                  </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <div
                    className={`d-flex ${size.width > 576 ? "ms-32" : "mt-4"} `}
                  >
                    <Image
                      className="me-3"
                      src={numberTwo}
                      alt={"number two"}
                      width={44}
                      height={44}
                    />
                    <h4 className={styles.improvementSectionSub}>
                      Provide a wide selection of adorable stickers more than
                      340+, allowing users to express their emotions in a more
                      engaging and personalized way.
                    </h4>
                  </div>
                </div>
              </div>

              {/* GIF ROW 3 */}
              <div className="row mt-96 ">
                <div className="col-md-6 d-flex">
                  <div className="col-md-6 me-32">
                    <Image className="image " src={miuu3} alt={"miuu3"} fill />
                  </div>
                  <div className="col-md-6">
                    <Image
                      className="image"
                      src={miuu3_3}
                      alt={"miuu3_3"}
                      fill
                    />
                  </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <div
                    className={`d-flex ${size.width > 576 ? "ms-32" : "mt-4"} `}
                  >
                    <Image
                      className="me-3"
                      src={numberThree}
                      alt={"numberThree"}
                      width={44}
                      height={44}
                    />
                    <h4 className={styles.improvementSectionSub}>
                      Implement additional features such as customizable
                      backgrounds and stickers to enhance the user's experience
                      and make diary writing more enjoyable.
                    </h4>
                  </div>
                </div>
              </div>

              {/* GIF ROW 4 */}
              <div className="row mt-96 ">
                <div className="col-md-6 d-flex">
                  <div className="col-md-6 me-32">
                    <Image className="image " src={miuu4} alt={"miuu4"} fill />
                  </div>
                  <div className="col-md-6">
                    <Image
                      className="image"
                      src={miuu4_4}
                      alt={"miuu4_4"}
                      fill
                    />
                  </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <div
                    className={`d-flex ${size.width > 576 ? "ms-32" : "mt-4"} `}
                  >
                    <Image
                      className="me-3"
                      src={numberFour}
                      alt={"numberFour"}
                      width={44}
                      height={44}
                    />
                    <h4 className={styles.improvementSectionSub}>
                      Users can categorize their journals into different folders
                      based on themes or topics using the grouping feature.
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* Process | survey */}
            <div>
              <h3 className={styles.subHeader}>PROCESS | SURVEY</h3>
              <p className={styles.emphasizedLine}>
                Understanding the needs and preferences of teenage diary app
                users
              </p>

              <div className="row mt-5">
                <div className="col-md-5">
                  <Image
                    className="image"
                    src={miuuProcess}
                    alt={"miuuProcess"}
                    fill
                  />
                </div>
                <div className="col-md-7 d-flex flex-column justify-content-center">
                  <p
                    className={` fs-16 ${size.width > 576 ? "ms-5" : "mt-3"} `}
                  >
                    I conducted an online survey{" "}
                    <span className={styles.fs20fwbold}>
                      targeting female teenagers between the ages of 10 - 19
                    </span>{" "}
                    who are likely to write a diary or or use journal app to
                    gain insights on their diary habits and preferences.
                  </p>
                </div>
              </div>

              <p className={`my-5 ${styles.fs20fwbold}`}>
                Summary of conclusion{" "}
              </p>

              {/* Miuu Conclusion 1 */}
              <div className={`row mt-5 mb-2 ${styles.miuuConclusion1}`}>
                <div className="col-md-2">
                  <Image
                    className="image pe-5 desktop"
                    src={miuuConclusion1}
                    alt={"miuuConclusion1"}
                    fill
                  />
                </div>
                <div className="col-md-10 d-flex flex-column justify-content-center">
                  <p>Participants are motivated to write in their diary to</p>
                  <p className={styles.subSectionHeader}>
                    1. Express emotions (91.7%)
                  </p>
                  <p className={styles.subSectionHeader}>
                    2. Document personal experiences and growth (50%)
                  </p>
                </div>
              </div>

              {/* Miuu Conclusion 2 */}
              <div className={`row mb-2 ${styles.miuuConclusion2}`}>
                <div className="col-md-2">
                  <Image
                    className="image pe-5 desktop"
                    src={miuuConclusion2}
                    alt={"miuuConclusion2"}
                    fill
                  />
                </div>
                <div className="col-md-10 d-flex flex-column justify-content-center">
                  <p>The most commonly used feature in diary apps is</p>
                  <p className={styles.subSectionHeader}>
                    1. Text entry (100%)
                  </p>
                  <p className={styles.subSectionHeader}>2. Photo (56.6%)</p>
                </div>
              </div>

              {/* Miuu Conclusion 3 */}
              <div className={`row mb-2 ${styles.miuuConclusion3}`}>
                <div className="col-md-2">
                  <Image
                    className="image pe-5 desktop"
                    src={miuuConclusion3}
                    alt={"miuuConclusion3"}
                    fill
                  />
                </div>
                <div className="col-md-10 d-flex flex-column justify-content-center">
                  <p>
                    As additional features in a diary app, participants would
                    like to see
                  </p>
                  <p className={styles.subSectionHeader}>
                    1. Sticker and emojis (83.3%)
                  </p>
                  <p className={styles.subSectionHeader}>
                    2. Mood trackers (66.7%)
                  </p>
                  <p className={styles.subSectionHeader}>
                    3. Customizable background (63.6%)
                  </p>
                </div>
              </div>

              {/* Miuu Conclusion 4 */}
              <div className={`row mb-2 ${styles.miuuConclusion4}`}>
                <div className="col-md-2">
                  <Image
                    className="image pe-5 desktop"
                    src={miuuConclusion4}
                    alt={"miuuConclusion4"}
                    fill
                  />
                </div>
                <div className="col-md-10 d-flex flex-column justify-content-center">
                  <p>According to the survey results,</p>
                  <p className={styles.subSectionHeader}>
                    A daily reward system can encourage people to write in their
                    diary app.
                  </p>
                  <p className="fs-16">
                    <span className={styles.subSectionHeader}> 75% </span>
                    answered “yes” for using a diary app that rewards them cute
                    daily stickers.
                  </p>
                </div>
              </div>

              {/* Miuu Conclusion 5 */}
              <div className={`row mb-2 ${styles.miuuConclusion5}`}>
                <div className="col-md-2">
                  <Image
                    className="image pe-5 desktop"
                    src={miuuConclusion5}
                    alt={"miuuConclusion5"}
                    fill
                  />
                </div>
                <div className="col-md-10 d-flex flex-column justify-content-center">
                  <p> A majority participants find</p>
                  <p className={styles.subSectionHeader}>
                    Backup feature and secure lock feature is important.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center my-5">
                <Image
                  src={starIcon}
                  alt={"star icon"}
                  width={24}
                  height={24}
                />
                <span className={`${styles.usabilitySubHeader} ms-3`}>
                  Takeaways:
                </span>
              </div>

              <div
                className={`mb-3 d-flex ${
                  size.width > 576 ? "align-items-center" : ""
                }  ${styles.designValidationSectionQuote}`}
              >
                <Image
                  className="me-3"
                  src={checkmark}
                  alt={"checkmark"}
                  width={40}
                  height={40}
                />
                <span>
                  Incorporating a daily sticker reward system that users can
                  collect and customizable backgrounds in a diary app can make
                  the experience more enjoyable and motivating for users.
                </span>
              </div>

              <div
                className={`mb-3 d-flex ${
                  size.width > 576 ? "align-items-center" : ""
                } ${styles.designValidationSectionQuote}`}
              >
                <Image
                  className="me-3"
                  src={checkmark}
                  alt={"checkmark"}
                  width={40}
                  height={40}
                />
                <span>
                  Users value security features such as a secure lock and backup
                  feature in a diary app.
                </span>
              </div>

              <div
                className={`mb-3 d-flex ${
                  size.width > 576 ? "align-items-center" : ""
                } ${styles.designValidationSectionQuote}`}
              >
                <Image
                  className="me-3"
                  src={checkmark}
                  alt={"checkmark"}
                  width={40}
                  height={40}
                />
                <span>
                  Adding mood trackers or mood stickers to a diary app can help
                  users better understand and process their emotions while
                  writing, making the diary writing experience more meaningful
                  and fulfilling.
                </span>
              </div>

              <hr className={`${styles.divider} mb-5 mt-5`} />

              {/* PROCESS | ANALYSIS FROM OTHER DIARY APPS */}
              <div>
                <h3 className={styles.subHeader}>
                  PROCESS | ANALYSIS FROM OTHER DIARY APPS
                </h3>
                <p className="lh-30">
                  As part of my design process, I conducted a competitive
                  analysis of diary apps that has stickers or mood tracking
                  feature and identified gaps in the market for a more engaging
                  user experience.
                </p>

                <div className="row mt-5">
                  {/* My Diary */}
                  <div className="col-md-6 d-flex pe-40">
                    <Image
                      src={miuuMyDiary}
                      alt={"miuuMyDiary"}
                      width={115}
                      height={125}
                    />
                    <div className="ms-40">
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
                        <li>Easy to use and simple UI</li>
                        <li>
                          Have useful functions like adding multiple photos,
                          audio, adding stickers and mood
                        </li>
                      </ul>

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
                        <li>Most contents are not free</li>
                        <li>They have limited options for mood stickers</li>
                        <li>Unexpected pop up ads</li>
                      </ul>
                    </div>
                  </div>
                  {/* ---- */}
                  {/* Luan Diary */}
                  <div
                    className={`col-md-6 d-flex ${
                      size.width > 576 ? "ps-40" : "mt-5"
                    }`}
                  >
                    <Image
                      src={miuuLunaDiary}
                      alt={"miuuLunaDiary"}
                      width={115}
                      height={125}
                    />
                    <div className="ms-40">
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
                          Illustrations and overall app aesthetic has good
                          impression{" "}
                        </li>
                        <li>
                          They have adding music feature in their journals
                        </li>
                      </ul>

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
                        <li>They didn’t have mood trackers</li>
                        <li>Limited options for customization </li>
                      </ul>
                    </div>
                  </div>
                  {/* ---- */}
                </div>
                <div className="row mt-5">
                  {/* Mininote */}
                  <div className="col-md-6 d-flex">
                    <Image
                      src={miuuMiniNote}
                      alt={"miuuMiniNote"}
                      width={115}
                      height={125}
                    />
                    <div className="ms-40">
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
                          Provides excessive amount of free stickers and
                          template
                        </li>
                      </ul>

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
                        <li>High learning curve to use app</li>
                        <li>Complex interface</li>
                        <li>Not focused on writing text entries</li>
                      </ul>
                    </div>
                  </div>
                  {/* ---- */}
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

                <div className="d-flex">
                  <p className={`${styles.fs24fwbold} me-2`}>1. </p>
                  <p className="fs-24">
                    While other diary apps may have some basic feature like mood
                    stickers or customizable templates,{" "}
                    <span className={styles.fs24fwbold}>
                      {" "}
                      none of them offer the fun feature like free daily reward
                      stickers that can be used in their diary.
                    </span>
                  </p>
                </div>
                <div className="d-flex mt-5">
                  <p className={`${styles.fs24fwbold} me-2`}>2. </p>
                  <p className="fs-24">
                    <span className={styles.fs24fwbold}>
                      There is a trade-off between simplicity and features in
                      diary apps. Apps that are too simple don't offer many
                      stickers or customization options, while apps that are too
                      complex can be overwhelming.
                    </span>{" "}
                    My app aims to strike a balance between being easy to use
                    and offering enough features to enhance the user's
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* PROCESS | USER PERSONA */}
            <div>
              <h3 className={styles.subHeader}>PROCESS | USER PERSONA</h3>
              <p className={styles.emphasizedLine}>
                Create user persona to design with users in mind
              </p>
              <p className="lh-30">
                I created a user persona to better understand the needs and pain
                points of potential users for a diary app, allowing you to
                design a more engaging and user-friendly product.
              </p>

              {/* FULL WIDTH IMAGE */}
              <div className="col-md-12 mt-5">
                <Image
                  className="image"
                  src={miuuPersona}
                  alt={"miuuPersona"}
                  fill
                />
              </div>
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* PROCESS | DESIGN ITERATION AFTER FEEDBACK */}
            <div>
              <h3 className={styles.subHeader}>
                PROCESS | DESIGN ITERATION AFTER FEEDBACK
              </h3>
              <p className={styles.emphasizedLine}>
                3 major improvements in my design
              </p>
              <p className="lh-30">
                Based on various feedback from users and testers, I continually
                iterated my design.
              </p>

              {/* Improvement 1 */}
              <div className="row mt-5">
                <div className="col-md-8 pe-40">
                  <Image
                    className="image"
                    src={miuuimProvement1}
                    alt={"miuuimProvement1"}
                    fill
                  />
                </div>
                <div
                  className={`col-md-4 d-flex flex-column justify-content-center ${
                    size.width > 576 ? "ps-40" : "mt-4"
                  }`}
                >
                  <p className={styles.fs24fwbold}>
                    Make sticker collector page more immersive and fun.
                  </p>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li className="mb-3">
                      Based on feedback from testers, I reduced negative space
                      and made the feature full screen to create a more
                      immersive and engaging experience for the user.
                    </li>
                    <li className="mb-3">
                      Added a timer on top so users can see when the free
                      sticker collector can reset for the next draw.
                    </li>
                    <li className="mb-3">
                      Made the “collect sticker” button more recognizable as a
                      button since some testers found it unclear.
                    </li>
                    <li className="mb-3">
                      Changed the overall UI to have a game-like feel to enhance
                      user engagement and make the app more enjoyable and fun to
                      use.
                    </li>
                  </ul>
                </div>
              </div>
              {/* ------ */}
              {/* Improvement 2*/}
              <div className="row mt-88">
                <div className="col-md-8 pe-40">
                  <Image
                    className="image"
                    src={miuuimProvement2}
                    alt={"miuuimProvement2"}
                    fill
                  />
                </div>
                <div
                  className={`col-md-4 d-flex flex-column justify-content-center ${
                    size.width > 576 ? "ps-40" : "mt-4"
                  }`}
                >
                  {" "}
                  <p className={styles.fs24fwbold}>
                    Main page improvements by prioritizing user needs.{" "}
                  </p>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li className="mb-3">
                      Moved stickers to the right side based on testers'
                      feedback, so users can see their diary text first before
                      the mood stickers.
                    </li>
                    <li className="mb-3">
                      Added photo preview when users add a photo to their diary.
                    </li>
                    <li className="mb-3">
                      Moved the "write entry" button to the top of the page
                      based on users' feedback, as some users found the button
                      on the bottom right distracting and covering part of the
                      diary list at the bottom.
                    </li>
                  </ul>
                </div>
              </div>
              {/* ------ */}
              {/* Improvement 3*/}
              <div className="row mt-88">
                <div className="col-md-8 pe-40">
                  <Image
                    className="image"
                    src={miuuimProvement3}
                    alt={"miuuimProvement3"}
                    fill
                  />
                </div>
                <div
                  className={`col-md-4 d-flex flex-column justify-content-center ${
                    size.width > 576 ? "ps-40" : "mt-4"
                  }`}
                >
                  {" "}
                  <p className={styles.fs24fwbold}>
                    Enhance diary functions and make them organized.
                  </p>
                  <ul className={`mt-3 ${styles.prosList}`}>
                    <li className="mb-3">
                      Created a toolbar for note writing functions based on user
                      feedback
                    </li>
                    <li className="mb-3">
                      Placed “add photo” and “add sticker” button into the
                      toolbar because they are related to the act of writing.
                    </li>
                    <li className="mb-3">
                      Added a circle container box for the sticker placement on
                      the top right, to distinguish between mood stickers and
                      other stickers added above diary entries.
                    </li>
                  </ul>
                </div>
              </div>
              {/* ------ */}
            </div>

            <hr className={`${styles.divider} mb-5 mt-5`} />

            {/* CONCLUSION */}
            <div>
              <h3 className={styles.subHeader}>CONCLUSION</h3>
              <p className={styles.fs20fwbold}>Final Screens</p>

              {/* FULL WIDTH IMAGE */}
              <div className="col-md-12 my-5">
                <Image
                  className="image"
                  src={miuuFinal1}
                  alt={"miuuFinal1"}
                  fill
                />
              </div>

              {/* FULL WIDTH IMAGE */}
              <div className="col-md-12 mb-5">
                <Image
                  className="image"
                  src={miuuFinal2}
                  alt={"miuuFinal2"}
                  fill
                />
              </div>

              {/* FULL WIDTH IMAGE */}
              <div className="col-md-12 mb-5">
                <Image
                  className="image"
                  src={miuuFinal3}
                  alt={"miuuFinal3"}
                  fill
                />
              </div>

              {/* FULL WIDTH IMAGE */}
              <div className="col-md-12 mb-5">
                <Image
                  className="image"
                  src={miuuFinal4}
                  alt={"miuuFinal4"}
                  fill
                />
              </div>

              {/* FULL WIDTH IMAGE */}
              <div className="col-md-12 mb-5">
                <Image
                  className="image"
                  src={miuuFinal5}
                  alt={"miuuFinal5"}
                  fill
                />
              </div>

              <p className={styles.fs20fwbold}>Customer Review</p>

              {/* FULL WIDTH IMAGE */}
              <div className="col-md-12 mb-5 d-flex justify-content-center">
                <Image
                  className={`image ${styles.miuuReview}`}
                  src={miuuReview}
                  alt={"miuu"}
                  fill
                />
              </div>

              <div className="col-md-12 mb-4 d-flex flex-column align-items-center justify-content-center">
                <Image
                  className="mb-3"
                  src={linkImg}
                  alt={"linkImg"}
                  width={32}
                  height={32}
                />
                <a
                  href="https://play.google.com/store/apps/details?id=com.miuustudio.miuudiary"
                  target="_blank"
                >
                  <p className={styles.miuuDownloadLink}>
                    Link to Download Miuu Note
                  </p>
                </a>
              </div>

              <p className={`${styles.fs20fwbold} `}>Next Steps</p>

              <div
                className={`mb-3 d-flex ${styles.designValidationSectionQuote}`}
              >
                <p className="me-3">1. </p>
                <p>
                  <span className="fw-bold">Introduce new features:</span> New
                  features are in the roadmap such as a pet AI that tracks
                  writing habits and provides personalized feedback, a
                  notification system for reminders, and pin-to-top feature fore
                  important notes.
                </p>
              </div>
              <div
                className={`mb-3 d-flex ${styles.designValidationSectionQuote}`}
              >
                <p className="me-3">2. </p>
                <p>
                  <span className="fw-bold">
                    Usability testing and iteration:{" "}
                  </span>{" "}
                  Continue to conduct user testing and gather feedback from
                  users to further improve the app.
                </p>
              </div>
              <div
                className={`mb-3 d-flex ${styles.designValidationSectionQuote}`}
              >
                <p className="me-3">3. </p>
                <p>
                  <span className="fw-bold">Analyze customer feedback: </span>{" "}
                  Pay close attention to the reviews section and support mail.
                  Analyze the feedback to identify areas for improvement and new
                  features that users want. I can use this feedback to
                  prioritize your development roadmap.
                </p>
              </div>
              <div
                className={`mb-3 d-flex ${styles.designValidationSectionQuote}`}
              >
                <p className="me-3">4. </p>
                <p>
                  <span className="fw-bold">Develop an iOS version:</span> Since
                  I only have an Android version launched, developing an iOS
                  version can help this app reach a wider audience and increase
                  the user base.
                </p>
              </div>
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
                <MoreProject {...hotelRedesignProject} />
              </div>
            </div>
            {/* EOF */}
          </div>

          <Footer />
        </Layout>
      </main>
    </>
  );
}
