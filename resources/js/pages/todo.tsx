import { Head } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import { router } from "@inertiajs/react";

interface Todo{
    title: string;
    description: string;
}

interface Props {
    errors: {
      title?: string;
      description?: string;
    };
}

const TodoForm: React.FC<Props> = ({ errors }) => {
   
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
            onSuccess: () => {
              router.reload();
            },
            onError: (errors) => {
              console.error(errors.message || "Failed to submit post.");
            },
        });
    };

    return (
        <>
            <Head title="Todos"></Head>

            <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-25">
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input 
                    type="text" 
                    onChange={handleChange}
                    value={formData.title}
                    id="title"
                    name="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    {errors.title && (
                        <div className="text-red-500 text-sm mt-1">{errors.title}</div>
                    )}
                </div>
                
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea 
                    id="description" 
                    name="description" 
                    onChange={handleChange}
                    value={formData.description}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    {errors.description && (
                        <div className="text-red-500 text-sm mt-1">{errors.description}</div>
                    )}
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit
                </button>
            </form>

        </>
    );
}

export default TodoForm;