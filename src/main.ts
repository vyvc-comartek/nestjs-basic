import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './loggerFunc.middleware';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	//Global middleware
	app.use(logger);

	//Global pipe validation
	app.useGlobalPipes(new ValidationPipe());

	await app.listen(3000);
}

bootstrap();
