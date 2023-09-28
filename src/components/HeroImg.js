import heroImg from '../assets/img/blogHero.jpg';

const HeroImg = () => {
	return (
		<div className={'position-relative'}>
			<img
				src={heroImg}
				className={'hero-image w-100'}
				alt={'Hero - working with coffee with beautiful view on mountains'}
			/>
			<div
				className={
					'position-absolute top-50 start-50 w-100 text-center text-white p-3 translate-middle text center hero-text'
				}
			>
				<h1 className={'hero-title'}>Welcome to my blog</h1>
				<p className={'hero-subtitle'}>Exploring the Infinite World of Everything</p>
			</div>
		</div>
	);
};

export default HeroImg;
