import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  useDeleteRoomMutation,
  useGetAllRoomQuery,
} from "../../redux/api/roomApi";
import { TError, TRoom } from "../../types/global.type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
import AddNewRoom from "./AddNewRoom";
import UpdateRoom from "./UpdateRoom";

const RoomDashboard = () => {
  const [open, setOpen] = useState(false);

  const { data, isLoading, isError, error } = useGetAllRoomQuery({});
  const [
    deleteRoom,
    {
      isLoading: isLoadingDeleteRoom,
      isSuccess: isSuccessDeleteRoom,
      isError: isErrorDeleteRoom,
      error: errorDeleteRoom,
    },
  ] = useDeleteRoomMutation();

  useEffect(() => {
    if (isSuccessDeleteRoom) {
      toast.success("Room deleted successfully");
    }

    if (isErrorDeleteRoom) {
      toast.error((errorDeleteRoom as TError)?.data?.message);
    }
  }, [errorDeleteRoom, isErrorDeleteRoom, isSuccessDeleteRoom]);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-slate-600">Room Dashboard</p>
        <AddNewRoom />
      </div>
      <div>
        {isLoading && (
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <Skeleton key={item} className="h-10 w-full" />
            ))}
          </div>
        )}

        {!isLoading && (
          <Table className="bg-white rounded-lg border border-slate-100">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Room Name</TableHead>
                <TableHead>Room No.</TableHead>
                <TableHead>Floor No.</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>PricePerSlot</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data?.map((item: TRoom) => (
                <TableRow key={item._id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.roomNo}</TableCell>
                  <TableCell>{item.floorNo}</TableCell>
                  <TableCell>{item.capacity}</TableCell>
                  <TableCell>${item.pricePerSlot}</TableCell>
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
                        <button
                          className={
                            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full "
                          }
                          onClick={() => setOpen(true)}
                        >
                          Update
                        </button>
                        <UpdateRoom open={open} setOpen={setOpen} room={item} />
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          disabled={isLoadingDeleteRoom}
                          onClick={() => deleteRoom(item._id)}
                        >
                          {isLoadingDeleteRoom ? "Deleting..." : "Delete"}
                        </DropdownMenuItem>
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
    </div>
  );
};

export default RoomDashboard;
