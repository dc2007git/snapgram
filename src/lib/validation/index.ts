import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Must be at least 2 characters' }), 
    username: z.string().min(2, { message: 'Must be at least 2 characters' }).max(50),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Must be at least 8 characters' }),
})

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Must be at least 8 characters' }),
})

export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string()
})