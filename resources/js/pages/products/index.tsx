import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { CirclePlusIcon, X } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Products',
        href: '/products',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">


                <div className="mb-4 flex w-full items-center justify-between gap-4">
                    <Input
                        type="text"
                        className="h-10 w-1/2"
                        placeholder="Search Product..."
                        name="search"
                    />

                    <Button className="h-10 cursor-pointer bg-red-600 hover:bg-red-500">
                        <X size={20} />
                    </Button>

                    <div className="ml-auto">
                        <Link
                            className="text-md flex cursor-pointer items-center rounded-lg bg-green-700 px-4 py-2 text-white hover:opacity-90"
                            as="button"
                            href={route('products.create')}
                        >
                            <CirclePlusIcon className="me-2" /> Add Product
                        </Link>
                    </div>
                </div>

                <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                    <table className='w-full table-auto'>
                        <thead>
                            <tr className='bg-gray-700 text-white'>
                                <th className='p-2 border' >#</th>
                                <th className='p-2 border' >Name</th>
                                <th className='p-2 border' >Description</th>
                                <th className='p-2 border' >Price</th>
                                <th className='p-2 border' >Featured Image</th>
                                <th className='p-2 border' >Featured Name</th>
                                <th className='p-2 border' >Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 text-center" >1</td>
                                <td className="border px-4 py-2 text-center" >Mobile</td>
                                <td className="border px-4 py-2 text-center" >PhoneX</td>
                                <td className="border px-4 py-2 text-center" >$500</td>
                                <td className="border px-4 py-2 text-center" ></td>
                                <td className="border px-4 py-2 text-center" ></td>
                                <td className="border px-4 py-2 text-center" ></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
