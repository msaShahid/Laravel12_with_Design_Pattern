import { Link } from "@inertiajs/react"

interface LinkProps {
    active: boolean;
    label: string;
    url: string | null;
}

interface PaginationData {
    links: LinkProps[];
    from: number;
    to: number;
    total: number;
}

interface PaginationProps {
    products: PaginationData;

}

export const Pagination = ({ products } : PaginationProps) => {
    return (
        <div className="flex items-center justify-between mt-4">

            {/* Pagination Link */}
            <div className="flex gap-2">
                {products.links.map((link, index) => (
                    <Link
                        className={`px-3 py-2 border rounded ${link.active ? 'bg-gray-700 text-white' : ''}`}
                        href={link.url || '#'}
                        key={index}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        </div>
    )

}
