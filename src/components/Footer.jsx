import Banner from '../assets/banner.jpg';

function Footer() {
    return (
        <footer className="p-4 bg-[#c48c23] md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <img src={Banner} alt="Logo" className="h-40 w-35" />
                </a>
                
                <div className="fslex justify-center items-center my-4">
                    <a href="https://www.instagram.com/xilesdemiabuela/?next=%2F" className="hover:underline text-gray-900 dark:text-white">INSTAGRAM</a>
                </div>
                
                <span className="text-sm text-black sm:text-center dark:text-gray-400">
                    © 2024 <a href="#" className="hover:underline">Xiles de mi Abuela</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
