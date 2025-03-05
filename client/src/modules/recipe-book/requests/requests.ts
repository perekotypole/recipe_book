"use server";

import qs from "qs";

import { Filter, RecipeItem, RecipesList } from "../recipe-book";

const baseUrl = process.env.API_URL;

const getAllRecipes = async (
	filters: Filter,
): Promise<{
	total: number;
	list: RecipesList;
}> => {
	const paramsQuery = {
		i: filters.ingredient,
		a: filters.country,
		c: filters.category,
	};
	const paramsStr = qs.stringify(paramsQuery, { encode: false });
	const url = `${baseUrl}/recipes?${paramsStr}`;

	const res = await fetch(url, {
		next: { revalidate: 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch recipes");
	}

	return (await res.json()) as {
		total: number;
		list: RecipesList;
	};
};

const getRecipeById = async (
	id: number,
): Promise<{
	item: RecipeItem;
} | null> => {
	const url = `${baseUrl}/recipe/${id}`;

	const res = await fetch(url, {
		next: { revalidate: 60 },
	});

	if (!res.ok) {
		if (res.status === 404) {
			return null;
		} else {
			throw new Error("Failed to fetch recipe details");
		}
	}

	return (await res.json()) as {
		item: RecipeItem;
	};
};

export { getAllRecipes, getRecipeById };
