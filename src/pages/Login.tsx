import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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

const Login = () => {
  const form = useForm({});
  return (
    <section>
      <div className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="flex items-center justify-center ">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Sign In to Account
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Create an account?{" "}
              <Link
                to="/register"
                title=""
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto py-10 px-10 sm:px-0">
          <Form {...form}>
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
                    />
                  </FormControl>
                  <FormMessage />
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
                    <Input placeholder="password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Login;
