import { IsIndex } from '../decorators/isIndex.decorator';

export class DeleteCatDto {
	@IsIndex()
	readonly index: number;
}
