import { getPageTitle } from "~/modules/recipe-book/helpres/helpers";
import {
	type Filter,
	RecipeBookComponents,
} from "~/modules/recipe-book/recipe-book";
import { getAllRecipes } from "~/modules/recipe-book/requests/requests";

const HomePage = async ({
	searchParams,
}: {
	searchParams: Promise<Filter>;
}) => {
	const filters = await searchParams;
	const { list } = await getAllRecipes(filters);

	const pageTitle = getPageTitle(filters)

	return <RecipeBookComponents.RecipesList title={pageTitle} list={list} />;
};

export default HomePage;
