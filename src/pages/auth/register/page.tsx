import {RegisterForm} from "@/components/auth/register-form.tsx";
import AuthLayout from "@/pages/auth/layout.tsx";

function RegisterPage() {
    return (
        <>
            <AuthLayout children={<RegisterForm/>}/>
        </>
    );
}

export default RegisterPage;