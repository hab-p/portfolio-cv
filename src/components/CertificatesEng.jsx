import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CertificatesEng({ isDarkMode }) {
	const certificates = [
		'/certificate-01.png',
		'/certificate-02.png',
		'/certificate-03.png',
		'/certificate-04.png',
		'/certificate-05.png',
		'/certificate-06.png',
		'/certificate-07.png',
		'/certificate-08.png',
	];

	return (
		<section
			id="certificates"
			className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
		>
			<div className="container mx-auto px-4 text-center">
				<h2
					className={`text-4xl font-bold mb-4 ${
						isDarkMode ? 'text-white' : 'text-black'
					}`}
				>
					Certificates
				</h2>
				<p
					className={`text-lg mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
				>
					Here are some of the certificates I have earned:
				</p>

				<Swiper
					modules={[Navigation, Pagination, A11y, Autoplay]}
					spaceBetween={24}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					navigation
					pagination={{ clickable: true }}
					autoplay={{ delay: 2500, disableOnInteraction: false }}
					className="!pb-10"
				>
					{certificates.map((src, idx) => (
						<SwiperSlide key={idx}>
							<img
								src={src}
								alt={`Certificate ${idx + 1}`}
								className="w-full h-80 object-cover rounded shadow-lg hover:scale-105 transition-transform duration-300"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default CertificatesEng;

CertificatesEng.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
