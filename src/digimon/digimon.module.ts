import { Module } from '@nestjs/common';
import { DigimonService } from './digimon.service';
import { DigimonController } from './digimon.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [DigimonController],
  providers: [DigimonService, PrismaService],
})
export class DigimonModule {}
