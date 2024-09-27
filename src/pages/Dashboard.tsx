import {
  BetweenVerticalStart,
  House,
  Settings,
  TicketCheck,
  Users,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-12 gap-5 justify-between">
          <div className="col-span-12 lg:col-span-3 bg-white border border-slate-200 p-5 space-y-5 divide-y divide-slate-300 rounded-lg">
            <p className="flex items-center gap-x-1.5 font-medium text-slate-600">
              <Settings size={16} /> Manage Dashboard
            </p>

            <div className="pt-3">
              <ul>
                <li className="hover:bg-slate-900 group rounded-md">
                  <Link
                    className="flex items-center gap-x-1.5 font-medium group-hover:text-white text-base py-2.5 text-slate-600 group-hover:translate-x-1 group-hover:px-3 transition-transform duration-300"
                    to="/dashboard"
                  >
                    <House size={16} />
                    Rooms
                  </Link>
                </li>
                <li className="hover:bg-slate-900 group rounded-md">
                  <Link
                    className="flex items-center gap-x-1.5 font-medium group-hover:text-white text-base py-2.5 text-slate-600 group-hover:translate-x-1 group-hover:px-3 transition-transform duration-300"
                    to="/dashboard/slots"
                  >
                    <BetweenVerticalStart size={16} /> Slots
                  </Link>
                </li>
                <li className="hover:bg-slate-900 group rounded-md">
                  <Link
                    className="flex items-center gap-x-1.5 font-medium group-hover:text-white text-base py-2.5 text-slate-600 group-hover:translate-x-1 group-hover:px-3 transition-transform duration-300"
                    to="/dashboard/booking"
                  >
                    <TicketCheck size={16} /> Booking
                  </Link>
                </li>
                <li className="hover:bg-slate-900 group rounded-md">
                  <Link
                    className="flex items-center gap-x-1.5 font-medium group-hover:text-white text-base py-2.5 text-slate-600 group-hover:translate-x-1 group-hover:px-3 transition-transform duration-300"
                    to="/dashboard/users"
                  >
                    <Users size={16} /> User
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
