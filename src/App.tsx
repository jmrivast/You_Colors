import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectStrip } from "./components/ProjectStrip";
import { Services } from "./components/Services";
import { Details } from "./components/Details";
import { FeaturedProject } from "./components/FeaturedProject";
import { Process } from "./components/Process";
import { LargeFormat } from "./components/LargeFormat";
import { Companies } from "./components/Companies";
import { Portfolio } from "./components/Portfolio";
import { Workshop } from "./components/Workshop";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Header />
      <main id="main-content">
        <Hero />
        <ProjectStrip />
        <Services />
        <Details />
        <FeaturedProject />
        <Process />
        <LargeFormat />
        <Companies />
        <Portfolio />
        <Workshop />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default App;
