import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class Logger implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		console.log(
			`${req.ip} make a request: ${req.method} ${req.url}`,
		);
		next();
	}
}
