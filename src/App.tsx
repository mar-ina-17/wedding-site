import { Content } from "./components/layout/content";
import { Footer } from "./components/layout/footer";

import Header from "./components/layout/header";
import About from "./components/sections/about";
import FAQ from "./components/sections/faq";
import Gallery from "./components/sections/gallery";
import RSVP from "./components/sections/rsvp";
import Schedule from "./components/sections/schedule";

function App() {
  return (
    <>
      <Header />
      <Content>
        <Gallery />
        <About />
        <Schedule />
        <FAQ />
        <RSVP />
      </Content>
      <Footer />
    </>
  );
}

export default App;
