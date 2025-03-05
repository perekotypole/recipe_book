"use server";

import qs from "qs";

import { Filter, RecipesList } from "../recipe-book";

const baseUrl = process.env.API_URL;

const getAllRecipes = async (filters: Filter) => {
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

export { getAllRecipes };
