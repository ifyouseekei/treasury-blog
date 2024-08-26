import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function AddBlogForm({ auth }) {
    const { data, setData, post, errors } = useForm({
        content: "",
        title: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("blog.store"));
    };

    return (
        <DefaultLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Add Blog
                </h2>
            }
        >
            <Head title="Add Blogs" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <InputLabel htmlFor="title" value="Title" />
                            <TextInput
                                id="title"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                            />

                            <InputError message={errors.title}/>
                        </div>

                        <div>
                            <InputLabel htmlFor="content" value="Content" />
                            <TextAreaInput
                                id="content"
                                className="w-full min-h-96"
                                value={data.content}
                                onChange={(e) => setData('content', e.target.value)}
                            ></TextAreaInput>
                            <InputError message={errors.content}/>
                        </div>
                        <SecondaryButton className="m-3" type="submit">Add</SecondaryButton>
                        <Link href={route("blog.my-blogs")}>
                            <DangerButton>Cancel</DangerButton>
                        </Link>
                    </form>
                </div>
            </div>
        </DefaultLayout>
    );
}
