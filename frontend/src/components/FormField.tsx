
import { FormFieldProps } from "../types";

const FormField: React.FC<FormFieldProps> = ({
    type,
    placeholder,
    name,
    register,
    error,
    valueAsNumber,
}) => (
    <>
        <div className="my-2 ">
            <input
                className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                type={type}
                placeholder={placeholder}
                {...register(name, { valueAsNumber })}
            />
            {error && <span className="text-red-800">{error.message}</span>}
        </div>
    </>
);
export default FormField;