import React from "react";

import { type RecipesList } from "../../types/types";
import { RecipeCard } from "../components";

type Props = {
	list: RecipesList;
};

const RecipesSidebar: React.FC<Props> = ({ list }) => {
	return (
		<div className="w-72 p-4 overflow-y-auto max-h-screen">
			<h2 className="text-2xl font-bold mb-4">Related Recipes</h2>

			<div className="space-y-4">
				{list.map((recipe) => (
					<RecipeCard key={recipe.idMeal} recipe={recipe}></RecipeCard>
				))}
			</div>
		</div>
	);
};

export { RecipesSidebar };
