import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

const Header = () => {
    return <div>
        <div className="border py-2 px-6 w-full">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img src="logo.svg" alt="Enviro Monitor" width="50" height="50"
                             className="d-inline-block text-center" />
                        <span className="ml-2 font-semibold text-[#252C32] text-center">Enviro Monitor</span>
                    </Link>
                </div>

                <div className="flex items-center">
                    <Button variant="secondary" className="font-semibold" size="default" asChild>
                        <Link to="/auth/login">Login</Link>
                    </Button>

                    <Button variant="default" className="font-semibold ml-2" size="default" asChild>
                        <Link to="/auth/register">Register</Link>
                    </Button>
                </div>
            </div>
        </div>
    </div>
}

export {Header}