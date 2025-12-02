import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import SplitType from 'split-type';

function Hero({ isDarkMode }) {
	const titleRef = useRef(null);
	const descRef = useRef(null);
	const link1Ref = useRef(null);
	const link2Ref = useRef(null);

useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile) {
        gsap.from([titleRef.current, descRef.current, link1Ref.current, link2Ref.current], {
            duration: 0.5,
            y: 40,
            autoAlpha: 0,
            stagger: 0.1,
            ease: 'power3.out',
        });
        return;
    }

    const splitTitle = new SplitType(titleRef.current, { types: 'words, chars' });
    const splitDesc = new SplitType(descRef.current, { types: 'words, chars' });
    const splitLink1 = new SplitType(link1Ref.current, { types: 'words, chars' });
    const splitLink2 = new SplitType(link2Ref.current, { types: 'words, chars' });

    const allWords = [
        ...splitTitle.words,
        ...splitDesc.words,
        ...splitLink1.words,
        ...splitLink2.words,
    ];

    gsap.from(allWords, {
        duration: 0.5,
        y: 60,
        autoAlpha: 0,
        stagger: 0.015,
        ease: 'power3.out',
    });

    const titleEl = titleRef.current;
    const descEl = descRef.current;
    const link1El = link1Ref.current;
    const link2El = link2Ref.current;

    return () => {
        if (titleEl) {
            titleEl.innerHTML = titleEl.textContent;
        }
        if (descEl) {
            descEl.innerHTML = descEl.textContent;
        }
        if (link1El) {
            link1El.innerHTML = link1El.textContent;
        }
        if (link2El) {
            link2El.innerHTML = link2El.textContent;
        }
    };
}, []);

    return (
        <div className="bg-cover bg-center h-auto md:h-screen text-black flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl mt-16 md:mt-0">
                <h1
                    ref={titleRef}
                    className={`text-4xl md:text-6xl font-bold mb-4 ${
                        isDarkMode ? 'text-white' : 'text-black'
                    }`}
                >
                    Bienvenido, soy Henry Alvarez
                </h1>

                <p
                    ref={descRef}
                    className={`text-lg md:text-2xl mb-10 ${
                        isDarkMode ? 'text-white' : 'text-black'
                    }`}
                >
                    Desarrollador Web Full Stack Junior con 2 años de experiencia en
                    proyectos con React, TypeScript, JavaScript, Node.js y Express.
                    Especializado en el desarrollo de interfaces dinámicas, componentes
                    reutilizables y gestión de estado. Además, manejo tecnologías y
                    frameworks para estilización como Bootstrap y Tailwind, transformando
                    diseños en experiencias interactivas. Siempre abierto a aprender
                    nuevas herramientas y mejorar mis habilidades.
                </p>
                <div className="mt-6 mb-12 flex justify-center gap-4 flex-wrap">
                    <a
                        ref={link1Ref}
                        href="#about"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Habilidades
                    </a>
                    <a
                        ref={link2Ref}
                        href="/henryalvarez.pdf"
                        download
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Descargar CV
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;

Hero.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
