import { styled } from "@mui/material";
import { GetServerSideProps, GetStaticProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async ({
  locale = "",
  res,
}) => {
  // Cache the content of this page for 12 hrs
  // After 12 hrs, the content will continue to be served
  // for a grace period of 60 seconds as new data is fetched
  // Then, the CDN will store a fresh copy for the next user :-)

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=60"
  );

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default App;
