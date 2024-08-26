import { Link } from "@inertiajs/react";
import Buttons from "./Buttons";


export default function BlogItem({ auth, blog }) {
    return (
        <div className="py-5" key={blog.id}>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        <h2 className="text-3xl mb-2">
                            {blog.title} -{" "}
                            <span className="text-xl">
                                {" "}
                                by {blog.author.name}
                            </span>
                        </h2>
                        <p className="mb-5">{Date(blog.updated_at)}</p>
                        <p className="break-all text-2xl">
                            {blog.content.substring(0, 100)} ...
                        </p>
                        <Link href={route("blog.show", blog.id)} className="text-orange-800">
                            Read more ...
                        </Link>
                        <Buttons user={auth.user} blog={blog} />
                    </div>
                </div>
            </div>
        </div>
    );
}
