import { About } from "../components/About";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { OurMission } from "../components/OurMission/OurMission";

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
        <Footer />
      </section>
    </>
  );
}

export default App;
