import {
  Building2,
  CircleAlert,
  Compass,
  Forward,
  Heart,
  Home,
  Users,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { buttonVariants } from "../components/ui/button";
import { Skeleton } from "../components/ui/skeleton";
import { useGetRoomQuery } from "../redux/api/roomApi";
import { TErrorResponse } from "../types/global.type";

const Room = () => {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useGetRoomQuery(id);

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-12 gap-8 items-start">
          {isError && (
            <div className="col-span-12">
              <div className="flex items-center gap-x-2.5 border p-4 rounded-lg border-red-500 bg-red-50">
                <CircleAlert className="w-5 h-5 text-red-500" />
                <p className="text-red-500">
                  {(error as TErrorResponse)?.data?.message}
                </p>
              </div>
            </div>
          )}
          {isLoading && (
            <div className="col-span-12 xl:col-span-6 grid grid-cols-12 gap-5">
              <div className="col-span-12">
                <Skeleton className="h-[450px] w-full rounded-xl" />
              </div>
              {[1, 2, 3].map((item) => (
                <div key={item} className="col-span-4">
                  <Skeleton className="h-[100px] rounded-xl" />
                </div>
              ))}
            </div>
          )}
          {isLoading && (
            <div className="col-span-12 xl:col-span-6 space-y-6">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div key={item} className="space-y-4">
                  <Skeleton className="h-[60px] rounded-xl w-full" />
                </div>
              ))}
            </div>
          )}
          {!isLoading && !isError && (
            <div className="col-span-12 xl:col-span-6 grid grid-cols-12 gap-5">
              <div className="col-span-12">
                <img
                  src={data?.data?.image}
                  alt="room"
                  className="rounded-xl w-full"
                />
              </div>
              <div className="col-span-4">
                <img
                  src={data?.data?.image}
                  alt="room"
                  className="rounded-xl "
                />
              </div>
              <div className="col-span-4">
                <img
                  src={data?.data?.image}
                  alt="room"
                  className="rounded-xl "
                />
              </div>
              <div className="col-span-4">
                <img
                  src={data?.data?.image}
                  alt="room"
                  className="rounded-xl "
                />
              </div>
            </div>
          )}
          {!isLoading && !isError && (
            <div className="col-span-12 xl:col-span-6 space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-medium text-slate-600">
                  {data?.data?.name}
                </h1>
                <div className="flex items-end gap-x-2.5">
                  <p className="text-4xl font-bold text-slate-900">
                    ${data?.data?.pricePerSlot}.00
                  </p>
                  <p className="text-xl font-normal text-slate-400">
                    (per slot)
                  </p>
                </div>
                <div className="max-w-md space-y-3">
                  <p className="text-slate-600 font-normal text-base">
                    Hotel Sea Moon is a 3-star property located in Cox's Bazar.
                    Among the facilities of this property are a restaurant, room
                    service and a 24-hour front desk, along with free WiFi
                    throughout the property. The hotel features family rooms.
                  </p>
                </div>
                <div className="flex items-center gap-x-3 border-y py-3">
                  <p className="flex items-center gap-x-2">
                    <Home size={20} className="text-slate-400" />
                    <span className="text-slate-400 font-normal text-sm ">
                      Room No: {data?.data?.roomNo}
                    </span>
                  </p>
                  <p className="flex items-center gap-x-2">
                    <Building2 size={20} className="text-slate-400" />
                    <span className="text-slate-400 font-normal text-sm">
                      Floor No: {data?.data?.floorNo}
                    </span>
                  </p>
                  <p className="flex items-center gap-x-2">
                    <Users size={20} className="text-slate-400" />
                    <span className="text-slate-400 font-normal text-sm ">
                      Capacity: {data?.data?.capacity}
                    </span>
                  </p>
                </div>
                <div className="space-x-3">
                  {data?.data?.amenities?.map((item: string) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
                <div className="border-y border-slate-200 py-3 flex items-center gap-x-8">
                  <button className="flex items-center gap-x-2.5 text-sm font-medium text-slate-600">
                    <Heart size={18} />
                    Add To Wishlist
                  </button>
                  <button className="flex items-center gap-x-2.5 text-sm font-medium text-slate-600">
                    <Compass size={18} />
                    Compare Other
                  </button>
                  <button className="flex items-center gap-x-2.5 text-sm font-medium text-slate-600">
                    <Forward size={18} />
                    Share Now
                  </button>
                </div>
                <div>
                  <p className="flex items-center text-sm gap-x-2 text-slate-400">
                    <CircleAlert size={18} />
                    <span>
                      All the slot available in this month. For more slot
                      booking request{" "}
                      <Link
                        to={"/contact-us"}
                        className="text-blue-500 hover:underline"
                      >
                        Contact Here
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
              <Link
                to={`/booking/${data?.data?._id}`}
                className={buttonVariants()}
              >
                Book Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Room;
