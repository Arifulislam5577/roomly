import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import HowItWork from "../components/home/HowItWork";
import Services from "../components/home/Services";
import Testimonial from "../components/home/Testimonial";
import WhyUs from "../components/home/WhyUs";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <WhyUs />
      <HowItWork />
      <Testimonial />
    </>
  );
};

export default Home;
