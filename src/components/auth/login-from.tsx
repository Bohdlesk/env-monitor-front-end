"use client"

import CardWrapper from "@/components/auth/card-wrapper";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginSchema} from "@/schema";
import {z} from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

function LoginForm() {

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: '',
        }
    })

    function onSubmit(values: z.infer<typeof LoginSchema>) {
        console.log(values)
    }

    return (
        <CardWrapper
            label="Login to your account"
            title="Login"
            backButtonHref="/auth/register"
            backButtonLabel="Don't have an account? Register here."
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <FormField name="email" control={form.control}
                                   render={({field}) => (
                                       <FormItem>
                                           <FormLabel>Email</FormLabel>
                                           <FormControl>
                                               <Input placeholder="email@gmail.com" {...field} type="email" />
                                           </FormControl>
                                           <FormMessage/>
                                       </FormItem>)
                                   }/>

                        <FormField name="password" control={form.control}
                                   render={({field}) => (
                                       <FormItem>
                                           <FormLabel>Password</FormLabel>
                                           <FormControl>
                                               <Input placeholder="********" {...field} type="password" />
                                           </FormControl>
                                           <FormMessage/>
                                       </FormItem>)
                                   }/>

                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export {LoginForm}