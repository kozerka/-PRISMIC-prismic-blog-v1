export const extractUniqueMonthsAndYears = posts => {
	const uniqueMonths = new Set();
	const uniqueYears = new Set();

	posts.forEach(post => {
		const postDate = new Date(post.data.date);
		const postMonth = postDate.toLocaleString('default', { month: 'long' });
		const postYear = postDate.getFullYear();

		uniqueMonths.add(postMonth);
		uniqueYears.add(postYear);
	});

	return { months: [...uniqueMonths], years: [...uniqueYears] };
};
