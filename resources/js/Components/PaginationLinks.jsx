import { Link } from "@inertiajs/react";

export default function PaginationLinks({ links }) {
    return (
        <div>
            <nav className="mx-auto text-center">
                {links.map((link) => {
                    return (
                        <Link
                            preserveScroll
                            href={link.url}
                            className={`p-3 border-2 border-solid border-slate-800 ${
                                link.active ? "bg-slate-500" : "bg-slate-300"
                            }`}
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        ></Link>
                    );
                })}
            </nav>
        </div>
    );
}
