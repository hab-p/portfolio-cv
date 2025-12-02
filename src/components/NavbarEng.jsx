import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { Switch } from '@headlessui/react';
import PropTypes from 'prop-types';
import { IoMenu, IoClose } from 'react-icons/io5';

function NavbarEng({ isEnglish, onLanguageChange, toggleTheme, isDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
        <nav
            className={`p-4 sticky w-full top-0 z-50 ${
                isDarkMode ? 'bg-gray-950' : 'bg-gray-200'
            } overflow-x-hidden relative`}
            id="navbar"
        >
            <div className="container mx-auto flex justify-between items-center">
				<a
					href="#"
					className={`${
						isDarkMode ? 'text-white' : 'text-black'
					} text-2xl font-bold`}
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
                        <span translate="no" className={`${isDarkMode ? 'text-white' : 'text-black'} mr-2 text-sm`}>
                            {isEnglish ? 'Spanish' : 'English'}
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
                        className={`${isDarkMode ? 'text-gray-300' : 'text-black'} hover:${
                            isDarkMode ? 'text-white' : 'text-gray-700'
                        }`}
                    >
                        About Me
                    </a>
                    <a
                        href="#skills"
                        className={`${isDarkMode ? 'text-gray-300' : 'text-black'} hover:${
                            isDarkMode ? 'text-white' : 'text-gray-700'
                        }`}
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className={`${isDarkMode ? 'text-gray-300' : 'text-black'} hover:${
                            isDarkMode ? 'text-white' : 'text-gray-700'
                        }`}
                    >
                        Projects
                    </a>
                    <a
                        href="#certificates"
                        className={`${isDarkMode ? 'text-gray-300' : 'text-black'} hover:${
                            isDarkMode ? 'text-white' : 'text-gray-700'
                        }`}
                    >
                        Certificates
                    </a>
                    <a
                        href="#contact"
                        className={`${isDarkMode ? 'text-gray-300' : 'text-black'} hover:${
                            isDarkMode ? 'text-white' : 'text-gray-700'
                        }`}
                    >
                        Contact
                    </a>
                    <div className="flex items-center ml-2">
                        <span translate="no" className={`${isDarkMode ? 'text-white' : 'text-black'} mr-2 text-sm`}>
                            {isEnglish ? 'Spanish' : 'English'}
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
                <>
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-black/40 md:hidden z-40"
                />
                <div
                    className={`fixed inset-x-0 top-16 md:hidden z-50 w-full border-t ${
                        isDarkMode
                            ? 'bg-gray-950 text-white border-gray-800'
                            : 'bg-gray-200 text-black border-gray-300'
                    } max-h-[calc(100vh-64px)] overflow-y-auto`}
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
                            About Me
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
                            Skills
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
                            Projects
                        </a>
                        <a
                            href="#certificates"
                            className={`${
                                isDarkMode
                                    ? 'text-gray-300 hover:text-white'
                                    : 'text-gray-700 hover:text-black'
                            } py-2`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Certificates
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
                            Contact
                        </a>
                    </div>
                </div>
                </>
            )}
        </nav>
    );
}

export default NavbarEng;

NavbarEng.propTypes = {
    isEnglish: PropTypes.bool.isRequired,
    onLanguageChange: PropTypes.func.isRequired,
    toggleTheme: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};
