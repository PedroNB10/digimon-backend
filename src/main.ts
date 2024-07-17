import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeedsService } from './seeds/seeds.service';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);

  const data = await app.get<SeedsService>(SeedsService).seed()
  console.log(data)

}
bootstrap();
