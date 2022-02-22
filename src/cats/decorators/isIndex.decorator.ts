import { BadRequestException } from '@nestjs/common';

export function IsIndex(): PropertyDecorator {
	return function (target, key) {
		let value: string;
		function get() {
			return value;
		}
		function set(index: string) {
			const i = parseInt(index);
			if (isNaN(i)) {
				throw new BadRequestException(
					'index must be a number',
				);
			}
			if (i < 0) {
				throw new BadRequestException(
					'index must not be negative',
				);
			}
			value = index;
		}
		Object.defineProperty(target, key, { set, get });
	};
}
