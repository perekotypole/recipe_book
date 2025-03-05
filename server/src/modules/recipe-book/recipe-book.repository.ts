import axios from "axios";
import * as dotenv from "dotenv";

import { type Filter } from "./libs/types/filter.type";
import { type RecipesList } from "./libs/types/recipes-list.type";
import { type RecipeItem } from "./libs/types/recipe-item.type";

import { selectUrl } from "./libs/helpers/select-url.helper";

dotenv.config();

const baseUrl = process.env.DB_BASE_URL;

const getRecipesList = async ({
	filters,
}: {
	filters: Filter;
}): Promise<RecipesList> => {
	const apiUrl = selectUrl(baseUrl, filters);
	const { data } = await axios.get(apiUrl);

	if (!Array.isArray(data.meals)) {
		return []
	}

	return data.meals as RecipesList;
};

const getRecipeById = async ({
	id,
}: {
	id: string;
}): Promise<RecipeItem | null> => {
	const apiUrl = `${baseUrl}/lookup.php?i=${id}`;
	const { data } = await axios.get(apiUrl);

	if (!Array.isArray(data.meals)) {
		return null
	}

	return data.meals[0] as RecipeItem;
};

export { getRecipesList, getRecipeById };
