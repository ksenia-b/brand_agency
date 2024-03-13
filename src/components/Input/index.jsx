import React from "react";

const Input = ({ name, id, type, htmlFor, value, onChange, helperText }) => {
    return(
        <div className="relative">
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                className={`font-roboto tracking-body-large w-[360px] h-[40px] px-4 text-base text-gray-900 bg-transparent rounded-[4px] border-[1px] border-[#D0CFCF] focus:outline-none focus:border-[#D0CFCF] peer`}
                required
            />
            <label
                htmlFor={htmlFor}
                className={`absolute text-base text-[#49454F] peer-focus:text-[#6750A4] duration-300 top-2 z-10 origin-[0] bg-white px-2 start-1 hover:cursor-text ${
                    value ? "top-[-0.25rem] scale-50 -translate-y-2" : "scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[-0.25rem] peer-focus:scale-50 peer-focus:-translate-y-2"
                }`}
            >
                <span className={"font-10"}>{helperText}</span>
                {name}
            </label>
        </div>

    )
}

export default Input