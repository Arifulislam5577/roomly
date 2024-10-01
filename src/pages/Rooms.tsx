import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import RoomCard from "../components/shared/RoomCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
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
import useDebounce from "../hooks/useDebounce";
import { useGetAllRoomQuery } from "../redux/api/roomApi";
import { TError, TRoom } from "../types/global.type";

const Rooms = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("");
  const [price, setPrice] = useState([0, 1000]);
  const [capacity, setCapacity] = useState([0, 1000]);

  const searchString = useDebounce(query, 500);
  const { data, isLoading, isError, error } = useGetAllRoomQuery({
    page,
    keyword: searchString,
    price,
    capacity,
    sort,
  });

  const metadata = data?.data.meta;
  const roomData = data?.data?.data;
  const highestPrice = data?.data?.meta?.highestPrice;
  const lowestPrice = data?.data?.meta?.lowestPrice;
  const highestCapacity = data?.data?.meta?.highestCapacity;
  const lowestCapacity = data?.data?.meta?.lowestCapacity;
  const handleReset = () => {
    setPage(1);
    setQuery("");
    setSort("");
    setPrice([0, 1000]);
    setCapacity([0, 1000]);
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-12 items-start xl:gap-y-0 gap-y-8">
          <div className="xl:col-span-3 col-span-12 space-y-3">
            <Input
              placeholder="Search Rooms"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-400">Capacity</p>
              <p className="text-sm font-medium text-slate-400 flex items-center gap-x-2.5">
                <span className="text-sm font-medium text-slate-400">
                  {capacity[0]}
                </span>
                <Slider
                  min={lowestCapacity || 0}
                  max={highestCapacity || 1000}
                  value={capacity}
                  defaultValue={[lowestCapacity || 0, highestCapacity || 1000]}
                  onValueChange={(value: number[]) => setCapacity(value)}
                />
                <span className="text-sm font-medium text-slate-400">
                  {capacity[1]}
                </span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-400">Price</p>
              <div>
                <p className="text-sm font-medium text-slate-400 flex items-center gap-x-2.5">
                  <span>${price[0]}</span>
                  <Slider
                    min={lowestPrice || 0}
                    max={highestPrice || 1000}
                    value={price}
                    defaultValue={[lowestPrice || 0, highestPrice || 1000]}
                    onValueChange={(value: number[]) => setPrice(value)}
                  />
                  <span>${price[1]}</span>
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-400">Sort Price</p>
              <Select value={sort} onValueChange={setSort}>
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
              <Button onClick={handleReset}>Reset All</Button>
            </div>
          </div>
          <div className="xl:col-span-9 col-span-12 grid grid-cols-12 gap-5 px-3">
            {isLoading &&
              [...Array(9).keys()].map((item) => (
                <div
                  key={item}
                  className="flex flex-col space-y-3 lg:col-span-4 md:col-span-6 col-span-12"
                >
                  <Skeleton className="h-[125px] w-full rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full " />
                    <Skeleton className="h-4 w-full " />
                    <Skeleton className="h-4 w-full " />
                    <Skeleton className="h-4 w-full " />
                  </div>
                </div>
              ))}
            {!isLoading &&
              !isError &&
              roomData?.map((room: TRoom) => {
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
                {(error as TError)?.data?.message}
              </p>
            )}

            <div
              data-status={roomData?.length === 0}
              className="col-span-12 flex justify-start data-[status=true]:block data-[status=false]:hidden"
            >
              <div className="p-5 border border-slate-200 rounded-md bg-slate-50 text-slate-900 font-medium">
                <p>No rooms found</p>
              </div>
            </div>
            <div
              data-status={roomData?.length === 0}
              className="col-span-12 flex justify-start data-[status=true]:hidden"
            >
              <Pagination className="lg:justify-end justify-center">
                <PaginationContent>
                  <PaginationItem>
                    <Button
                      variant={page === 1 ? "outline" : "ghost"}
                      disabled={page === 1}
                      onClick={() => setPage((prev) => prev - 1)}
                    >
                      <ChevronLeft size={16} /> Previous
                    </Button>
                  </PaginationItem>

                  {[...Array(metadata?.totalPages).keys()].map((item) => (
                    <PaginationItem
                      onClick={() => setPage(item + 1)}
                      key={item}
                    >
                      <Button variant={page === item + 1 ? "outline" : "ghost"}>
                        {item + 1}
                      </Button>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <Button
                      variant={
                        page === metadata?.totalPages ? "outline" : "ghost"
                      }
                      disabled={page === metadata?.totalPages}
                      onClick={() => setPage((prev) => prev + 1)}
                    >
                      Next
                      <ChevronRight size={16} />
                    </Button>
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
