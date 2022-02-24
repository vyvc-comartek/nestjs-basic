import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

//Khai báo một module toàn cục:
//@Global()

@Module({
	imports: [],
	providers: [CatService],
	controllers: [CatController],
})
export class CatModule {
	//Thực hiện dependency injection (Trong trường hợp này sẽ gây ra hiện tượng circular dependency)
	//constructor(private catService: CatService) {} //circular dependency
}
