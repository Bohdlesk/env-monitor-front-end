import {z} from "zod";
export const RegisterSchema = z.object({
    email: z.string().email({message: 'Please enter a valid email'}),
    name: z.string().min(1, {message: 'Please enter your name'}),
    password: z.string().min(8, {message: 'Password must be at least 8 characters long'}),
    confirmPassword: z.string().min(8, {message: 'Password must be at least 8 characters long'})
})

export const LoginSchema = z.object({
    email: z.string().email({message: 'Please enter a valid email'}),
    password: z.string().min(1,{message: 'Enter password'})
})