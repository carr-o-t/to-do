import { z } from "zod";

export const validateEmail = z.string().email();

export const LoginSchema = z.object({
  email: validateEmail,
});
