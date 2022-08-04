import React from "react";

import { ThemeProvider } from "@mui/system";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { About } from "../components/About";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { OurMission } from "../components/OurMission/OurMission";
import Team from "../components/Team/Team";
import theme from "../theme/theme";
import { WhatDrivesUs } from "../components/WhatDrivesUs/WhatDrivesUs";
import JoinUnimindSection from "../components/JoinUnimindSection/JoinUnimindSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <section>
        <Header />
        <Hero />
        <About />
      </section>
      <section>
        <OurMission />
      </section>
      <section>
        <WhatDrivesUs />
      </section>
      <section>
        <JoinUnimindSection />
      </section>
      <section>
        <Team />
        <Footer />
      </section>
    </ThemeProvider>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}

export default App;
