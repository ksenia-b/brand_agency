import { useFormContext } from "react-hook-form";
import { useState } from "react";

export const ButtonFileUpload = ({ id, validation }) => {
    const {
        formState: { errors },
        register,
        setValue,
        setError,
        clearErrors,
    } = useFormContext();
    const error = errors[id];

    const [fileName, setFileName] = useState("");

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const errorMessages = await validateFile(file);
        if (errorMessages.length === 0) {
            setValue(id, file);
            setFileName(file.name);
            clearErrors(id);
        } else {
            setValue(id, null);
            setFileName('');
            setError(id, { type: 'manual', message: errorMessages.join(', ') });
        }
    };

    const validateFile = async (file) => {
        const errorMessages = [];
        const validFormats = ['image/jpeg', 'image/jpg'];

        if (!validFormats.includes(file.type)) {
            errorMessages.push('Only JPG/JPEG files are allowed.');
        }

        if (file.size > 5 * 1024 * 1024) { // 5MB
            errorMessages.push('File size must not exceed 5MB.');
        }

        const image = new Image();
        const url = URL.createObjectURL(file);
        image.src = url;

        await new Promise((resolve) => {
            image.onload = () => {
                const { width, height } = image;
                URL.revokeObjectURL(url);
                if (width < 70 || height < 70) {
                    errorMessages.push('Image resolution must be at least 70x70px.');
                }
                resolve();
            };
        });

        return errorMessages;
    };

    return (
        <div className="mb-8">
            <label className={`mb-4 flex items-center`}>
                <span
                    className={`flex h-[54px] min-w-[83px] cursor-pointer items-center justify-center rounded-l border border-black `}
                >
                    Upload
                </span>
                <input
                    type="file"
                    hidden
                    {...register(id, validation)}
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    placeholder={"Upload your photo"}
                    value={fileName}
                    readOnly
                    className={`h-[54px] flex-grow items-center rounded-r border border-l-0 border-y-[#D0CFCF] border-r-[#D0CFCF] p-3 focus-visible:outline-none`}
                />
            </label>
            {error && (
                <div className="mb-5 mt-1 pl-4 text-left text-xs text-red">
                    {error.message}
                </div>
            )}
        </div>
    );
};
