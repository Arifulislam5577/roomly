import { zodResolver } from "@hookform/resolvers/zod";
import { UploadCloud } from "lucide-react";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { fileToBase64 } from "../../lib/fileToBase64";
import { useUpdateRoomMutation } from "../../redux/api/roomApi";
import { TErrorResponse, TRoom } from "../../types/global.type";
import { updateRoomSchema } from "../../validation/validationSchema";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface IUpdateRoomProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  room: TRoom;
}

const UpdateRoom: FC<IUpdateRoomProps> = ({ open, setOpen, room }) => {
  const [updateRoom, { isError, isSuccess, error, isLoading }] =
    useUpdateRoomMutation();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [upload, setUpload] = useState(false);

  const form = useForm<z.infer<typeof updateRoomSchema>>({
    resolver: zodResolver(updateRoomSchema),
    defaultValues: {
      name: room.name,
      roomNo: room.roomNo.toString(),
      floorNo: room.floorNo.toString(),
      capacity: room.capacity.toString(),
      pricePerSlot: room.pricePerSlot.toString(),
      amenities: room.amenities.join(","),
      image: undefined,
    },
  });

  const { control, handleSubmit, reset } = form;

  const onSubmit = handleSubmit(async (value) => {
    let base64Image = undefined;
    if (value.image) {
      base64Image = await fileToBase64(value.image[0]);
    }

    const roomData = {
      name: value.name,
      roomNo: +value.roomNo,
      floorNo: +value.floorNo,
      capacity: +value.capacity,
      pricePerSlot: +value.pricePerSlot,
      amenities: value.amenities.split(","),
      image: base64Image,
    };

    updateRoom({ roomId: room._id, roomData });
  });

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
      toast.success("Room updated successfully");
      reset();

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
    if (isError) {
      toast.error((error as TErrorResponse).data.message);
    }
  }, [error, isError, isSuccess, reset, setOpen]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 overflow-hidden">
        <div className="group">
          <img
            src={room.image}
            alt={room.name}
            className="rounded-t-lg h-[200px] w-full object-cover relative "
          />

          <button
            onClick={() => setUpload(!upload)}
            className="absolute group-hover:opacity-100 opacity-0 top-20 left-1/2 -translate-x-1/2 bg-slate-900 size-14 rounded-full flex items-center justify-center border-2 border-slate-100 transition-all duration-300"
          >
            <UploadCloud size={24} className="text-white" />
          </button>
        </div>
        <Form {...form}>
          <form onSubmit={onSubmit} className="px-6 pb-6">
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

            {upload && (
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
                        onChange={(e) => {
                          field.onChange(e.target.files);
                        }}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            )}

            <Button disabled={isLoading} type="submit" className="w-full">
              {isLoading ? "Updating..." : "Update Room"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateRoom;
