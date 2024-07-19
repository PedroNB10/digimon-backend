import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeedsService } from './seeds/seeds.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Digimon API')
    .setDescription('Digimon API Description')
    .setVersion('1.0')
    .addTag('digimon')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.APP_PORT);

  const data = await app.get<SeedsService>(SeedsService).seed()
  console.log(data)

}
bootstrap();
