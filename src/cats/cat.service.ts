import { Injectable } from '@nestjs/common';
import { CreateCatDto, DeleteCatDto, ReplaceCatDto, UpdateCatDto } from './dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatService {
	private cats: Cat[] = [];

	async create(createCatDto: CreateCatDto) {
		const catData = createCatDto as Cat;
		try {
			this.cats.push(catData);
			return catData;
		} catch {
			return false;
		}
	}

	async findAll() {
		return this.cats;
	}

	async update({ index, ...cat }: UpdateCatDto) {
		try {
			this.cats[index] = Object.assign(this.cats[index], cat);
			return this.cats[index];
		} catch {
			return false;
		}
	}

	async delete({ index }: DeleteCatDto) {
		try {
			this.cats.splice(index, 1);
			return true;
		} catch {
			return false;
		}
	}

	async replace({ index, ...cat }: ReplaceCatDto) {
		try {
			this.cats[index] = cat as Cat;
			return this.cats[index];
		} catch {
			return false;
		}
	}
}
