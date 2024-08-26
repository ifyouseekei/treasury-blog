import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
const Buttons = ({ user, blog }) => {
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
