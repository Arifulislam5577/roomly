import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { buttonVariants } from "../components/ui/button";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { cn } from "../lib/utils";
import { useCreateBookingMutation } from "../redux/api/bookingApi";
import { TError } from "../types/global.type";

const Success = () => {
  const [open, setOpen] = useState(false);
  const [createBooking, { isError, error, isSuccess, data }] =
    useCreateBookingMutation();
  const [searchParams, setSearchParams] = useSearchParams();

  const slotId = searchParams.get("slot_id");
  const userId = searchParams.get("user_id");

  useEffect(() => {
    if (slotId && userId) {
      createBooking({ userId, slotId });
    }
  }, [createBooking, searchParams, slotId, userId]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Booking success");
      setSearchParams({
        slot_id: "",
        user_id: "",
      });
      setOpen(true);
    }

    if (isError) {
      toast.error((error as TError)?.data?.message);
    }
  }, [error, isError, isSuccess, searchParams, setSearchParams]);

  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="text-center space-y-4">
          <div className="text-4xl font-extrabold text-green-600 mb-6">
            🎉 Thank you for booking!
          </div>
          <p className="text-xl font-medium text-gray-800">
            Dear <span className="text-blue-600">{data?.data?.user?.name}</span>
            , your payment was{" "}
            <span className="text-green-600">successful</span>! 🎉
          </p>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner mt-4 space-y-2">
            <p className="text-lg text-gray-700 font-semibold">
              Booking Room:{" "}
              <span className="text-indigo-600">{data?.data?.room?.name}</span>
            </p>
            <p className="text-lg text-gray-700">
              Slot Time:{" "}
              <span className="text-indigo-600">
                {data?.data?.slot?.startTime} - {data?.data?.slot?.endTime}
              </span>
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            We're excited to host you. Feel free to reach out if you need any
            further assistance.
          </p>
          <Link to="/my-booking" className={cn(buttonVariants(), "mt-6")}>
            📅 See Your Booking
          </Link>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <div className="text-center space-y-4">
              <div className="text-4xl font-extrabold text-green-600 mb-6">
                🎉 Thank you for booking!
              </div>
              <p className="text-xl font-medium text-gray-800">
                Dear{" "}
                <span className="text-blue-600">{data?.data?.user?.name}</span>,
                your payment was{" "}
                <span className="text-green-600">successful</span>! 🎉
              </p>
              <div className="bg-gray-100 p-4 rounded-lg shadow-inner mt-4 space-y-2">
                <p className="text-lg text-gray-700 font-semibold">
                  Booking Room:{" "}
                  <span className="text-indigo-600">
                    {data?.data?.room?.name}
                  </span>
                </p>
                <p className="text-lg text-gray-700">
                  Slot Time:{" "}
                  <span className="text-indigo-600">
                    {data?.data?.slot?.startTime} - {data?.data?.slot?.endTime}
                  </span>
                </p>
              </div>
              <p className="text-gray-600 mt-4">
                We're excited to host you. Feel free to reach out if you need
                any further assistance.
              </p>
              <Link to="/my-booking" className={cn(buttonVariants(), "mt-6")}>
                📅 See Your Booking
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Success;
