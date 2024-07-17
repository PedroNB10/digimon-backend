import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { SeedsController } from './seeds.controller';
import { PrismaService } from 'src/database/PrismaService';
import { DigimonService } from 'src/digimon/digimon.service';

@Module({
  controllers: [SeedsController],
  providers: [SeedsService, PrismaService, DigimonService],
})
export class SeedsModule {}
