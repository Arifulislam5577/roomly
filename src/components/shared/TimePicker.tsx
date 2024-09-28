import { FC } from "react";
import { Button } from "../ui/button";

interface TimePickerProps {
  time: {
    time: number;
    hour: number;
  };
  setTime: (statTime: { time: number; hour: number }) => void;
}

const TimePicker: FC<TimePickerProps> = ({ setTime, time }) => {
  return (
    <div className="flex items-start gap-x-5">
      <div className="flex-1">
        <p className="text-slate-400 font-normal text-sm mb-2">Hours</p>
        <div className="space-y-2 h-[200px] overflow-y-scroll">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <Button
              variant={"outline"}
              className="w-full"
              size={"sm"}
              key={i}
              onClick={() => setTime({ ...time, hour: i })}
            >
              {i}:00
            </Button>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-slate-400 font-normal text-sm mb-2">Minutes</p>
        <div className="space-y-2 h-[200px] overflow-y-auto">
          {[...Array(61).keys()].map((i) => (
            <Button
              variant={"outline"}
              className="w-full"
              size={"sm"}
              key={i}
              onClick={() => setTime({ ...time, time: i })}
            >
              {i < 10 ? `0${i}` : i}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
