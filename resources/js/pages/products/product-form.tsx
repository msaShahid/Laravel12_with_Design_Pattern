import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CustomerTextarea } from '@/components/ui/custom-textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm,  } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Product',
        href: route('products.create'),
    },
];

export default function ProductForm() {

    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        description: '',
        price: '',
        featured_image: null as File | null,
    });

    
    

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route('products.store'), {
            onSuccess: () => {
                console.log('save is done');
            }
        })
       // console.log('data :', data);
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target.files);
        if(e.target.files && e.target.files.length > 0){
            setData('featured_image', e.target.files[0]);
        }
    }

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
                            <form onSubmit={handleFormSubmit} className='flex flex-col gap-4' autoComplete='off'>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor='name'>Product Name</Label>
                                        <Input 
                                            id='name'
                                            name='name'
                                            onChange={(e) => setData('name',e.target.value)}
                                            value={data.name}
                                            type='text'
                                            placeholder='Product Name'
                                            autoFocus
                                            tabIndex={1}
                                        />
                                        <InputError message={errors.name}/>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor='description'>Description</Label>
                                        <CustomerTextarea
                                            id='description'
                                            name='description'
                                            onChange={(e) => setData('description',e.target.value)}
                                            value={data.description}
                                            placeholder='Product description'
                                            tabIndex={2}
                                            rows={3}
                                        />
                                        <InputError message={errors.description}/>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor='price'>Price</Label>
                                        <Input 
                                            id='price'
                                            name='price'
                                            onChange={(e) => setData('price',e.target.value)}
                                            value={data.price}
                                            type='text'
                                            placeholder='Product Price'
                                            tabIndex={3}
                                        />
                                        <InputError message={errors.price}/>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor='featured_image'>Featured Image</Label>
                                        <Input 
                                            id='featured_image'
                                            name='featured_image'
                                            onChange={handleFileUpload}
                                            type='file'
                                            placeholder='Product Featured Image'
                                            tabIndex={4}
                                        />
                                        <InputError message={errors.featured_image}/>
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
