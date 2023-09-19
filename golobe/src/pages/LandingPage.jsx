import { Cta, Hero, PageTabs, PlanPerfectTrip, Reviews } from "../components";
import styles from "../styles";

const LandingPage = () => {
  return (
    <div className="w-full overflow-hidden lg:pt-5">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.heroWidth}`}>
          <Hero />
        </div>
      </div>
      <div className="flex justify-center">
        <PageTabs />
      </div>
      <div className=" lg:flex lg:justify-center px-5 ">
        <PlanPerfectTrip />
      </div>
      <div className="flex justify-center">
        <Reviews />
      </div>
      <div>
        <Cta />
      </div>
    </div>
  );
};

export default LandingPage;
