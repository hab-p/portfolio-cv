import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { Switch } from '@headlessui/react';
import PropTypes from 'prop-types';
import { IoMenu, IoClose } from 'react-icons/io5';

function Navbar({ isEnglish, onLanguageChange, toggleTheme, isDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
        <nav
            className={`p-4 sticky w-full top-0 z-50 ${
                isDarkMode ? 'bg-gray-950' : 'bg-gray-200'
            } overflow-x-hidden relative`}
        >
            <div className="container mx-auto flex justify-between items-center">
				<a
					href="#"
					className={`text-2xl font-bold ${
						isDarkMode ? 'text-white' : 'text-black'
					}`}
				>
					Dev. Henry Alvarez
				</a>
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className={`${isDarkMode ? 'text-white' : 'text-black'}`}
                    >
                        {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                    </button>
                    <div className="flex items-center ml-2">
                        <span className={`${isDarkMode ? 'text-white' : 'text-black'} mr-2 text-sm`}>
                            Idioma
                        </span>
                        <Switch
                            checked={isEnglish}
                            onChange={onLanguageChange}
                            className={`${
                                isEnglish ? 'bg-blue-600' : 'bg-gray-300'
                            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                        >
                            <span
                                className={`${
                                    isEnglish ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className={`${isDarkMode ? 'text-white' : 'text-black'} ml-2`}
                    >
                        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                    </button>
                </div>
                <div className="hidden md:flex items-center space-x-4">
					<a
						href="#about"
						className={`block ${
							isDarkMode
								? 'text-gray-300 hover:text-white'
								: 'text-gray-700 hover:text-black'
						}`}
					>
						Sobre mí
					</a>
					<a
						href="#skills"
						className={`block ${
							isDarkMode
								? 'text-gray-300 hover:text-white'
								: 'text-gray-700 hover:text-black'
						}`}
					>
						Habilidades
					</a>
					<a
						href="#projects"
						className={`block ${
							isDarkMode
								? 'text-gray-300 hover:text-white'
								: 'text-gray-700 hover:text-black'
						}`}
					>
						Proyectos
					</a>
					<a
						href="#contact"
						className={`block ${
							isDarkMode
								? 'text-gray-300 hover:text-white'
								: 'text-gray-700 hover:text-black'
						}`}
					>
						Contacto
					</a>
                    <div className="flex items-center ml-2">
                        <span className={`${isDarkMode ? 'text-white' : 'text-black'} mr-2 text-sm`}>
                            Idioma
                        </span>
                        <Switch
                            checked={isEnglish}
                            onChange={onLanguageChange}
                            className={`${
                                isEnglish ? 'bg-blue-600' : 'bg-gray-300'
                            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                        >
                            <span
                                className={`${
                                    isEnglish ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className={`${isDarkMode ? 'text-white' : 'text-black'} ml-2`}
                    >
                        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div
                    className={`md:hidden absolute left-0 right-0 top-full z-40 border-t ${
                        isDarkMode
                            ? 'bg-gray-950 text-white border-gray-800'
                            : 'bg-gray-200 text-black border-gray-300'
                    }`}
                >
                    <div className="flex flex-col p-4 space-y-2">
                        <a
                            href="#about"
                            className={`${
                                isDarkMode
                                    ? 'text-gray-300 hover:text-white'
                                    : 'text-gray-700 hover:text-black'
                            } py-2`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Sobre mí
                        </a>
                        <a
                            href="#skills"
                            className={`${
                                isDarkMode
                                    ? 'text-gray-300 hover:text-white'
                                    : 'text-gray-700 hover:text-black'
                            } py-2`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Habilidades
                        </a>
                        <a
                            href="#projects"
                            className={`${
                                isDarkMode
                                    ? 'text-gray-300 hover:text-white'
                                    : 'text-gray-700 hover:text-black'
                            } py-2`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Proyectos
                        </a>
                        <a
                            href="#contact"
                            className={`${
                                isDarkMode
                                    ? 'text-gray-300 hover:text-white'
                                    : 'text-gray-700 hover:text-black'
                            } py-2`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Contacto
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

Navbar.propTypes = {
    isEnglish: PropTypes.bool.isRequired,
    onLanguageChange: PropTypes.func.isRequired,
    toggleTheme: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};
