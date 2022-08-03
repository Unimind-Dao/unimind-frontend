import React from "react";

import { About } from "../components/About";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { OurMission } from "../components/OurMission/OurMission";
import Team from "../components/Team/Team";
import { WhatDrivesUs } from "../components/WhatDrivesUs/WhatDrivesUs";
import JoinUnimindSection from "../components/JoinUnimindSection/JoinUnimindSection";

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
      <Footer />
    </>
  );
}

export default App;
