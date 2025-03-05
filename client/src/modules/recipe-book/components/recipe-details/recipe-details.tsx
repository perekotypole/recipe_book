import React from "react";
import Image from "next/image";
import Link from "next/link";

import type { RecipeItem, RecipesList } from "../../types/types";
import { RecipesSidebar } from "../recipes-sidebar/recipes-sidebar";
import { useRecipeDetails } from "./recipe-details.hook";

export type RecipeDetailsProps = {
	recipe: RecipeItem;
	similarRecipes: RecipesList;
};

const RecipeDetails: React.FC<RecipeDetailsProps> = (props) => {
	const { recipe, similarRecipes } = props;
	const { ingredients } = useRecipeDetails(props);

	return (
		<div className="flex flex-col sm:flex-row gap-8">
			<div className="flex-grow">
				<div className="max-w-4xl mx-auto">
					<div className="flex flex-col sm:flex-row gap-8">
						<div className="w-full pb-8 sm:w-1/2 sm:pr-8o">
							<div className="relative w-full h-96">
								<Image
									src={recipe.strMealThumb}
									alt={recipe.strMeal}
									fill
									className="object-cover rounded-lg"
								/>
							</div>
						</div>

						<div className="w-full sm:w-1/2">
							<h1 className="text-4xl font-bold mb-4 text-center">
								{recipe.strMeal}
							</h1>

							<Link
								href={`/?country=${recipe.strArea}`}
								className="block text-center text-xl text-blue-600 hover:underline mb-4"
							>
								{recipe.strArea}
							</Link>

							<div className="my-8">
								<h2 className="text-2xl font-semibold mb-4">Ingredients</h2>

								<ul className="max-h-[250px] sm:max-h-[500px] overflow-auto custom-scrollbar">
									{ingredients.map(({ ingredient, measure }) => (
										<Link
											key={ingredient}
											href={`/?ingredient=${encodeURIComponent(ingredient)}`}
											className="block hover:bg-gray-700 p-2 rounded-lg"
										>
											<li className="text-lg cursor-pointer">
												{ingredient} ({measure})
											</li>
										</Link>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<RecipesSidebar list={similarRecipes} />
		</div>
	);
};

export { RecipeDetails };
