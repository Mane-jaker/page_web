import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import out from '../assets/out.svg';
import { auth } from '../components/firebaseConfig';

function AsideDashboard() {
    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <aside className="w-40 fixed h-full bg-white border-r border-gray-200">
            <div className="py-5 px-3 h-full bg-white">
                <ul>
                    <li>
                        <Link
                            to="dashboard"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 group"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="ml-3">Productos</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="pedidos"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 group"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v1H3V3zm0 3h14v10a1 1 0 01-1 1H4a1 1 0 01-1-1V6zm3 3a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="ml-3">Pedidos</span>
                        </Link>
                    </li>
                </ul>
                <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200">
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                        >
                            <img src={out} alt="salir" className="w-6 h-6" />
                            <span className="ml-3" onClick={handleLogout}>Salir</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default AsideDashboard;