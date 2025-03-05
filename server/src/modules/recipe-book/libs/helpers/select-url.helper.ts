import { Filter } from "../types/filter.type";

const selectUrl = (baseUrl: string, filters: Filter): string => {
	if (filters.ingredient) {
		return `${baseUrl}/filter.php?i=${filters.ingredient}`;
	} else if (filters.country) {
		return `${baseUrl}/filter.php?a=${filters.country}`;
	} else if (filters.category) {
		return `${baseUrl}/filter.php?c=${filters.category}`;
	}

	return `${baseUrl}/search.php?s=${filters.search ?? ""}`;
};

export { selectUrl };
