import {
	MiddlewareConsumer,
	Module,
	NestModule,
	RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cats/cat.controller';
import { CatModule } from './cats/cat.module';
import { Logger } from './logger.middleware';

@Module({
	imports: [CatModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(Logger)
			.exclude({
				path: 'cats',
				method: RequestMethod.GET,
			})
			.forRoutes(CatController);
	}
}
