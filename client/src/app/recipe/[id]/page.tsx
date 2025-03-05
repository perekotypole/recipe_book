import { notFound } from "next/navigation";
import { RecipeBookComponents } from "~/modules/recipe-book/recipe-book";
import {
	getAllRecipes,
	getRecipeById,
} from "~/modules/recipe-book/requests/requests";

const RecipePage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;

	const data = await getRecipeById(Number(id));
	if (!data) {
		return notFound();
	}

	const { item } = data;
	const { list } = await getAllRecipes({ category: item.strCategory });

	return (
		<RecipeBookComponents.RecipeDetails
			recipe={item}
			similarRecipes={list}
		></RecipeBookComponents.RecipeDetails>
	);
};

export default RecipePage;
