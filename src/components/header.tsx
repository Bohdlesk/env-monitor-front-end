import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

const Header = () => {
    return <div className="bg-white">
        <div className="border py-3 px-6">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                    </svg>
                    <span className="ml-2 font-semibold text-[#252C32]">Enviro Monitor</span>
                </div>

                <div className="ml-2 flex">
                    <div
                        className="ml-2 flex cursor-pointer items-center gap-x-1">
                        <Button variant="secondary" className="font-semibold w-full" size="lg" asChild>
                            <Link to="/auth/login">Login</Link>
                        </Button>
                    </div>
                    <div
                        className="ml-2 flex cursor-pointer items-center gap-x-1">
                        <Button variant="default" className="font-semibold w-full" size="lg" asChild>
                            <Link to="/auth/register">Register</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export {Header}