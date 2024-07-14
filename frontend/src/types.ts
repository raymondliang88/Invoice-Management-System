import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
    email: string;
    password: string;
};

export const LoginSchema: ZodType<FormData> = z
    .object({
        email: z.string().email(),
        password: z
            .string()
            .min(4, { message: "Password is too short" })
    })

export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
};

export type ValidFieldNames = "email" | "password";