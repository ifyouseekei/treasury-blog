import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import BlogItem from "./BlogItem";

export default function MyBlogs({ auth, blogs }) {
    const { delete: destroy } = useForm();

    return (
        <DefaultLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    My Blogs
                </h2>
            }
        >
            <Head title="Blogs" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Link href={route("blog.create")}>
                    <SecondaryButton>Add</SecondaryButton>
                </Link>
            </div>
            {blogs.data.map((blog) => {
                return <BlogItem auth={auth} blog={blog} key={blog.id}></BlogItem>;
            })}
        </DefaultLayout>
    );
}
