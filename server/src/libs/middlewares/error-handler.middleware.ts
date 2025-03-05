import { Request, Response, NextFunction } from "express";

class AppError extends Error {
	statusCode: number;

	constructor(message: string, statusCode: number = 500) {
		super(message);
		this.statusCode = statusCode;
		Error.captureStackTrace(this, this.constructor);
	}
}

const errorHandler = (
	err: Error | AppError,
	_req: Request,
	res: Response,
	_next: NextFunction,
) => {
	const statusCode = err instanceof AppError ? err.statusCode : 500;

	if (process.env.NODE_ENV === "development") {
		console.error(err);
	}

	res.status(statusCode).json({
		status: "error",
		message: err.message,
		...(process.env.NODE_ENV === "development" && {
			stack: err.stack,
		}),
	});
};

export { AppError, errorHandler };
