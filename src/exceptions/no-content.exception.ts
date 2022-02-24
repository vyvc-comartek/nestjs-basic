import { HttpException, HttpStatus } from '@nestjs/common';
export class NoContentException extends HttpException {
	constructor(response: string | Record<string, any>) {
		super(response, HttpStatus.NO_CONTENT);
	}
}
