import express from "express";

import { Route } from "./libs/enums/routes";
import { getRecipeById, getRecipesList } from "./recipe-book.repository";

const router = express.Router();

router.get(Route.RECIPES, async (req, res): Promise<void> => {
	const { s: search, i: ingredient, a: country, c: category } = req.query;

	const list = await getRecipesList({
		filters: {
			search: search as string | undefined,
			ingredient: ingredient as string | undefined,
			country: country as string | undefined,
			category: category as string | undefined,
		},
	});

	res.json({ total: list.length, list });
});

router.get(Route.RECIPE, async (req, res): Promise<void> => {
	const { id } = req.params;
	const item = await getRecipeById({ id })

	if (!item) {
		res.status(404).json({ error: 'Recipe not found' });
		return;
	}

	res.json({ item });
});

export { router };
