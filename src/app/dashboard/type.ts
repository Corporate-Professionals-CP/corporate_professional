import { z } from "zod";

export const PostSchema = z.object({
  title: z.string(),
  content: z.string().min(10),
  post_type: z.string(),
  //   visibility: z.string(),
  tags: z.array(z.string()),
  tag: z.string(),
});

export type TPostSchema = z.infer<typeof PostSchema>;
