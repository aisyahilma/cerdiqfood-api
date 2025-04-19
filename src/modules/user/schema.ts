import { z } from "zod";

export const UserUpdateSchema = z.object({
  name: z.string().optional(),
  bio: z.string().optional(),
});
