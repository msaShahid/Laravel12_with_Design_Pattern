import { Head } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import { router } from "@inertiajs/react";
import {toast} from "sonner";

interface Todo{
    title: string;
    description: string;
}

interface Props {
    errors: {
      title?: string;
      description?: string;
    };
    todos?: Todo[] | null;
}
const TodoForm: React.FC<Props> = ({ errors,todos }) => {
    const todosList = todos ?? [];
   
    const [formData, setFormData] = useState<Todo>({
        title: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);

        const payload = new FormData();
        payload.append("title", formData.title);
        payload.append("description", formData.description);

        router.post("/todos", payload, {
            onSuccess: (response) => {
                toast.success('Todo has been created successfully!');
                if (response.props.success) {
                    setFormData({ title: '', description: '' }); 
                }
            },
            onError: (errors) => {
                console.error(errors.message || "Failed to submit post.");
            },
        });
    };

    return (
        <>
            <Head title="Todos"></Head>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    {/* Form Section */}
                    <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Create a New Todo</h2>

                    <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                        <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-4 transition duration-200 ease-in-out"
                        placeholder="Enter task title"
                        />
                        {errors.title && (
                            <div className="text-red-500 text-sm mt-1">{errors.title}</div>
                        )}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-4 transition duration-200 ease-in-out"
                        placeholder="Enter your task details..."
                        ></textarea>
                        {errors.description && (
                            <div className="text-red-500 text-sm mt-1">{errors.description}</div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-1/2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 text-center transition duration-200 ease-in-out"
                    >
                        Submit
                    </button>
                    </form>

                    {/* Table Section */}
                    <div className="mt-10">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Todo List</h3>
                        {todosList.length > 0 ? (
                            <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-100">
                                <th className="py-3 px-6 text-sm font-semibold text-left text-gray-700">Title</th>
                                <th className="py-3 px-6 text-sm font-semibold text-left text-gray-700">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todosList.map((todo, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-6 text-sm text-gray-700">{todo.title}</td>
                                    <td className="py-3 px-6 text-sm text-gray-700">{todo.description}</td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        ) : (
                            <div className="text-gray-500 text-center">No todos available.</div>
                        )}
                    </div>
                </div>
            </div>


        </>
    );
}

export default TodoForm;