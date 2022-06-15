import { About } from "./components/About";
import Footer from "./components/footer/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <section>
        <Header />
        <Hero />
        <About />
      </section>
      <section>
        <p> Środek</p>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
