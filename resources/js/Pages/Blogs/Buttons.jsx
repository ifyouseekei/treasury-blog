import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
const Buttons = ({ user, blog }) => {
    const { delete: destroy } = useForm();
    if (user && user.id == blog.user_id) {
        return (
            <div>
                <Link href={route("blog.edit", blog.id)}>
                    <PrimaryButton className="m-3">Edit</PrimaryButton>
                </Link>
                <DangerButton
                    onClick={() => {
                        destroy(route("blog.destroy", blog.id));
                    }}
                >
                    Delete
                </DangerButton>
            </div>
        );
    }
    return;
};

export default Buttons;
