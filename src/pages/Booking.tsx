import { format } from "date-fns";
import { CalendarIcon, User } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import TimeSlot from "../components/shared/TimeSlot";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { cn } from "../lib/utils";

interface TimeSlots {
  time: number;
  hour: number;
  slot: "am" | "pm";
}

const slotArr: ["am", "pm"] = ["am", "pm"];

const Booking = () => {
  const { id } = useParams();

  const [date, setDate] = useState<Date>();
  const [touched, setTouched] = useState(false);
  const [timeValue, setTimeValue] = useState<TimeSlots>({
    hour: 12,
    time: 0,
    slot: "am",
  });

  const getFormattedTime = () => {
    const { hour, time, slot } = timeValue;
    const hours = hour < 10 ? `0${hour}` : hour;
    const minutes = time < 10 ? `0${time}` : time;
    return `${hours}:${minutes} ${slot.toUpperCase()}`;
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 xl:col-span-9 space-y-5">
            <div className="p-5 border border-metal-200 rounded-md flex items-center gap-x-5">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !touched && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {touched ? getFormattedTime() : <span>Pick a Time</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  onClick={() => setTouched(true)}
                  className="w-[320px]"
                >
                  <div className="flex items-start gap-x-5">
                    <div className="flex-1">
                      <p className="text-slate-400 font-normal text-sm mb-2">
                        Hours
                      </p>
                      <div
                        id="scroll-bar"
                        className="space-y-2 h-[200px] overflow-y-auto"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                          <Button
                            variant={"outline"}
                            className="w-full"
                            size={"sm"}
                            key={i}
                            onClick={() =>
                              setTimeValue({ ...timeValue, hour: i })
                            }
                          >
                            {i}:00
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-400 font-normal text-sm mb-2">
                        Minutes
                      </p>
                      <div
                        id="scroll-bar"
                        className="space-y-2 h-[200px] overflow-y-auto"
                      >
                        {[...Array(61).keys()].map((i) => (
                          <Button
                            variant={"outline"}
                            className="w-full"
                            size={"sm"}
                            key={i}
                            onClick={() =>
                              setTimeValue({ ...timeValue, time: i })
                            }
                          >
                            {i < 10 ? `0${i}` : i}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-400 font-normal text-sm mb-2">
                        Period
                      </p>
                      <div
                        id="scroll-bar"
                        className="space-y-2 h-[200px] overflow-y-auto"
                      >
                        {slotArr.map((slot) => (
                          <Button
                            variant={"outline"}
                            className="w-full uppercase"
                            size={"sm"}
                            key={slot}
                            onClick={() => setTimeValue({ ...timeValue, slot })}
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Button>Search</Button>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-slate-600 text-sm font-medium">
                  Available Slots
                </p>
              </div>
              <TimeSlot />
              <TimeSlot />
              <TimeSlot />
              <TimeSlot />
            </div>
          </div>
          <div className="col-span-12 xl:col-span-3">
            <div className="border p-5 border-metal-200 rounded-md flex  flex-col gap-y-3">
              <div className="h-20 w-20 mx-auto rounded-full border-2 border-slate-200 flex items-center justify-center">
                <User size={40} className="text-slate-400" />
              </div>

              <div className="space-y-2.5">
                <p className="w-full block py-2.5 px-4 bg-slate-100 rounded-md font-medium text-sm text-slate-400">
                  John Doe
                </p>
                <p className="w-full block py-2.5 px-4 bg-slate-100 rounded-md font-medium text-sm text-slate-400">
                  johndoe@example.com
                </p>
                <p className="w-full block py-2.5 px-4 bg-slate-100 rounded-md font-medium text-sm text-slate-400">
                  +1 123 456 789
                </p>
                <p className="w-full block py-2.5 px-4 bg-slate-100 rounded-md font-medium text-sm text-slate-400">
                  123 Main St, Anytown USA
                </p>
              </div>
              <div className="flex items-center justify-end">
                <Button size="sm">Logout</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
