import { MoreHorizontal } from "lucide-react";
import { useGetAllSlotQuery } from "../../redux/api/slotApi";
import { TError, TSlot } from "../../types/global.type";
import { Button } from "../ui/button";
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
import AddNewSlot from "./AddNewSlot";

const SlotDashboard = () => {
  const { data, isLoading, isError, error } = useGetAllSlotQuery({});

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-slate-600">Slot Dashboard</p>
        <AddNewSlot />
      </div>

      {isLoading && (
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <Skeleton key={item} className="h-10 w-full" />
          ))}
        </div>
      )}

      {isError && (
        <div className="text-red-500">
          <p>{(error as TError)?.data?.message}</p>
        </div>
      )}
      <div>
        <Table className="bg-white rounded-lg border border-slate-100">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Room Name</TableHead>
              <TableHead>Room No.</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>End Time</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((item: TSlot) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium">{item.room.name}</TableCell>
                <TableCell>{item.room.roomNo}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.startTime}</TableCell>
                <TableCell>{item.endTime}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
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
                      >
                        Update
                      </button>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SlotDashboard;
