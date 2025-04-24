import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CustomerTextarea } from '@/components/ui/custom-textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link,  } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Product',
        href: route('products.create'),
    },
];

export default function ProductForm() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                <div className="ml-auto">
                    <Link
                        as="button"
                        className="text-md flex w-fit cursor-pointer items-center rounded-lg bg-yellow-500 px-4 py-2 text-white hover:opacity-90"
                        href={route('products.index')}
                    >
                        <ArrowLeft className="me-2" /> Back to Products
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardContent>
                            <form className='flex flex-col gap-4' autoComplete='off'>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor='name'>Product Name</Label>
                                        <Input 
                                            id='name'
                                            name='name'
                                            type='text'
                                            placeholder='Product Name'
                                            autoFocus
                                            tabIndex={1}
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor='name'>Description</Label>
                                        <CustomerTextarea
                                            id='description'
                                            name='description'
                                            placeholder='Product description'
                                            autoFocus
                                            tabIndex={2}
                                            rows={3}
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor='name'>Price</Label>
                                        <Input 
                                            id='price'
                                            name='price'
                                            type='text'
                                            placeholder='Product Price'
                                            autoFocus
                                            tabIndex={3}
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor='name'>Featured Image</Label>
                                        <Input 
                                            id='featured_image'
                                            name='featured_image'
                                            type='text'
                                            placeholder='Product Featured Image'
                                            autoFocus
                                            tabIndex={4}
                                        />
                                    </div>

                                    <Button type="submit" className="mt-4 w-fit cursor-pointer" tabIndex={5}>
                                         Save
                                    </Button>


                                </div>
                            </form>
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>
        </AppLayout>
    );
}
