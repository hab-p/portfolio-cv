import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setIsDarkMode(savedTheme === 'dark');
		} else {
			localStorage.setItem('theme', 'dark');
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = isDarkMode ? 'light' : 'dark';
		setIsDarkMode(!isDarkMode);
		localStorage.setItem('theme', newTheme);
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

export { ThemeProvider, useTheme };

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
