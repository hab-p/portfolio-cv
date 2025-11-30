import PropTypes from 'prop-types';

function Footer({ isDarkMode }) {
	return (
		<footer
			className={`py-4 ${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'
			}`}
		>
			<div className="container mx-auto text-center">
				<p>
					&copy; {new Date().getFullYear()} Henry Alvarez Portafolio. Todos los
					derechos reservados.
				</p>
			</div>
		</footer>
	);
}

export default Footer;

Footer.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
