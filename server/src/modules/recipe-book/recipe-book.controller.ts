import express from "express";

import { Route } from "./libs/enums/routes";
import { getRecipeList } from "./recipe-book.repository";

const router = express.Router();

router.get(Route.RECIPES, async (req, res): Promise<void> => {
	const { s: search, i: ingredient, a: country, c: category } = req.query;

	const list = await getRecipeList({
		filters: {
			search: search as string | undefined,
			ingredient: ingredient as string | undefined,
			country: country as string | undefined,
			category: category as string | undefined,
		},
	});

	res.json({ total: list.length, list });
});

export { router };
