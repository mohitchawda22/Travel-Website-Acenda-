import Image from "next/image";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Places from "./components/Places";
import Explore from "./components/Explore";
import Features from "./components/Features";
import Customer from "./components/Customer";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Places />
      <Explore />
      <Features />
      <Customer />
      <ContactUs />
      <Footer/>
    </>
  );
}
