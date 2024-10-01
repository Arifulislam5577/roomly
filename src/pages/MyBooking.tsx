import { Badge } from "../components/ui/badge";
import { Skeleton } from "../components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useGetUserBookingQuery } from "../redux/api/bookingApi";
import { TBooking, TError } from "../types/global.type";

const MyBooking = () => {
  const { data, isError, error, isLoading, isSuccess } = useGetUserBookingQuery(
    {}
  );
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {isLoading && (
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <Skeleton key={item} className="h-10 w-full" />
            ))}
          </div>
        )}

        {!isLoading && isSuccess && !isError && data?.data?.length === 0 && (
          <div className="rounded-md border p-5 border-red-200 bg-red-50 text-red-500 font-medium">
            <p>No booking found</p>
          </div>
        )}
        {!isLoading && isSuccess && !isError && data?.data?.length > 0 && (
          <Table className="bg-white rounded-lg border border-slate-100">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Room Name</TableHead>
                <TableHead>User Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
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
                  <TableCell>
                    <Badge variant={"outline"}>{item?.isConfirmed}</Badge>
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
    </section>
  );
};

export default MyBooking;
