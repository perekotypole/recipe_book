import React from "react";

import { RecipeCard } from "../components";
import { type RecipesList as TRecipesList } from "../../types/types";

type Props = {
	title: string;
	list: TRecipesList;
};

const RecipesList: React.FC<Props> = ({ title, list }) => {
	return (
		<>
			<h1 className="text-3xl font-bold mb-6">{title}</h1>

			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{list.length !== 0 ? (
					list.map((recipe) => (
						<RecipeCard key={recipe.idMeal} recipe={recipe} />
					))
				) : (
					<p>Nothing found</p>
				)}
			</div>
		</>
	);
};

export { RecipesList };
