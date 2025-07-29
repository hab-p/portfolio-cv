import React from 'react';

function Projects({ isDarkMode }) {
	const projects = [
		{
			title: 'LibVictorDB Web',
			description:
				'La web de una base de datos vectorial creada para proyectos de IA y RAG.',
			videoUrl: '/libvictordb-web.mp4',
			link: 'https://libvictor.org',
			github: 'https://github.com/HenryJrAlvarezBte/libvictordb',
		},
		{
			title: 'Booking Web',
			description:
				'Una página de reservas de hoteles que utiliza una API propia, permitiendo a los usuarios buscar y reservar alojamientos fácilmente.',
			videoUrl: '/booking-web.mp4',
			link: 'https://booking-app-henry-dev.vercel.app',
			github: 'https://github.com/HenryJrAlvarezBte/booking-app',
		},
		{
			title: 'Pokedex Web',
			description:
				'Una página web construida con la API de Pokédex, que permite a los usuarios buscar y visualizar información detallada sobre los Pokémon.',
			videoUrl: '/pokedex-web.mp4',
			link: 'https://pokedex-app-two-rho.vercel.app',
			github: 'https://github.com/HenryJrAlvarezBte/pokedex-app',
		},
		{
			title: 'Rick and Morty Web',
			description:
				'Una aplicación web para la serie Rick and Morty que utiliza su API pública, permitiendo filtrar y explorar personajes, ubicaciones y episodios.',
			videoUrl: '/rick-and-morty-web.mp4',
			link: 'https://rick-and-morty-app-web-blond.vercel.app',
			github: 'https://github.com/HenryJrAlvarezBte/rick-and-morty-app-web',
		},
	];

	return (
		<div
			id="projects"
			className={`py-20 text-center ${
				isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
			}`}
		>
			<div className="container mx-auto px-4">
				<h2
					className={`text-4xl font-bold mb-4 ${
						isDarkMode ? 'text-white' : 'text-black'
					}`}
				>
					Proyectos
				</h2>
				<p
					className={`text-lg mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
				>
					Aquí tienes algunos proyectos en los que he trabajado recientemente:
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
					{projects.slice(0, 3).map((project) => (
						<div
							key={project.title}
							className={`p-4 rounded shadow transform transition-transform duration-300 hover:scale-105 min-h-100 flex flex-col justify-between ${
								isDarkMode
									? 'bg-gray-900 hover:bg-gray-700'
									: 'bg-white hover:bg-gray-300'
							}`}
						>
							<video
								src={project.videoUrl}
								autoPlay
								loop
								muted
								playsInline
								className="h-80 w-full object-cover mb-4 rounded"
							/>
							<h3
								className={`text-2xl font-semibold mb-2 ${
									isDarkMode ? 'text-white' : 'text-black'
								}`}
							>
								{project.title}
							</h3>
							<p
								className={`text-lg mb-4 ${
									isDarkMode ? 'text-white' : 'text-black'
								}`}
							>
								{project.description}
							</p>
							<div className="flex space-x-2">
								<a
									href={project.link}
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1"
								>
									Ver Proyecto
								</a>
								<a
									href={project.github}
									className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex-1"
								>
									Ver Github
								</a>
							</div>
						</div>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3">
					<div className="md:col-start-2 md:col-span-1">
						<div
							className={`p-4 rounded shadow transform transition-transform duration-300 hover:scale-105 min-h-100 flex flex-col justify-between ${
								isDarkMode
									? 'bg-gray-900 hover:bg-gray-700'
									: 'bg-white hover:bg-gray-300'
							}`}
						>
							<video
								src={projects[3].videoUrl}
								autoPlay
								loop
								muted
								playsInline
								className="h-80 w-full object-cover mb-4 rounded"
							/>
							<h3
								className={`text-2xl font-semibold mb-2 ${
									isDarkMode ? 'text-white' : 'text-black'
								}`}
							>
								{projects[3].title}
							</h3>
							<p
								className={`text-lg mb-4 ${
									isDarkMode ? 'text-white' : 'text-black'
								}`}
							>
								{projects[3].description}
							</p>
							<div className="flex space-x-2">
								<a
									href={projects[3].link}
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1"
								>
									Ver Proyecto
								</a>
								<a
									href={projects[3].github}
									className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex-1"
								>
									Ver Github
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
