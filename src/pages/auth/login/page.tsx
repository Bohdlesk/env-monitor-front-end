import {LoginForm} from "@/components/auth/login-from.tsx";
import AuthLayout from "@/pages/auth/layout.tsx";

function LoginPage() {
    return (
        <>
            <AuthLayout children={<LoginForm/>}/>
        </>
    );
}

export default LoginPage;