import { Module } from '@nestjs/common';
import { DigimonModule } from './digimon/digimon.module';
import { SeedsModule } from './seeds/seeds.module';


@Module({
  imports: [DigimonModule, SeedsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
