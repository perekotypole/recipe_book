import express from "express";

import { AppError } from "../../libs/middlewares/error-handler.middleware";

import { Route } from "./libs/enums/routes";
import { getRecipeById, getRecipesList } from "./recipe-book.repository";

const router = express.Router();

router.get(Route.RECIPES, async (req, res, next): Promise<void> => {
	try {
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
	} catch (error) {
		next(error);
	}
});

router.get(Route.RECIPE, async (req, res, next): Promise<void> => {
	try {
		const { id } = req.params;
		const item = await getRecipeById({ id });

		if (!item) {
			throw new AppError("Recipe not found", 404);
		}

		res.json({ item });
	} catch (error) {
		next(error);
	}
});

export { router };
