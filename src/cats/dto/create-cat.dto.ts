import { Type } from 'class-transformer';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateCatDto {
	@IsNotEmpty()
	readonly name: string;

	@IsNotEmpty()
	readonly color: string;

	@IsPositive()
	@Type(() => Number)
	readonly age: number;
}
