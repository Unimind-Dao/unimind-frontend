import { styled } from "@mui/material";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
  About,
  Footer,
  Header,
  Hero,
  JoinUnimindSection,
  OurMission,
  Partners,
  Team,
  WhatDrivesUs,
} from "../components";
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
      <SectionWithPadding id={sectionName.team}>
        <Team />
      </SectionWithPadding>
      <section>
        <Partners />
      </section>
      <StyledDivider />
      <Footer />
    </>
  );
}

const SectionWithPadding = styled("section")`
  padding-bottom: 3rem;
  background-color: ${({ theme }) => theme.palette.common.black};
`;

const StyledDivider = styled("div")`
  background-image: linear-gradient(
    to right,
    #252525,
    #2e2e2e,
    #383838,
    #424242,
    #4c4c4c,
    #4c4c4c,
    #4c4c4c,
    #4c4c4c,
    #424242,
    #383838,
    #2e2e2e,
    #252525
  );
  height: 2px;
  width: 100%;
`;

export const getStaticProps: GetStaticProps = async ({ locale = "" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
    revalidate: 3600,
  };
};

export default App;
