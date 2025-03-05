import axios from "axios";
import * as dotenv from "dotenv";

import { type Filter } from "./libs/types/filter.type";
import { type RecipesList } from "./libs/types/recipes-list.type";
import { selectUrl } from "./libs/helpers/select-url.helper";

dotenv.config();

const baseUrl = process.env.DB_BASE_URL;

const getRecipeList = async ({
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

export { getRecipeList };
