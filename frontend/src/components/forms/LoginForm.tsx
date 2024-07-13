import { useForm } from "react-hook-form";
import FormField from "../FormField";
import { FormData, LoginSchema } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData } from "~/types/LoginFormData";

interface Props {
    onSubmitForm: (data: LoginFormData) => void;
}

function LoginForm({ onSubmitForm }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<FormData>({
        resolver: zodResolver(LoginSchema), // Apply the zodResolver
    });

    const onSubmit = async (data: FormData) => {
        try {
            onSubmitForm(data)
        } catch (error) {
            alert("Submitting form failed!");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <FormField
                    type="email"
                    placeholder="Email"
                    name="email"
                    register={register}
                    error={errors.email}
                />

                <FormField
                    type="password"
                    placeholder="Password"
                    name="password"
                    register={register}
                    error={errors.password}
                />

                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default LoginForm;