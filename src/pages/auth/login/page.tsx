import {LoginForm} from "@/components/auth/login-from.tsx";
import AuthLayout from "@/pages/auth/layout.tsx";
import {Header} from "@/components/header.tsx";

function LoginPage() {
    return (
        <>
            <div className="flex-col">
                <Header/>
                <AuthLayout children={<LoginForm/>}/>
            </div>
        </>
    );
}

export default LoginPage;