import PaginationLinks from "@/Components/PaginationLinks";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head, Link } from "@inertiajs/react";
import BlogItem from "./BlogItem";

export default function Blogs({ auth, blogs }) {
    return (
        <DefaultLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Blogs
                </h2>
            }
        >
            <Head title="Blogs" />
            {blogs.data.map((blog) => {
                return (
                    <BlogItem auth={auth} blog={blog} key={blog.id}/>
                );
            })}

            <PaginationLinks links={blogs.links}></PaginationLinks>
        </DefaultLayout>
    );
}
