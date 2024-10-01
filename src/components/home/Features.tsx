import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { useGetAllRoomQuery } from "../../redux/api/roomApi";
import { TError, TRoom } from "../../types/global.type";
import RoomCard from "../shared/RoomCard";
import { buttonVariants } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const Features = () => {
  const { data, isLoading, isError, error } = useGetAllRoomQuery({
    isFeatured: true,
  });
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-y-12 items-end gap-5 justify-between">
          <div className="col-span-12">
            <div className="text-center">
              <p className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Our Features List
              </p>
              <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>
          </div>

          {isLoading &&
            [1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col space-y-3 col-span-3">
                <Skeleton className="h-[125px] w-[250px] rounded-xl bg-white" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px] bg-white" />
                  <Skeleton className="h-4 w-[200px] bg-white" />
                  <Skeleton className="h-4 w-[200px] bg-white" />
                  <Skeleton className="h-4 w-[200px] bg-white" />
                </div>
              </div>
            ))}
          {!isLoading &&
            !isError &&
            data?.data?.data?.map((room: TRoom) => {
              return <RoomCard key={room._id} room={room} />;
            })}

          {isError && (
            <p className="col-span-12 text-red-500">
              {(error as TError)?.data?.message}
            </p>
          )}

          <div className="col-span-12 flex items-center justify-end">
            <Link to="/rooms" className={cn(buttonVariants({}))}>
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
