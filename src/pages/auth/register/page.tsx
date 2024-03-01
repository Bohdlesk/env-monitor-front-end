import {RegisterForm} from "@/components/auth/register-form.tsx";
import AuthLayout from "@/pages/auth/layout.tsx";
import {Header} from "@/components/header.tsx";

function RegisterPage() {
    return (
        <>
            <div className="flex-col">
                <Header/>
                <AuthLayout children={<RegisterForm/>}/>
            </div>
        </>
    );
}

export default RegisterPage;