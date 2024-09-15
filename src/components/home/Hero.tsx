import HeroImage from "../../assets/images/hero.png";
import { Button } from "../ui/button";
import Statistics from "./Statistics";

const Hero = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-12 items-center justify-between">
          <div className="col-span-6 space-y-14">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-slate-900">
                Book Your Ideal Meeting Room with Ease.
              </h1>
              <p className="text-base font-medium text-slate-900">
                Efficient, hassle-free room booking for all your meeting needs.
              </p>
              <div>
                <Button>Book Now</Button>
              </div>
            </div>

            <Statistics />
          </div>
          <div className="col-span-6">
            <img src={HeroImage} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
