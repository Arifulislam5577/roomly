import RoomCard from "../components/shared/RoomCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Skeleton } from "../components/ui/skeleton";
import { Slider } from "../components/ui/slider";
import { useGetAllRoomQuery } from "../redux/api/roomApi";
import { TError, TRoom } from "../types/global.type";

const Rooms = () => {
  const { data, isLoading, isError, error } = useGetAllRoomQuery({});
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-12 items-start xl:gap-y-0 gap-y-8">
          <div className="xl:col-span-3 col-span-12 space-y-3">
            <Input placeholder="Search Rooms" />
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-400">Capacity</p>
              <Slider defaultValue={[33]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-400">Price</p>
              <Slider defaultValue={[33]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-400">Sort Price</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="asc">High to Low</SelectItem>
                    <SelectItem value="dsc">Low to High</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-end">
              <Button>Reset All</Button>
            </div>
          </div>
          <div className="xl:col-span-9 col-span-12 grid grid-cols-12 gap-5 px-3">
            {isLoading &&
              [...Array(9).keys()].map((item) => (
                <div
                  key={item}
                  className="flex flex-col space-y-3 lg:col-span-4 md:col-span-6 col-span-12"
                >
                  <Skeleton className="h-[125px] w-full rounded-xl bg-white" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full bg-white" />
                    <Skeleton className="h-4 w-full bg-white" />
                    <Skeleton className="h-4 w-full bg-white" />
                    <Skeleton className="h-4 w-full bg-white" />
                  </div>
                </div>
              ))}
            {!isLoading &&
              !isError &&
              data?.data?.map((room: TRoom) => {
                return (
                  <RoomCard
                    key={room._id}
                    room={room}
                    className="lg:col-span-4 md:col-span-6 col-span-12"
                  />
                );
              })}
            {isError && (
              <p className="col-span-12 text-red-500">
                {(error as TError).data.message}
              </p>
            )}
            <div className="col-span-12 flex justify-start">
              <Pagination className="lg:justify-end justify-center">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" size={"default"} />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" size={"default"}>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" size={"default"} isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink size={"default"} href="#">
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext size={"default"} href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
