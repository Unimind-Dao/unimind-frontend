import { About } from "../components/About";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { OurMission } from "../components/OurMission/OurMission";
import Team from "../components/Team/Team";

function App() {
  return (
    <>
      <section>
        <Header />
        <Hero />
        <About />
      </section>
      <section>
        <OurMission />
      </section>
      <section>
        <Team />
        <Footer />
      </section>
    </>
  );
}

export default App;
