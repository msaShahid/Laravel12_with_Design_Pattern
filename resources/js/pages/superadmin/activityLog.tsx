import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Activity Log',
        href: '/dashboard',
    },
];

export default function ActivityLog() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Activity Log" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1>Activity Log</h1>

               {/* Content */}
                <div className="relative max-w-full mx-auto 2xs:px-3 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 gap-3 bg-white shadow-lg 2xs:rounded-lg p-2">
                         <iframe
                            className='w-full h-[650px] border-none'
                            src='/admin/activity-log'
                            title='Log Viewer'></iframe>
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}
