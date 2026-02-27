import PropTypes from 'prop-types';
import { useState } from 'react';

function Projects({ isDarkMode }) {
	const [showModal, setShowModal] = useState(false);

	const projects = [
		{
			title: 'Ciber Club Web',
			description:
				'La página de Ciber Club donde se organizan torneos y eventos en vivo en ferias de la Ciudad de Buenos Aires.',
			videoUrl: '/ciber-club-web.mp4',
			link: 'https://www.ciber-club.org',
			github: 'https://github.com/hab-p/ciber-club-frontend',
		},
		{
			title: 'Solar Web Demo',
			description:
				'Participe en el DEMO de un proyecto de pagina web para ofrecer venta y servicios de energia solar donde poder comprar paneles solares con instalacion para tu hogar o negocio y productos parecidos, se uso Next para el Front y Nest para el Backend.',
			videoUrl: '/solar-web.mp4',
			isDemo: true,
		},
		{
			title: 'Notario Web Demo',
			description:
				'Participe en el DEMO de un proyecto de pagina web para notarios donde poder hacer todo tramite judiciales y penales de manera online se uso Next para el Front y Nest para el Backend.',
			videoUrl: '/notario-web-demo.mp4',
			isDemo: true,
		},
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
					{projects.map((project) => (
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
							<div className="flex space-x-2 justify-center">
								{project.isDemo ? (
									<button
										onClick={() => setShowModal(true)}
										className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
									>
										Demo
									</button>
								) : (
									<>
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1"
										>
											Ver Proyecto
										</a>
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex-1"
										>
											Ver Github
										</a>
									</>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			{showModal && (
				<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 backdrop-blur-sm p-4">
					<div
						className={`relative rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all scale-100 ${
							isDarkMode
								? 'bg-gray-800 border border-gray-700'
								: 'bg-white border border-gray-100'
						}`}
					>
						<button
							onClick={() => setShowModal(false)}
							className={`absolute top-4 right-4 p-1 rounded-full transition-colors ${
								isDarkMode
									? 'text-gray-400 hover:bg-gray-700 hover:text-white'
									: 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
							}`}
							aria-label="Cerrar"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						<div className="text-center mt-2">
							<div
								className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full mb-4 ${
									isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100'
								}`}
							>
								<svg
									className={`h-6 w-6 ${
										isDarkMode ? 'text-blue-400' : 'text-blue-600'
									}`}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>

							<h3
								className={`text-xl font-bold mb-2 ${
									isDarkMode ? 'text-white' : 'text-gray-900'
								}`}
							>
								Demo Privada
							</h3>

							<p
								className={`text-base mb-6 ${
									isDarkMode ? 'text-gray-300' : 'text-gray-500'
								}`}
							>
								No se puede ver el código ni la página porque es una DEMO y no
								es posible por ello.
							</p>

							<button
								onClick={() => setShowModal(false)}
								className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm transition-colors"
							>
								Entendido
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Projects;

Projects.propTypes = {
	isDarkMode: PropTypes.bool.isRequired,
};
