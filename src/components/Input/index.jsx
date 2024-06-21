import { useFormContext } from "react-hook-form";

export const Input = ({ id, type, label, helperText, validation }) => {
    const {
        formState: { errors },
        register,
    } = useFormContext();
    const error = errors[id];
    console.log();

    return (
        <div className="relative">
            <input
                type={type}
                placeholder={label}
                className={`font-roboto tracking-body-large text-gray-900 bg-transparent peer h-[54px] w-full rounded-[4px] border-[1px] border-[#D0CFCF] px-4 text-base focus:border-[#D0CFCF] focus:outline-none`}
                {...register(id, validation)}
            />

            {helperText ? (
                <div className="mt-1 pl-4 text-left text-xs text-[#7E7E7E]">
                    {helperText}
                </div>
            ) : null}
            {error ? (
                <div className="mt-1 pl-4 text-left text-xs text-red">
                    {error.message}
                </div>
            ) : null}
        </div>
    );
};
