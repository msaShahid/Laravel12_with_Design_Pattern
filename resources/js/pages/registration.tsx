import React, { FormEventHandler, useState } from "react";
import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";



const UserRegistrationForm: React.FC = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone_number: ""
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [serverErrors, setServerErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); 
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
        if (!formData.password || formData.password.length < 5) newErrors.password = "Password must be at least 5 characters";
        if (!formData.phone_number) newErrors.phone_number = "Phone number is required";
        return newErrors;
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
       // console.log(formData);
        setIsSubmitting(true);

        const payload = new FormData();
        payload.append("name", formData.name);
        payload.append("email", formData.email);
        payload.append("password", formData.password);
        payload.append("phone_number", formData.phone_number);

         router.post("/users", payload, {
            onSuccess: () => {
                console.log('save');
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    phone_number: ""
                });
                setErrors({});
                setServerErrors({});
                setIsSubmitting(false);
            },
            onError: (errors) => {
                setServerErrors(errors); 
                console.error(errors);
                setIsSubmitting(false);
            },
        });


    };

    return (
        <>
            <Head title="User Registration" />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full mt-5 max-w-3xl bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Create a New User</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full p-2 bg-gray-50 border ${errors.name ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500`}
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            {serverErrors.name && <p className="text-red-500 text-sm mt-1">{serverErrors.name}</p>}
                            
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full p-2 bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500`}
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            {serverErrors.email && <p className="text-red-500 text-sm mt-1">{serverErrors.email}</p>}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full p-2 bg-gray-50 border ${errors.password ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500`}
                                placeholder="Enter your password"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            {serverErrors.password && <p className="text-red-500 text-sm mt-1">{serverErrors.password}</p>}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                            <input
                                type="tel"
                                id="phone_number"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                className={`w-full p-2 bg-gray-50 border ${errors.phone_number ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500`}
                                placeholder="Enter your phone number"
                            />
                            {errors.phone_number && <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>}
                            {serverErrors.phone_number && <p className="text-red-500 text-sm mt-1">{serverErrors.phone_number}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-1/4 p-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center transition duration-200 ease-in-out"
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UserRegistrationForm;
