import { z } from 'zod';

export const RegisterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  firstName: z.string().min(1, { message: 'Please enter your first name' }),
  lastName: z.string().min(1, { message: 'Please enter your last name' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  confirmPassword: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
}).refine(schema => {
  return schema.password === schema.confirmPassword;
}, { message: 'Passwords dont match', path: ['confirmPassword'] })
  .refine(schema => {
    return schema.password === schema.confirmPassword;
  }, { message: 'Passwords dont match', path: ['password'] });

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z.string().min(1, { message: 'Enter password' }),
});