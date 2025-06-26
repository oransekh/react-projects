import "./index.css";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import PropularProducts from "./components/PropularProducts.jsx";
import SuperQulity from "./components/SuperQulity.jsx";
import Sarvices from "./Sarvices.jsx";
import SpecialOffer from "./components/SpecialOffer.jsx";
import CustomerReviews from "./components/CustomerReviews.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <main>
      {/* navbar */}
      <section className="relative mx-auto max-w-screen-xl">
        <Nav />
      </section>
      {/* herio section */}
      <section className="relative mx-auto max-w-screen-xl">
        <Hero />
      </section>
      <section className="relative mx-auto max-w-screen-xl">
        <PropularProducts />
      </section>
      <section className="relative mx-auto max-w-screen-xl">
        <SuperQulity />
      </section>
      <section className="relative mx-auto max-w-screen-xl">
        <Sarvices />
      </section>
      <section className="relative mx-auto max-w-screen-xl">
        <SpecialOffer />
      </section>
      <section className="relative mx-auto max-w-screen-xl">
        <CustomerReviews />
      </section>
      <section className="relative mx-auto">
        <Footer />
      </section>
    </main>
  );
}

export default App;
