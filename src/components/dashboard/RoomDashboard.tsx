import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import AddNewRoom from "./AddNewRoom";

const RoomDashboard = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-slate-600">Room Dashboard</p>
        <AddNewRoom />
      </div>
      <div>
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
            <TableRow>
              <TableCell className="font-medium">Conference Room</TableCell>
              <TableCell>101</TableCell>
              <TableCell>09</TableCell>
              <TableCell>25</TableCell>
              <TableCell>$50</TableCell>
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
                    <DropdownMenuItem>Update</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RoomDashboard;
