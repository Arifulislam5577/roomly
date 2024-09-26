import { List } from "lucide-react";
import { Link } from "react-router-dom";
import { userLogout } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Button, buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <header>
      <div className="bg-slate-950 py-1.5 text-center text-white text-sm font-medium">
        <p>30% off available on all orders</p>
      </div>
      <div className="bg-slate-50 border-b border-b-slate-200">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold text-slate-950">
            Roomly
          </Link>
          <div className="space-x-5 md:block hidden">
            <Link className="text-sm font-medium text-slate-900" to="/">
              Home
            </Link>
            <Link className="text-sm font-medium text-slate-900" to="/rooms">
              Meeting Rooms
            </Link>
            <Link className="text-sm font-medium text-slate-900" to="/about-us">
              About Us
            </Link>
            <Link
              className="text-sm font-medium text-slate-900"
              to="/contact-us"
            >
              Contact Us
            </Link>
          </div>
          <div className="md:block hidden">
            {user ? (
              <>
                <Link
                  to="/my-booking"
                  className={buttonVariants({ variant: "link" })}
                >
                  My Booking
                </Link>
                <Button onClick={() => dispatch(userLogout())}>Logout</Button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={buttonVariants({ variant: "link" })}
                >
                  Login
                </Link>
                <Link to="/register" className={buttonVariants()}>
                  Register Now
                </Link>
              </>
            )}
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden flex">
              <Button variant="outline" size="icon">
                <List className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <p>Sheet content</p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
