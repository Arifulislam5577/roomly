import { format } from "date-fns";
import { Clock } from "lucide-react";
import { TSlot } from "../../types/global.type";
import { Button } from "../ui/button";

const TimeSlot = ({ slot }: { slot: TSlot }) => {
  return (
    <div className="p-5 border border-metal-200 rounded-md flex items-center justify-between">
      <p className="text-base font-normal text-slate-400">
        {format(slot.date, "MMMM dd, yyyy")}
      </p>
      <div>
        <p className="flex text-sm items-center text-slate-400">
          <Clock className="mr-2 h-4 w-4" />
          <span>
            {slot.startTime} - {slot.endTime}
          </span>
        </p>
      </div>
      <Button size={"sm"}>Book Now</Button>
    </div>
  );
};

export default TimeSlot;
