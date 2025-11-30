import PropTypes from 'prop-types';
import { FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';

const SidebarTheme = ({ isDarkMode }) => {
	return (
		<div className={`fixed top-24 left-0 z-10`}>
			<div
				className={`flex flex-col space-y-4 ${isDarkMode ? 'dark' : 'light'}`}
			>
				<a
					href="https://www.linkedin.com/in/henry-alvarez-bustamante/"
					className="sidebar-icon"
				>
					<SiLinkedin size="28" />
				</a>
				<a href="https://github.com/HenryJrAlvarezBte" className="sidebar-icon">
					<FaGithub size="28" />
				</a>
				<a
					href="mailto:henry.alvarez.bustamante@gmail.com"
					className="sidebar-icon"
				>
					<FaEnvelope size="28" />
				</a>
				<a href="https://wa.me/5491137656318" className="sidebar-icon">
					<FaWhatsapp size="28" />
				</a>
			</div>
		</div>
	);
};

export default SidebarTheme;

SidebarTheme.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
