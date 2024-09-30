import { format } from "date-fns";
import { Clock } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import { usePaymentMutation } from "../../redux/api/bookingApi";
import { useAppSelector } from "../../redux/hooks";
import { TError, TSlot } from "../../types/global.type";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const TimeSlot = ({ slot }: { slot: TSlot }) => {
  const [payment, { isLoading, error, data, isSuccess, isError }] =
    usePaymentMutation();
  const { user } = useAppSelector((state) => state.auth);

  const handlePayment = () => {
    payment({ userId: user?._id, slotId: slot._id });
  };

  useEffect(() => {
    if (isSuccess) {
      window.location.assign(data?.stripeUrl);
    }
    if (isError) {
      toast.error((error as TError)?.data?.message);
    }
  }, [data?.stripeUrl, error, isError, isSuccess]);

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
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm">Book Now</Button>
        </DialogTrigger>
        <DialogContent>
          <p className="text-xl font-medium text-slate-900">Bill To :</p>
          <div className="text-sm font-medium text-slate-900 space-y-2">
            <p>
              <span className="text-slate-400">Client Name :</span> {user?.name}
            </p>
            <p>
              <span className="text-slate-400">Client Email : </span>
              {user?.email}
            </p>
            <p>
              <span className="text-slate-400">Client Phone : </span>
              {user?.phone}
            </p>
            <p>
              <span className="text-slate-400">Billing Address : </span>
              {user?.address}
            </p>
          </div>
          <p className="text-xl font-medium text-slate-900">
            Slot & Room Information
          </p>

          <div className="text-sm font-medium text-slate-900 rounded-md justify-between flex py-2 border-y border-yellow-100 bg-yellow-100 px-3">
            <p>{slot.room?.name}</p>
            <p>${slot.room?.pricePerSlot}</p>
            <p>{slot.date}</p>
            <p>
              {slot.startTime}-{slot.endTime}
            </p>
          </div>

          <Button onClick={handlePayment} disabled={isLoading}>
            {isLoading ? "Loading..." : "Confirm Payment"}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TimeSlot;
