import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';


function Header() {
    // Estado para controlar si el menú está colapsado o no
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className="bg-white dark:bg-gray-800 antialiased kaisei">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8 w-full">
                        <div className="shrink-0">
                            <a href="#" title="" className="">
                                <img src={logo} alt="Logo" className="h-32 w-32" />
                            </a>
                        </div>

                        <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-end w-full">
                            <li>
                                <Link to="/" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                    Home
                                </Link>
                            </li>
                            <li className="shrink-0">
                                <a href="#" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                    Informacion
                                </a>
                            </li>
                            <li>
                                <Link to="/cart" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                    Carrito(1)
                                </Link>
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
                    <ul className="text-gray-900 dark:text-white text-sm font-medium dark:text-white space-y-3">
                        <li>
                            <Link to="/" className="hover:text-primary-700 dark:hover:text-primary-500">Home</Link>
                        </li>
                        <li>
                            <a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Informacion</a>
                        </li>
                        <li>
                            <Link to="/cart" className="hover:text-primary-700 dark:hover:text-primary-500">Carrito(1)</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
