import { Type } from 'class-transformer';
import { IsOptional, IsPositive, IsString } from 'class-validator';
import { IsIndex } from '../decorators/isIndex.decorator';

export class UpdateCatDto {
	@IsString()
	@IsOptional()
	readonly name?: string;

	@IsString()
	@IsOptional()
	readonly color?: string;

	@IsPositive()
	@IsOptional()
	@Type(() => Number)
	readonly age?: number;

	@IsIndex()
	readonly index: number;
}
