import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const MyBooking = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
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

          <TableBody></TableBody>
        </Table>
      </div>
    </section>
  );
};

export default MyBooking;
