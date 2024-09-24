import { Clock } from "lucide-react";
import { Button } from "../ui/button";

const TimeSlot = () => {
  return (
    <div className="p-5 border border-metal-200 rounded-md flex items-center justify-between">
      <p className="text-base font-normal text-slate-400">September 10, 2022</p>
      <div>
        <p className="flex text-sm items-center text-slate-400">
          <Clock className="mr-2 h-4 w-4" />
          <span>10:00 AM - 11:00 AM</span>
        </p>
      </div>
      <Button size={"sm"}>Book Now</Button>
    </div>
  );
};

export default TimeSlot;
