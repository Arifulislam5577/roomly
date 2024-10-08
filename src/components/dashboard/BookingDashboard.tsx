import { MoreHorizontal } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import {
  useGetBookingsQuery,
  useUpdateBookingMutation,
} from "../../redux/api/bookingApi";
import { TBooking, TError } from "../../types/global.type";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Skeleton } from "../ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const BookingDashboard = () => {
  const { data, isError, isLoading, isSuccess, error } = useGetBookingsQuery(
    {}
  );

  const [
    updateBooking,
    {
      isError: isErrorUpdate,
      isSuccess: isSuccessUpdate,
      isLoading: isLoadingUpdate,
      error: errorUpdate,
    },
  ] = useUpdateBookingMutation();

  useEffect(() => {
    if (isSuccessUpdate) {
      toast.success("Booking status update");
    }

    if (isErrorUpdate) {
      toast.error((errorUpdate as TError)?.data?.message);
    }
  }, [errorUpdate, isErrorUpdate, isSuccessUpdate]);

  return (
    <div>
      {isLoading && (
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <Skeleton key={item} className="h-10 w-full" />
          ))}
        </div>
      )}

      {!isLoading && isSuccess && !isError && (
        <Table className="bg-white rounded-lg border border-slate-100">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Room Name</TableHead>
              <TableHead>User Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data?.data?.map((item: TBooking) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium">
                  {item?.room?.name}
                </TableCell>
                <TableCell>{item?.user?.name}</TableCell>
                <TableCell>{item?.slot?.date}</TableCell>
                <TableCell>
                  {item?.slot?.startTime}-{item?.slot?.endTime}
                </TableCell>
                <TableCell>{item?.isConfirmed}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>

                      {["confirmed", "unconfirmed", "cancelled"].map(
                        (status) => (
                          <button
                            disabled={isLoadingUpdate}
                            key={status}
                            className={
                              "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full capitalize"
                            }
                            onClick={() => {
                              updateBooking({
                                id: item._id,
                                data: { isConfirmed: status },
                              });
                            }}
                          >
                            {isLoadingUpdate ? "loading..." : status}
                          </button>
                        )
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {isError && (
        <div className="text-red-500">
          <p>{(error as TError)?.data?.message}</p>
        </div>
      )}
    </div>
  );
};

export default BookingDashboard;
