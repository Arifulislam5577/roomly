import {
  Building2,
  CircleAlert,
  Compass,
  Forward,
  Heart,
  Home,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import RoomImage from "../assets/images/room.jpg";
import { Badge } from "../components/ui/badge";
import { buttonVariants } from "../components/ui/button";

const Room = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 xl:col-span-6 grid grid-cols-12 gap-5">
            <div className="col-span-12">
              <img src={RoomImage} alt="room" className="rounded-xl" />
            </div>
            <div className="col-span-4">
              <img src={RoomImage} alt="room" className="rounded-xl " />
            </div>
            <div className="col-span-4">
              <img src={RoomImage} alt="room" className="rounded-xl " />
            </div>
            <div className="col-span-4">
              <img src={RoomImage} alt="room" className="rounded-xl " />
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6 space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-medium text-slate-600">
                Conference Room
              </h1>
              <div className="flex items-end gap-x-2.5">
                <p className="text-4xl font-bold text-slate-900">$120.00</p>
                <p className="text-xl font-normal text-slate-400">(per slot)</p>
              </div>
              <div className="max-w-md space-y-3">
                <p className="text-slate-600 font-normal text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  incidunt ex aut quod nostrum recusandae vitae, assumenda nulla
                  quaerat. Id minus laboriosam, autem ab fugiat aliquid quas eos
                  rem placeat!
                </p>
                <p className="text-slate-600 font-normal text-base">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
              <div className="flex items-center gap-x-3 border-y py-3">
                <p className="flex items-center gap-x-2">
                  <Home size={20} className="text-slate-400" />
                  <span className="text-slate-400 font-normal text-sm ">
                    Room No: 601
                  </span>
                </p>
                <p className="flex items-center gap-x-2">
                  <Building2 size={20} className="text-slate-400" />
                  <span className="text-slate-400 font-normal text-sm">
                    Floor No: 07
                  </span>
                </p>
                <p className="flex items-center gap-x-2">
                  <Users size={20} className="text-slate-400" />
                  <span className="text-slate-400 font-normal text-sm ">
                    Capacity: 25
                  </span>
                </p>
              </div>
              <div className="space-x-3">
                <Badge>Projector</Badge>
                <Badge>Whiteboard</Badge>
              </div>
              <div className="border-y border-slate-200 py-3 flex items-center gap-x-8">
                <button className="flex items-center gap-x-2.5 text-sm font-medium text-slate-600">
                  <Heart size={18} />
                  Add To Wishlist
                </button>
                <button className="flex items-center gap-x-2.5 text-sm font-medium text-slate-600">
                  <Compass size={18} />
                  Compare Other
                </button>
                <button className="flex items-center gap-x-2.5 text-sm font-medium text-slate-600">
                  <Forward size={18} />
                  Share Now
                </button>
              </div>
              <div>
                <p className="flex items-center text-sm gap-x-2 text-slate-400">
                  <CircleAlert size={18} />
                  <span>
                    All the slot available in this month. For more slot booking
                    request{" "}
                    <Link
                      to={"/contact-us"}
                      className="text-blue-500 hover:underline"
                    >
                      Contact Here
                    </Link>
                  </span>
                </p>
              </div>
            </div>
            <Link to="/booking" className={buttonVariants()}>
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room;
