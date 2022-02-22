import { IsIndex } from '../decorators/isIndex.decorator';

export class GetCatByIndex {
	@IsIndex()
	readonly index: number;
}
