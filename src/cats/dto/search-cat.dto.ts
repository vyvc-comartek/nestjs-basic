import { IsOptional, IsString } from 'class-validator';

export class SearchCatDto {
	@IsString()
	@IsOptional()
	readonly name?: string;
}
