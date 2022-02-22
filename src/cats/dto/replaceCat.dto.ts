import { Type } from 'class-transformer';
import { IsNotEmpty, IsPositive } from 'class-validator';
import { IsIndex } from '../decorators/isIndex.decorator';

export class ReplaceCatDto {
	@IsNotEmpty()
	readonly name: string;

	@IsNotEmpty()
	readonly color: string;

	@IsPositive()
	@Type(() => Number)
	readonly age: number;

	@IsIndex()
	readonly index: number;
}
