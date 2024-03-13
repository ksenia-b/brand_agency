import { useState } from "react";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState("Please select a valid file");

    const handleFileChange = e => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            setError(false);
        }
    };

    const handleError = () => {
        setError(true);
    };

    return (
        <div>
            <label
                className={`flex items-center ${
                    error ? "border-red-400" : "border-black-600"
                } bg-green-300 hover:bg-green-400 border w-500px cursor-pointer rounded-lg mb-4`}
            >
        <span className={`flex-grow pl-4 ${error ? "text-red-500" : ""}`}>
          Upload my file
        </span>
                <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    placeholder={file ? file.name : "Upload your photo"}
                    value={file && file?.name}
                    disabled={!file}
                    className={`border ${
                        error ? "border-none text-red-400" : "border-gray-400"
                    } bg-white p-3 ml-4 flex-grow rounded-r-lg border-r-0 border-top-0 border-bottom-0`}
                />
            </label>
            {error && (
                <p className="text-red-400 italic">
                    *Error: Please select a valid file.
                </p>
            )}
        </div>
    );
};

export default FileUpload;
