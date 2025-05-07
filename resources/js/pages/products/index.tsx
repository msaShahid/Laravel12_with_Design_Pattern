import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { CirclePlusIcon, Eye, Pencil, Trash2, X } from 'lucide-react';
import { useEffect } from 'react';
import {FlashMessage} from '@/types/flash-message';
import moment from 'moment';
import Swal from 'sweetalert2';
import { toast } from 'sonner';
import { Pagination } from '@/components/ui/pagination';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Products',
        href: '/products',
    },
];

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    featured_image: string;
    featured_image_name: string;
    created_at: string;
}
interface LinkProps {
    active: boolean;
    label: string;
    url: string | null;
}

interface ProductPaginatation {
    data : Product[];
    links: LinkProps[];
    from: number;
    to: number;
    total: number;
}
interface IndexProps {
    product_list: ProductPaginatation
}

export default function Index({product_list}:IndexProps ) {

    console.log(product_list);
    //console.log(usePage()); 
    const { flash } = usePage<FlashMessage>().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
        if (flash.error) {
            toast.error(flash.error);
        }
    }, [flash]);

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
                                <th className='p-2 border' >Create At</th>
                                <th className='p-2 border' >Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product_list.data.map((product, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2 text-center">{product.id}</td>
                                        <td className="border px-4 py-2 text-center">{product.name} </td>
                                        <td className="border px-4 py-2 text-center">{product.description} </td>
                                        <td className="border px-4 py-2 text-center">{product.price} </td>
                                        <td className="flex justify-center border px-4 py-2 text-center">
                                            {product.featured_image && (
                                                <img 
                                                src={`/storage/${product.featured_image}`} 
                                                alt={product.name} 
                                                className="h-16 w-20 rounded-lg object-cover" />
                                            )}
                                        </td>
                                        <td className="border px-4 py-2 text-center">
                                            { moment(product.created_at).format('YYYY-MM-DD')}
                                        </td>
                                        <td className="w-40 border px-4 py-2 text-center">
                                            <Link
                                                as="button"
                                                className="cursor-pointer rounded-lg bg-sky-600 p-2 text-white hover:opacity-90"
                                                href={route('products.show', product.id)}
                                            >
                                                <Eye size={18} />{' '}
                                            </Link>

                                            <Link
                                                as="button"
                                                className="ms-2 cursor-pointer rounded-lg bg-blue-600 p-2 text-white hover:opacity-90"
                                                href={route('products.edit', product.id)}
                                            >
                                                <Pencil size={18} />{' '}
                                            </Link>

                                            <Button
                                                className="ms-2 cursor-pointer rounded-lg bg-red-600 p-2 text-white"
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: 'Are you sure?',
                                                        text: "You won't be able to revert this!",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#d33',
                                                        cancelButtonColor: '#3085d6',
                                                        confirmButtonText: 'Yes, delete it!',
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            router.delete(route('products.destroy', product.id), {
                                                                preserveScroll: true,
                                                            });
                                                        }
                                                    });
                                                }}
                                            >
                                                <Trash2 size={18} />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <Pagination products={product_list}/>
            </div>
        </AppLayout>
    );
}
