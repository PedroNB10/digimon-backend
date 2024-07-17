import { Body, Controller, Get, Post } from '@nestjs/common';
import { DigimonService } from './digimon.service';
import { DigimonDTO } from './digimon.dto';

@Controller('digimon')
export class DigimonController {
  constructor(private readonly digimonService: DigimonService) {}


  @Post()
  async create(@Body() data: DigimonDTO) {
    return this.digimonService.create(data);
  }

  @Get()
  async findAll() {
    return this.digimonService.findAll();
  }
}
