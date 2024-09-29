import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, CircleAlert, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import TimeSlot from "../components/shared/TimeSlot";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Skeleton } from "../components/ui/skeleton";
import { cn } from "../lib/utils";
import { useGetSlotByRoomIdQuery } from "../redux/api/slotApi";
import { useAppSelector } from "../redux/hooks";
import { TErrorResponse, TSlot, TSlotQuery } from "../types/global.type";
import { slotSearchSchema } from "../validation/validationSchema";

const Booking = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [query, setQuery] = useState<TSlotQuery>({
    roomId: "",
    date: "",
    startTime: "",
    endTime: "",
  });
  const { id } = useParams();
  const { data, isError, isLoading, error } = useGetSlotByRoomIdQuery(
    id ? { ...query, roomId: id } : query
  );

  const form = useForm({
    resolver: zodResolver(slotSearchSchema),
    defaultValues: {
      date: new Date(),
      startTime: "",
      endTime: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = handleSubmit((data) => {
    const { date, startTime, endTime } = data;

    setQuery({
      roomId: id!,
      date: format(date, "yyyy-MM-dd"),
      startTime,
      endTime,
    });
  });

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 xl:col-span-9 space-y-5">
            <Form {...form}>
              <form onSubmit={onSubmit}>
                <FormField
                  control={control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1 mb-3">
                      <FormLabel>Select Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center gap-5 mb-6">
                  <FormField
                    control={control}
                    name="startTime"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Select start time</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value || ""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select start time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[...Array(12).keys()].map((hour: number) => {
                              const formattedHour =
                                hour + 1 < 10
                                  ? `0${hour + 1}:00`
                                  : `${hour + 1}:00`;

                              return (
                                <SelectItem key={hour} value={formattedHour}>
                                  {formattedHour}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="endTime"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Select end time</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value || ""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select end time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[...Array(12).keys()].map((hour: number) => {
                              const formattedHour =
                                hour + 1 < 10
                                  ? `0${hour + 1}:00`
                                  : `${hour + 1}:00`;

                              return (
                                <SelectItem key={hour} value={formattedHour}>
                                  {formattedHour}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center justify-end">
                  <Button type="submit">Search</Button>
                </div>
              </form>
            </Form>

            {isLoading && (
              <div className="space-y-3">
                <Skeleton className="h-[50px] w-full rounded-xl" />
                <Skeleton className="h-[50px] w-full rounded-xl" />
                <Skeleton className="h-[50px] w-full rounded-xl" />
                <Skeleton className="h-[50px] w-full rounded-xl" />
                <Skeleton className="h-[50px] w-full rounded-xl" />
              </div>
            )}

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

            {query.roomId && !isError && !isLoading && (
              <div className="space-y-3">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    Available Slots
                  </p>
                </div>
                {data?.data?.length === 0 && <p>No slots available</p>}
                {data?.data?.map((slot: TSlot) => (
                  <TimeSlot key={slot._id} slot={slot} />
                ))}
              </div>
            )}
          </div>
          <div className="col-span-12 xl:col-span-3">
            <div className="border p-5 border-metal-200 rounded-md flex  flex-col gap-y-3">
              <div className="h-20 w-20 mx-auto rounded-full border-2 border-slate-200 flex items-center justify-center">
                <User size={40} className="text-slate-400" />
              </div>

              <div className="space-y-2.5">
                <p className="w-full block py-2.5 px-4 bg-slate-100 rounded-md font-medium text-sm text-slate-400">
                  {user?.name}
                </p>
                <p className="w-full block py-2.5 px-4 bg-slate-100 rounded-md font-medium text-sm text-slate-400">
                  {user?.email}
                </p>
                <p className="w-full block py-2.5 px-4 bg-slate-100 rounded-md font-medium text-sm text-slate-400">
                  {user?.phone}
                </p>
                <p className="w-full block py-2.5 px-4 bg-slate-100 rounded-md font-medium text-sm text-slate-400">
                  {user?.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
