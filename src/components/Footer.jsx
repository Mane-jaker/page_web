import logo from '../assets/logo.svg';

function Footer() {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <img src={logo} alt="Logo" className="h-48 w-48" />
                </a>
                
                <div className="flex justify-center items-center my-4">
                    <a href="https://www.instagram.com/xilesdemiabuela/?next=%2F" className="hover:underline text-gray-900 dark:text-white">INSTAGRAM</a>
                </div>
                
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024 <a href="#" className="hover:underline">Xiles de mi Abuela</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
