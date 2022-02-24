import { NextFunction, Request, Response } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
	console.log(`${req.ip} make a request: ${req.method} ${req.url}`);
	next();
}
