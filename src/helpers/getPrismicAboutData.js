import * as prismicH from '@prismicio/helpers';
const getPrismicAboutData = aboutPage => {
	if (!aboutPage?.data) return {};

	const title = prismicH.asText(aboutPage.data.title);
	const text = prismicH.asText(aboutPage.data.text);
	const imageSrc = prismicH.asImageSrc(aboutPage.data.image);
	const imageAlt = aboutPage.data.image.alt || '';

	return {
		title,
		text,
		imageSrc,
		imageAlt,
	};
};
export default getPrismicAboutData;
