import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.svg';
import instagram from '../assets/instagram.svg';

function Header() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLinkClick = (hash) => {
        navigate('/', { replace: true }); // Resetea el hash
        setTimeout(() => {
            navigate(hash); // Cambia la URL para que tenga el hash
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 0); // Asegura que el navegador procese el cambio de hash
    };

    return (
        <nav className="bg-white dark:bg-gray-800 antialiased kaisei">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8 w-full">
                        <div className="shrink-0">
                            <a href="/" onClick={() => navigate('/')}>
                                <img src={logo} alt="Logo" className="h-32 w-32" />
                            </a>
                        </div>

                        <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-end w-full">
                            <li>
                                <a href="/" onClick={() => navigate('/')} className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                    Home
                                </a>
                            </li>
                            <li className="shrink-0">
                                <a
                                    onClick={() => handleLinkClick("/#informacion")}
                                    className="cursor-pointer flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                                >
                                    Información
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/xilesdemiabuela/?next=%2F" >
                                    <img src={instagram} alt="Logo" className="h-7 w-7" />
                                </a>
                            </li>
                            <li>
                                <a href="/cart" onClick={() => navigate('/cart')} className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                    Carrito
                                </a>
                            </li>
                        </ul>
                    </div>

                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-controls="ecommerce-navbar-menu-1"
                        aria-expanded={!isCollapsed}
                        className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
                    >
                        <span className="sr-only">
                            Open Menu
                        </span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                    </button>
                </div>

                <div
                    id="ecommerce-navbar-menu-1"
                    className={`${isCollapsed ? 'hidden' : 'block'} bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 px-4 mt-4`}
                >
                    <ul className="text-gray-900 text-sm font-medium dark:text-white space-y-3">
                        <li>
                            <a href="/" onClick={() => navigate('/')} className="hover:text-primary-700 dark:hover:text-primary-500">Home</a>
                        </li>
                        <li>
                            <a
                                onClick={() => handleLinkClick("/#informacion")}
                                className="hover:text-primary-700 dark:hover:text-primary-500 cursor-pointer"
                            >
                                Información
                            </a>
                        </li>
                        <li>
                            <a href="/cart" onClick={() => navigate('/cart')} className="hover:text-primary-700 dark:hover:text-primary-500">Carrito(1)</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
