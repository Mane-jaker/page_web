import logo from '../assets/logo.svg';
import instagramLogo from '../assets/instagram.svg'; // Asegúrate de tener el logo de Instagram como SVG o PNG

function Footer() {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <img src={logo} alt="Logo" className="h-48 w-48" />
                </a>
                
                <div className="flex justify-center items-center my-4">
                    <img src={instagramLogo} alt="Instagram" className="h-6 w-6 mr-2" />
                    <a href="#" className="hover:underline text-gray-900 dark:text-white">Instagram</a>
                </div>
                
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024 <a href="#" className="hover:underline">Xiles de mi Abuela</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
