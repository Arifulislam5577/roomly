import HeroImage from "../../assets/images/hero.png";
import { Button } from "../ui/button";
import Statistics from "./Statistics";

const Hero = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-12 items-center justify-between">
          <div className="xl:col-span-6 col-span-12 space-y-14">
            <div className="space-y-4 xl:w-full max-w-xl mx-auto">
              <h1 className="text-5xl font-bold text-slate-900 xl:text-left text-center">
                Book Your Ideal Meeting Room with Ease.
              </h1>
              <p className="text-base font-medium text-slate-900 xl:text-left text-center">
                Efficient, hassle-free room booking for all your meeting needs.
              </p>
              <div className="xl:text-left text-center">
                <Button>Book Now</Button>
              </div>
            </div>

            <Statistics />
          </div>
          <div className="xl:col-span-6 col-span-12">
            <img src={HeroImage} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
