import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { About } from "../components/About";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import JoinUnimindSection from "../components/JoinUnimindSection/JoinUnimindSection";
import { OurMission } from "../components/OurMission";
import Partners from "../components/Partners/Partners";
import Team from "../components/Team/Team";
import { WhatDrivesUs } from "../components/WhatDrivesUs";
import { sectionName } from "../data/constants";

function App() {
  return (
    <>
      <Header />
      <section>
        <Hero />
      </section>
      <section id={sectionName.about}>
        <About />
      </section>
      <section id={sectionName.benefits}>
        <OurMission />
      </section>
      <section>
        <WhatDrivesUs />
      </section>
      <section>
        <JoinUnimindSection />
      </section>
      <section id={sectionName.team}>
        <Team />
      </section>
      <section>
        <Partners />
      </section>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale = "" }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default App;
