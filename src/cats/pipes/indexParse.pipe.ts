import {
	ArgumentMetadata,
	BadRequestException,
	Injectable,
	PipeTransform,
} from '@nestjs/common';

@Injectable()
export class IndexParsePipe<Type extends { index: string }>
	implements PipeTransform
{
	transform(value: Type, metadata: ArgumentMetadata) {
		if (!('index' in value)) return value;

		const index = parseInt(value.index);

		if (isNaN(index)) {
			throw new BadRequestException('index must be a number');
		}

		if (index < 0) {
			throw new BadRequestException(
				'index must be a positive number',
			);
		}

		return {
			...value,
			index,
		};
	}
}
