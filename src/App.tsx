import Footer from "./components/footer/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <section>
        <Header />
        <Hero />
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
