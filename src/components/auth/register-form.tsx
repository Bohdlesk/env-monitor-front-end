'use client';

import CardWrapper from '@/components/auth/card-wrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/schema';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { EnvMonitorApi } from '@/api/env-monitor.api.ts';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    setLoading(true);
    try {
      await EnvMonitorApi.post('/auth/register', {
        ...values,
      });
      navigate('/auth/login');
    } catch (error) {
      setLoading(true);
      console.log(error);
    }

  }


  return (
    <CardWrapper
      label="Create an account"
      title="Register"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account? Login here."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <FormField name="email" control={form.control}
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                             <Input placeholder="email@gmail.com" {...field} type="email" />
                           </FormControl>
                           <FormMessage />
                         </FormItem>)
                       } />

            <FormField name="firstName" control={form.control}
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>First name</FormLabel>
                           <FormControl>
                             <Input placeholder="John" {...field} />
                           </FormControl>
                           <FormMessage />
                         </FormItem>)
                       } />

            <FormField name="lastName" control={form.control}
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Last name</FormLabel>
                           <FormControl>
                             <Input placeholder="Doe" {...field} />
                           </FormControl>
                           <FormMessage />
                         </FormItem>)
                       } />

            <FormField name="password" control={form.control}
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Password</FormLabel>
                           <FormControl>
                             <Input placeholder="********" {...field} type="password" />
                           </FormControl>
                           <FormMessage />
                         </FormItem>)
                       } />

            <FormField name="confirmPassword" control={form.control}
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Confirm Password</FormLabel>
                           <FormControl>
                             <Input placeholder="********" {...field} type="password" />
                           </FormControl>
                           <FormMessage />
                         </FormItem>)
                       } />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Loading...' : 'Register'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}

export { RegisterForm };