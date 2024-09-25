import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";

const registerSchema = z.object({
  name: z.string().min(4, "Name is required"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  pass: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
  phone: z
    .string({ required_error: "Phone number is required" })
    .min(11, "Phone number must be at least 11 characters"),
  address: z
    .string({ required_error: "Address is required" })
    .min(1, "Address is required"),
});

const Register = () => {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      pass: "",
      phone: "",
      address: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log("Form Data: ", data);
  });

  return (
    <section>
      <div className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="flex items-center justify-center">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Sign up to Celebration
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-slate-900 transition-all duration-200 hover:text-slate-800 focus:text-slate-800 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto py-10 px-10 sm:px-0">
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mb-3">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-3">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        {...field}
                        className="py-4"
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pass"
                render={({ field }) => (
                  <FormItem className="mb-3">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        type="password"
                        {...field}
                        className="py-4"
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="mb-3">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your phone number"
                        type="text"
                        {...field}
                        className="py-4"
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="mb-3">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123 State, Street, City"
                        type="text"
                        {...field}
                        className="py-4"
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Register;
