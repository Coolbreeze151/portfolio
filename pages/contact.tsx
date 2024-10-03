import React, { useState } from "react";
import { userData } from "../constants/user";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from 'react-hot-toast';

interface IFormInput {
    name: string;
    email: string;
    msg: string;
}

const title = `${userData.name}`;
const subtitle = "Contact";

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Thank You!</h2>
            <p className="mb-6 text-center text-gray-600">Thanks for your message! I'll get back to you whenever I can 😀</p>
            <p className="mb-6 text-center text-gray-600">Meanwhile, feel free to reach me through <a href="https://www.linkedin.com/in/ismahfaris-ismail/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">LinkedIn</a>.</p>
            <div className="flex justify-center">
                <button onClick={onClose} className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">Close</button>
            </div>
        </div>
    </div>
);

const Contact: NextPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function postFormBold(data: IFormInput): Promise<any> {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const response = await fetch(`${userData.formBold}`, requestOptions);
        return response.status;
    }

    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async data => {
        console.log(data);
        return toast.promise(postFormBold(data), {
            loading: "Loading",
            success: (data) => {
                setIsModalOpen(true);
                return "Message Received! ✅";
            },
            error: "Ooops! Something went wrong 😭"
        });
    }

    return (
        <Layout title="Contact" description={`${title} - ${subtitle}`}>
            <div className="flex flex-row justify-center items-start overflow-hidden">
                <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
                    <p className="font-body font-bold text-[60px]">Contact</p>
                </div>
            </div>
            <div className="flex flex-row justify-center items-start overflow-hidden">
                <form className="w-1/2 mt-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="relative z-0">
                            <input disabled={isSubmitting} {...register("name", { required: true, maxLength: 20 })} type="text"
                                className="dark:text-white peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                            <p className="text-red-500 text-sm">
                                {errors.name && "Name Required"}
                            </p>
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
                        </div>
                        <div className="relative z-0">
                            <input disabled={isSubmitting} {...register("email", {
                                required: "Email Required", maxLength: 20, pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })} type="text" className="dark:text-white peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
                            <p className="text-red-500 text-sm">
                                {errors.email?.message}
                            </p>
                        </div>
                        <div className="relative z-0 col-span-2">
                            <textarea
                                disabled={isSubmitting}
                                {
                                ...register(
                                    "msg",
                                    {
                                        required: "Message Required",
                                        maxLength: {
                                            value: 500,
                                            message: "Maximum 500 Characters!"
                                        }
                                    }
                                )}
                                rows={5}
                                className="dark:text-white peer block w-full appearance-none resize-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                placeholder=" ">
                            </textarea>
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
                            {
                                errors.msg ? <p className="text-red-500 text-sm">{errors.msg?.message}</p> : null
                            }
                        </div>
                        <button disabled={isSubmitting} type="submit" className="dark:bg-white dark:text-black col-span-2 m-7 rounded-md bg-black px-10 py-2 text-white font-black disabled:bg-grey-600">Send Message</button>
                    </div>
                </form>
            </div>
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </Layout>
    );
}

export default Contact;