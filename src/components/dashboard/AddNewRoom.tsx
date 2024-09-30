import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { fileToBase64 } from "../../lib/fileToBase64";
import { useAddNewRoomMutation } from "../../redux/api/roomApi";
import { TErrorResponse } from "../../types/global.type";
import { roomSchema } from "../../validation/validationSchema";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const AddNewRoom = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [addNewRoom, { isLoading, isSuccess, isError, error }] =
    useAddNewRoomMutation();
  const form = useForm<z.infer<typeof roomSchema>>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      name: "",
      roomNo: "",
      floorNo: "",
      capacity: "",
      pricePerSlot: "",
      amenities: "",
      image: undefined,
    },
  });

  const { control, handleSubmit, reset, resetField } = form;

  const onSubmit = handleSubmit(async (value: z.infer<typeof roomSchema>) => {
    const base64Image = await fileToBase64(value.image[0]);

    const roomData = {
      name: value.name,
      roomNo: +value.roomNo,
      floorNo: +value.floorNo,
      capacity: +value.capacity,
      pricePerSlot: +value.pricePerSlot,
      amenities: value.amenities.split(","),
      image: base64Image,
    };

    addNewRoom(roomData);
  });

  useEffect(() => {
    if (isSuccess) {
      reset();
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      toast.success("Room added successfully");
    }
    if (isError) {
      toast.error((error as TErrorResponse)?.data?.message);
    }
  }, [error, isError, isSuccess, reset, resetField]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add New Room</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] w-full">
        <Form {...form}>
          <form onSubmit={onSubmit}>
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Room Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Room Name" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-5 mb-3">
              <FormField
                control={control}
                name="roomNo"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Room No.</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Room No." {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="floorNo"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Floor No.</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Floor No." {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center gap-5 mb-3">
              <FormField
                control={control}
                name="capacity"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Capacity</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Capacity" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="pricePerSlot"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>PricePerSlot</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="PricePerSlot"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={control}
              name="amenities"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Amenities</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Amenities" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="image"
              render={({ field }) => (
                <FormItem className="w-full mb-5">
                  <FormLabel>Room Image</FormLabel>
                  <FormControl>
                    <Input
                      ref={(ref) => {
                        fileInputRef.current = ref;
                        field.ref(ref);
                      }}
                      type="file"
                      accept="image/*"
                      placeholder="Select Image"
                      onChange={(e) => field.onChange(e.target.files)}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <Button disabled={isLoading} type="submit" className="w-full">
              {isLoading ? "Loading..." : "Add Room"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewRoom;
