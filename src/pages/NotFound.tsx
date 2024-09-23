import { Link } from "react-router-dom";
import { buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";

const NotFound = () => {
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-slate-900">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-slate-900">
            Page is not available right now
          </p>
          <p className="mt-4 mb-8 text-slate-600 font-normal">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to="/" className={cn(buttonVariants())}>
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
