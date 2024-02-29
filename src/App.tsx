import {AppContextProvider} from "@/context/AppContext";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "@/pages/home";
import LoginPage from "@/pages/auth/login/page.tsx";
import RegisterPage from "@/pages/auth/register/page.tsx";

function App() {
    return (
        <>
            <AppContextProvider>
                <div className="container">
                    <Router>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='auth'>
                                <Route path='login' element={<LoginPage/>}/>
                                <Route path='register' element={<RegisterPage/>}/>
                            </Route>
                        </Routes>
                    </Router>
                </div>
            </AppContextProvider>
        </>
    )
}

export default App
