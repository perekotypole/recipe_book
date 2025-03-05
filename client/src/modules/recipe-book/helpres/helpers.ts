import { Filter } from "../recipe-book";

const getPageTitle = (filters: Filter) => {
	const { country, ingredient, category } = filters;

	if (country) return `Recipes from ${country}`;
	if (ingredient) return `Recipes with ${ingredient}`;
	if (category) return `${category} Recipes`;

	return "All Recipes";
};

export { getPageTitle };
