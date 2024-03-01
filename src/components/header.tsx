import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

const Header = () => {
    return <div>
        <div className="border py-2 px-6 w-full">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                        </svg>
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