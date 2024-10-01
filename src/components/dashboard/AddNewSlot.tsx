import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { cn } from "../../lib/utils";
import { useGetAllRoomQuery } from "../../redux/api/roomApi";
import { useCreateSlotMutation } from "../../redux/api/slotApi";
import { TErrorResponse, TRoom } from "../../types/global.type";
import { slotSchema } from "../../validation/validationSchema";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const AddNewSlot = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetAllRoomQuery({});
  const [addNewSlot, { isLoading, isError, error, isSuccess }] =
    useCreateSlotMutation();

  const form = useForm<z.infer<typeof slotSchema>>({
    resolver: zodResolver(slotSchema),
    defaultValues: {
      room: "",
      date: new Date(),
      startTime: "",
      endTime: "",
    },
  });

  const { control, handleSubmit, reset } = form;

  const onSubmit = handleSubmit((value: z.infer<typeof slotSchema>) => {
    const slotData = {
      room: value.room,
      date: format(value.date, "yyyy-MM-dd"),
      startTime: value.startTime,
      endTime: value.endTime,
    };

    addNewSlot(slotData);
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Slot created successfully");
      setOpen(false);
      reset({
        room: "",
        date: new Date(),
        startTime: "",
        endTime: "",
      });
    }
    if (isError) {
      toast.error((error as TErrorResponse)?.data?.message);
    }
  }, [isSuccess, isError, error, reset]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Add New Slot</Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={onSubmit}>
            <FormField
              control={control}
              name="room"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Select Room</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value || ""}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a room" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {data?.data?.data?.map((room: TRoom) => (
                        <SelectItem key={room._id} value={room._id}>
                          {room.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col mb-3">
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
            <FormField
              control={control}
              name="startTime"
              render={({ field }) => (
                <FormItem className="mb-3">
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
                      {[...Array(12).keys()].map((hour: number) => (
                        <SelectItem key={hour} value={(hour + 1).toFixed(2)}>
                          {(hour + 1).toFixed(2)}
                        </SelectItem>
                      ))}
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
                <FormItem className="mb-3">
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
                      {[...Array(12).keys()].map((hour: number) => (
                        <SelectItem key={hour} value={(hour + 1).toFixed(2)}>
                          {(hour + 1).toFixed(2)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isLoading} type="submit" className="w-full">
              {isLoading ? "Loading..." : "Add New Slot"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewSlot;
