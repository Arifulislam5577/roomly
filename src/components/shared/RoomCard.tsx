import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { TRoom } from "../../types/global.type";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

const RoomCard = ({
  className = "col-span-3",
  room,
}: {
  className?: string;
  room: TRoom;
}) => {
  return (
    <div
      className={cn(
        "p-5 border border-slate-100 bg-white duration-300 transition-transform hover:translate-y-1 rounded-lg",
        className
      )}
    >
      <img src={room?.image} alt={room?.name} className="rounded-sm" />

      <div className="mt-4 text-left space-y-2.5">
        <p className="text-lg font-medium text-slate-900">{room?.name}</p>
        <p className="flex items-center text-sm justify-between font-normal text-slate-400">
          <span className="flex items-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="size-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
            <span>Capacity</span>
          </span>
          <Badge variant={"outline"}>{room?.capacity}</Badge>
        </p>
        <p className="flex items-center text-sm justify-between font-normal text-slate-400">
          <span className="flex items-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span>Price Per Slot</span>
          </span>
          <Badge variant={"outline"}>${room?.pricePerSlot}</Badge>
        </p>

        <Link
          to={`/rooms/${room?._id}`}
          className={cn(
            buttonVariants({ size: "sm", variant: "outline" }),
            "w-full"
          )}
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
