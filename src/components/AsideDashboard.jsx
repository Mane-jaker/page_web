import out from '../assets/out.svg'

function AsideDashboard() {
    return (
        <aside class="w-40 fixed h-full bg-white border-r border-gray-200">
            <div class="py-5 px-3 h-full bg-white">
                <ul>
                    <li>
                        <a
                            href="#"
                            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 group"
                        >
                            <svg
                                aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span class="ml-3">Productos</span>
                        </a>
                    </li>
                </ul>
                <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200">
                    <li>
                        <a
                            href="#"
                            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                        >
                            <img src={out} alt="salir" className="w-6 h-6" />
                            <span class="ml-3">Salir</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default AsideDashboard