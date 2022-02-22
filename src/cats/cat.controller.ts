import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Patch,
	Post,
	Put,
	Query,
} from '@nestjs/common';
import { CatService } from './cat.service';
import {
	CreateCatDto,
	DeleteCatDto,
	GetCatByIndex,
	ReplaceCatDto,
	SearchCatDto,
	UpdateCatDto,
} from './dto';

@Controller('cats')
export class CatController {
	constructor(private catsService: CatService) {}

	@Get(':index')
	async getByIndex(@Param() getCatByIndex: GetCatByIndex) {
		return this.catsService.getByIndex(getCatByIndex);
	}

	@Get()
	async search(@Query() searchCatDto: SearchCatDto) {
		const results = await this.catsService.search(searchCatDto);
		if (results.length === 0)
			throw new HttpException(
				{
					status: HttpStatus.NO_CONTENT,
					errorMsg: 'No cat found',
				},
				HttpStatus.NO_CONTENT,
			);
		return results;
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
	async replace(
		@Body()
		replaceCatDto: ReplaceCatDto,
	) {
		return this.catsService.replace(replaceCatDto);
	}

	@Delete('delete')
	async delete(@Body() deleteCatDto: DeleteCatDto) {
		return this.catsService.delete(deleteCatDto);
	}
}
