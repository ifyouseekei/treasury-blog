import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head, Link } from "@inertiajs/react";
import Buttons from "./Buttons";

export default function Blog({ auth, blog }) {
    return (
        <DefaultLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {`Blog - ${blog.title}`}
                </h2>
            }
        >
            <Head title={`Blog - ${blog.title}`} />

            <div className="py-5" key={blog.id}>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
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
                                {blog.content}
                            </p>
                            <Buttons user={auth.user} blog={blog} />
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
