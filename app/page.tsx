import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Studio from "./components/Studio";
import Artists from "./components/Artists";
import Gallery from "./components/Gallery";
import Flash from "./components/Flash";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Booking from "./components/Booking";
import Aftercare from "./components/Aftercare";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Studio />
        <Artists />
        <Gallery />
        <Marquee reverse />
        <Flash />
        <Testimonials />
        <Faq />
        <Booking />
        <Aftercare />
      </main>
      <Footer />
    </>
  );
}
