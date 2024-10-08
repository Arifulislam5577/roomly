import { z } from "zod";

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
  amenities: z
    .string({ required_error: "amenities is required" })
    .min(1, "Amenities can not be empty"),
  image: z.any().refine((file) => file instanceof FileList && file.length > 0, {
    message: "Image is required",
  }),
});

const updateRoomSchema = z.object({
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
  amenities: z
    .string({ required_error: "amenities is required" })
    .min(1, "Amenities can not be empty"),
  image:
    z
      .any()
      .refine((file) => file instanceof FileList && file.length > 0)
      .optional() || undefined,
});

const slotSchema = z.object({
  room: z
    .string({ required_error: "Room id is required" })
    .min(1, "Room can not be empty"),
  date: z.date({ required_error: "Date is required" }),
  startTime: z
    .string({ required_error: "Start time is required" })
    .min(1, "Start time can not be empty"),
  endTime: z
    .string({ required_error: "End time is required" })
    .min(1, "End time can not be empty"),
});

const slotSearchSchema = z.object({
  date: z.date({ required_error: "Date is required" }),
  startTime: z
    .string({ required_error: "Start time is required" })
    .min(1, "Start time can not be empty"),
  endTime: z
    .string({ required_error: "End time is required" })
    .min(1, "End time can not be empty"),
});

export { roomSchema, slotSchema, slotSearchSchema, updateRoomSchema };
