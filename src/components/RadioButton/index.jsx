import { useFormContext } from "react-hook-form";

export const RadioButton = ({ id, items, question, validation }) => {
    const {
        formState: { errors },
        register,
    } = useFormContext();
    const error = errors[id];

    return (
        <>
            <div className="flex flex-col gap-[10px]">
                <p className={"text-left"}>{question}</p>
                {items.map((item) => {
                    return (
                        <div className={"text-left"} key={item.id}>
                            <label className={"flex items-center"}>
                                <input
                                    className="mr-3 h-5 w-5"
                                    type="radio"
                                    name="flexRadioNoLabel"
                                    value={item.id}
                                    id="radioNoLabel01"
                                    defaultChecked={item?.default || false}
                                    {...register(id, validation)}
                                />{" "}
                                <span>{item.name}</span>
                            </label>
                        </div>
                    );
                })}

                {error && (
                    <div className="text-red-500 mt-1 text-xs">{error.message}</div>
                )}
            </div>
        </>
    );
};
