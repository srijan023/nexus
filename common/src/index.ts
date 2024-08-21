import z from "zod";

export const userInfoSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string()
})

export const loginInfoSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export const blogInfoSchema = z.object({
  title: z.string(),
  content: z.string(),
})

export const updateBlogSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  id: z.string()
})

export type updateBlog = z.infer<typeof updateBlogSchema>
export type userInfo = z.infer<typeof userInfoSchema>
export type blogInfo = z.infer<typeof blogInfoSchema>
export type loginInfo = z.infer<typeof loginInfoSchema>;
