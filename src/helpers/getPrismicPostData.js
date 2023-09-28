import * as prismicH from '@prismicio/helpers';

function getPrismicPostData(prismicPost) {
	if (!prismicPost || !prismicPost.data) {
		return {};
	}
	const title = prismicH.asText(prismicPost.data.title);
	const image = prismicH.asImageSrc(prismicPost.data.image);
	const imageLabel = prismicH.asText(prismicPost.data.image_label) || '';
	const date = prismicH.asDate(prismicPost.data.date);
	const formattedDate = date.toLocaleDateString();
	const author = prismicH.asText(prismicPost.data.author);
	const fullLongText = prismicH.asText(prismicPost.data.long_text);
	const description = fullLongText.substring(0, 200);
	const displayedDescription = fullLongText.length > 150 ? description + '...' : description;
	const longText = prismicPost.data.long_text;
	const slug = prismicPost.uid;

	return {
		title,
		image,
		imageLabel,
		date: formattedDate,
		author,
		description: displayedDescription,
		slug,
		longText,
	};
}

export default getPrismicPostData;
