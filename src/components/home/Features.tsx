import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import RoomCard from "../shared/RoomCard";
import { buttonVariants } from "../ui/button";

const Features = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-y-12 items-end gap-5 justify-between">
          <div className="col-span-12">
            <div className="text-center">
              <p className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Our Features List
              </p>
              <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>
          </div>
          {[1, 2, 3, 4].map((room) => {
            return <RoomCard key={room} />;
          })}

          <div className="col-span-12 flex items-center justify-end">
            <Link to="/rooms" className={cn(buttonVariants({}))}>
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
