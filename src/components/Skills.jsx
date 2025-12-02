import PropTypes from 'prop-types';

function Skills({ isDarkMode }) {
	const skills = [
		{ name: 'JavaScript' },
		{ name: 'React' },
		{ name: 'HTML' },
		{ name: 'CSS' },
		{ name: 'Node.js' },
		{ name: 'TypeScript' },
	];

	return (
		<div
			id="skills"
			className={`py-20 text-center ${
				isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
			}`}
		>
			<div className="container mx-auto px-4">
				<h2
					className={`text-4xl font-bold mb-4 ${
						isDarkMode ? 'text-white' : 'text-black'
					}`}
				>
					Habilidades
				</h2>
				<p
					className={`text-lg mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
				>
					Aquí tienes algunas de las tecnologías con las que he estado
					trabajando recientemente:
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{skills.map((skill) => (
						<div
							key={skill.name}
							className={`p-4 rounded shadow transform transition-all duration-1000 hover:scale-105 ${
								isDarkMode
									? 'bg-gray-950 hover:bg-gray-700 text-white'
									: 'bg-gray-300 hover:bg-gray-100 text-black'
							}`}
						>
                            <h3 translate="no" className="text-2xl font-semibold mb-2">{skill.name}</h3>
							<p className="text-lg">{skill.level}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Skills;

Skills.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
