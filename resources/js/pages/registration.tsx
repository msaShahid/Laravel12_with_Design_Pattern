import { Head } from "@inertiajs/react";

const UserRegistrationForm: React.FC = () => {
    return (
        <>
            <Head title="User Registration" />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full mt-1 max-w-3xl bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Create a New User</h2>
                    <form>
                        <div className="mb-6">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-1/4 p-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center transition duration-200 ease-in-out"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UserRegistrationForm;
