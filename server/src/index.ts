import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import { recipeBookRouter } from "./modules/recipe-book/recipe-book";
import { Route } from "./libs/enums/routes";
import { errorHandler } from "./libs/middlewares/error-handler.middleware";

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 8000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use(Route.ROOT, recipeBookRouter);

app.get(Route.ROOT, (_req, res): void => {
	res.json({ status: "Health" });
});

app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});

export { app };
