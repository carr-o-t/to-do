import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/features/auth/authSlice";
import { LoginSchema } from "../../lib/validations/auth";
import { Main } from "../../types";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isPending, startTransition] = useTransition();

  const form = useForm<Main.LoginT>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: Main.LoginT) => {
    startTransition(() => {
      dispatch(login(data.email));
      navigate("/tasks");
    });
  };

  return (
    <CardWrapper headerLabel="Welcome back!" headerHeading="Sign in">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div
            className="space-y-4 flex flex-col"
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john.doe@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div
            className=""
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "end",
              marginTop: "1rem",
            }}
          >
            <Button type="submit" className="w-full" disabled={isPending}>
              Login
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
