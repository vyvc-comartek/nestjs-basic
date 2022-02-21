import {
	Body,
	Controller,
	Delete,
	Get,
	Patch,
	Post,
	Put,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto, DeleteCatDto, ReplaceCatDto, UpdateCatDto } from './dto';

@Controller('cats')
export class CatController {
	constructor(private catsService: CatService) {}

	@Get()
	async getAll() {
		return this.catsService.findAll();
	}

	@Post()
	async create(@Body() createCatDto: CreateCatDto) {
		return this.catsService.create(createCatDto);
	}

	@Patch('update')
	async update(@Body() updateCatDto: UpdateCatDto) {
		return this.catsService.update(updateCatDto);
	}

	@Put('replace')
	async replace(@Body() replaceCatDto: ReplaceCatDto) {
		return this.catsService.replace(replaceCatDto);
	}

	@Delete('delete')
	async delete(@Body() deleteCatDto: DeleteCatDto) {
		return this.catsService.delete(deleteCatDto);
	}
}
