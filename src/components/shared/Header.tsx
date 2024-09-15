import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

const Header = () => {
  return (
    <header>
      <div className="bg-slate-950 py-1.5 text-center text-white text-sm font-medium">
        <p>30% off available on all orders</p>
      </div>
      <div className="bg-slate-50 border-b border-b-slate-200">
        <div className="max-w-7xl mx-auto py-3.5 flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold text-slate-950">
            Roomly
          </Link>
          <div className="space-x-5">
            <Link className="text-sm font-medium text-slate-900" to="/">
              Home
            </Link>
            <Link className="text-sm font-medium text-slate-900" to="/products">
              Meeting Rooms
            </Link>
            <Link className="text-sm font-medium text-slate-900" to="/products">
              About Us
            </Link>
            <Link className="text-sm font-medium text-slate-900" to="/products">
              Contact Us
            </Link>
          </div>
          <div>
            <Link to="/login" className={buttonVariants({ variant: "link" })}>
              Login
            </Link>
            <Link to="/register" className={buttonVariants()}>
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
