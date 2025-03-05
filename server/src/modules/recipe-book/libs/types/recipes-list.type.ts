import { RecipeItem } from "./recipe-item.type";

type RecipesList = Array<
	Pick<RecipeItem, "idMeal" | "strMeal" | "strMealThumb">
>;

export { RecipesList };
