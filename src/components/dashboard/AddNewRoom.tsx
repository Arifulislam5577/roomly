import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const roomSchema = z.object({
  name: z
    .string({ required_error: "Room name is required" })
    .min(6, "Room name must be at least 6 characters"),
  roomNo: z
    .string({ required_error: "Room no. required" })
    .min(1, "Room no. can not be empty"),
  floorNo: z
    .string({ required_error: "Floor is required" })
    .min(1, "Floor can not be empty"),
  capacity: z
    .string({ required_error: "Capacity required" })
    .min(1, "Capacity can not be empty"),
  pricePerSlot: z
    .string({ required_error: "Price per slot is required" })
    .min(1, "Price can not be empty"),
  image: z.any().refine((file) => file instanceof FileList && file.length > 0, {
    message: "Image is required",
  }),
});

const AddNewRoom = () => {
  const [files, setFiles] = useState("");
  const handleFile = (acceptedFile: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result?.toString() ?? "";
      setFiles(base64String);
    };
    reader.readAsDataURL(acceptedFile);
  };
  const form = useForm<z.infer<typeof roomSchema>>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      name: "",
      roomNo: "",
      floorNo: "",
      capacity: "",
      pricePerSlot: "",
      image: undefined,
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = handleSubmit((value: z.infer<typeof roomSchema>) => {
    handleFile(value.image?.[0]);

    const roomData = {
      name: value.name,
      roomNo: +value.roomNo,
      floorNo: +value.floorNo,
      capacity: +value.capacity,
      pricePerSlot: +value.pricePerSlot,
      image: files,
    };

    console.log(roomData);
  });

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
              name="image"
              render={({ field }) => (
                <FormItem className="w-full mb-5">
                  <FormLabel>Room Image</FormLabel>
                  <FormControl>
                    <Input
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

            <Button type="submit" className="w-full">
              Add Room
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewRoom;
