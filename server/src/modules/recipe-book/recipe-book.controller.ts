import express from "express";

import { Route } from "./libs/enums/routes";
import { getRecipeList } from "./recipe-book.repository";

const router = express.Router();

router.get(Route.RECIPES, async (_req, res): Promise<void> => {
	const list = await getRecipeList({ filter: {} });
	res.json({ list });
});

export { router };
