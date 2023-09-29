export const itemsPerPage = 4;

export const computePagination = (items, page) => {
	const currentPage = parseInt(page, 10) || 1;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const paginatedItems = items.slice(startIndex, endIndex);
	const totalPages = Math.ceil(items.length / itemsPerPage);

	return {
		paginatedItems,
		totalPages,
		currentPage,
	};
};
