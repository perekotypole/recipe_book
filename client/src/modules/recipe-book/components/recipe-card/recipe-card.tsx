import Image from "next/image";
import Link from "next/link";

import type { RecipesListItem } from "~/modules/recipe-book/types/recipe-list-item.type";

type Props = {
	recipe: RecipesListItem;
};

const RecipeCard: React.FC<Props> = ({ recipe }) => {
	return (
		<Link
			href={`/recipe/${recipe.idMeal}`}
			className="cursor-pointer border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
		>
			<div className="relative w-full h-48 mb-4">
				<Image
					src={recipe.strMealThumb}
					alt={recipe.strMeal}
					fill
					className="object-cover rounded-lg"
				/>
			</div>

			<h3 className="text-xl font-bold text-center">{recipe.strMeal}</h3>
		</Link>
	);
};

export { RecipeCard };
