import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { cn } from "../../lib/utils";
import { useGetAllRoomQuery } from "../../redux/api/roomApi";
import { useUpdateSlotMutation } from "../../redux/api/slotApi";
import { TErrorResponse, TRoom, TSlot } from "../../types/global.type";
import { slotSchema } from "../../validation/validationSchema";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Dialog, DialogContent } from "../ui/dialog";
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

interface UpdateSlotProps {
  slot: TSlot;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const UpdateSlot: FC<UpdateSlotProps> = ({ slot, open, setOpen }) => {
  const { data } = useGetAllRoomQuery({});
  const [updateSlot, { isLoading, isError, error, isSuccess }] =
    useUpdateSlotMutation();

  const form = useForm<z.infer<typeof slotSchema>>({
    resolver: zodResolver(slotSchema),
    defaultValues: {
      room: slot.room._id,
      date: new Date(slot.date),
      startTime: slot.startTime,
      endTime: slot.endTime,
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

    updateSlot({ slotId: slot._id, slotData });
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
  }, [isSuccess, isError, error, reset, setOpen]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
                      {data?.data?.map((room: TRoom) => (
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
                        <SelectItem
                          key={hour}
                          value={
                            hour + 1 < 11 ? `0${hour + 1}:00` : `${hour + 1}:00`
                          }
                        >
                          {hour + 1 < 11 ? `0${hour + 1}:00` : `${hour + 1}:00`}
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
                        <SelectItem
                          key={hour}
                          value={
                            hour < 10 ? `0${hour + 1}:00` : `${hour + 1}:00`
                          }
                        >
                          {hour < 10 ? `0${hour + 1}:00` : `${hour + 1}:00`}
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

export default UpdateSlot;
