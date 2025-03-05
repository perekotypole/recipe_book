import axios from "axios";
import * as dotenv from "dotenv";

import { Filter } from "./libs/types/filter.type";
import { RecipeItem } from "./libs/types/recipe-item.type";

dotenv.config();

const baseUrl = process.env.DB_BASE_URL;

const getRecipeList = async ({
	filter,
}: {
	filter: Filter;
}): Promise<Array<RecipeItem>> => {
	const selectUrl = (f: Filter): string => {
		const isFiltered = Object.keys(filter).length !== 0;

		if (isFiltered) {
			return `${baseUrl}/search.php?s=${f.search ?? ""}`;
		}

		return `${baseUrl}/search.php?s=${f.search ?? ""}`;
	};

	const apiUrl = selectUrl(filter);

	console.log(apiUrl);

	const { data } = await axios.get(apiUrl);

	return data.meals as Array<RecipeItem>;
};

export { getRecipeList };
