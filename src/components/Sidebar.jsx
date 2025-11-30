import { FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';

const Sidebar = () => {
	return (
		<div className="fixed top-24 left-0 flex flex-col space-y-4 z-10">
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
	);
};

// SidebarIcon component removed as it was unused

export default Sidebar;
