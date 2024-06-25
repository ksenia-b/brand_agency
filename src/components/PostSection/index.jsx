import { useState, useEffect } from "react";
import axios from "axios";
import { useForm, FormProvider } from "react-hook-form";

import { Input, RadioButton, Button, ButtonFileUpload } from "..";
import { API_PATH } from "../../constants";


export const PostSection = () => {
    const methods = useForm({ mode: "onChange" });
    const {
        handleSubmit,
        formState: { errors, isValid },
    } = methods;

    console.log('errors, valid: ', errors, isValid)
    const [token, setToken] = useState(null);
    const [positions, setPositions] = useState(null);

    useEffect(() => {
        axios.get(`${API_PATH}positions`).then(({ data }) => {
            console.log("got data: ", data);
            setPositions(data.positions);
        });
    }, []);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.get(`${API_PATH}token`);
                setToken(response.data.token);
            } catch (error) {
                console.error("Error fetching token:", error);
            }
        };

        fetchToken();
    }, []);

    const submitHandler = async (data) => {
        const formData = new FormData();

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                formData.append(key, data[key]);
            }
        }

        console.log("submit handler = ", data);
        if (!token) {
            console.error("No token available for submission");
            return;
        }

        try {
            axios.post(`${API_PATH}/register`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            // console.log('User registered successfully:', response.data);
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    return (
        <div
            className={
                "mt-16 flex flex-col flex-wrap items-center justify-center gap-7 px-4 pt-[76px]  text-center md:px-8 lg:px-14 "
            }
        >
            <h2 className={"mb-[22px] text-4xl "}>Contact us</h2>
            <FormProvider {...methods}>
                <form
                    className={"m-x-auto mb-40 flex  w-full max-w-[380px] flex-col"}
                    onSubmit={handleSubmit(submitHandler)}
                >
                    <div className="mb-[26px] flex flex-col gap-[50px]">
                        <Input
                            type={"text"}
                            label={"Your name"}
                            value={"value"}
                            id={"name"}
                            validation={{
                                required: "Your name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters",
                                },
                                maxLength: {
                                    value: 60,
                                    message: "Name cannot exceed 60 characters",
                                },
                            }}
                        />
                        <Input
                            type={"email"}
                            label={"Email"}
                            value={"value"}
                            id={"email"}
                            validation={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address",
                                },
                            }}
                        />
                        <Input
                            type={"text"}
                            label={"Phone"}
                            helperText={"+38 (XXX) XXX - XX - XX"}
                            id={"phone"}
                            value={"value"}
                            validation={{
                                required: "Phone is required",
                                pattern: {
                                    value: /^\+380\d{9}$/,
                                    message:
                                        "Phone number must start with +380 and be 12 digits long",
                                },
                            }}
                        />
                    </div>

                    <div className="mb-12">
                        {positions ? (
                            <RadioButton
                                items={positions}
                                question={"Select your position"}
                                id={"position_id"}
                                validation={{ required: "Position is required" }}
                            />
                        ) : null}
                    </div>

                    <ButtonFileUpload id="photo" label="Upload your file" validation={{}} />

                    <div className="text-center">
                        <Button type="submit" disabled={!isValid}>
                            Sign up
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};
