import { Body, Controller, Get, NotFoundException, BadRequestException, Param, Post } from '@nestjs/common';
import { DigimonService } from './digimon.service';
import { DigimonDTO } from './digimon.dto';
import { ApiTags, ApiResponse, ApiBadRequestResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { CreateDigimonSuccessResponseDTO, FindAllDigimonSuccessResponseDTO, GetDigimonByNameSuccessResponseDTO, GetDigimonByLevelSuccessResponseDTO } from './response.dto';
import { BadRequestErrorResponseDTO, InvalidDigimonLevelErrorResponseDTO, NotFoundErrorResponseDTO, LevelNotFoundErrorResponseDTO } from './response.dto';

const DigimonsLevels = ['ROOKIE', 'CHAMPION', 'ULTIMATE', 'MEGA', 'TRAINING', 'INTRAINING', 'FRESH', 'ARMOR'];

@ApiTags('digimon')
@Controller('digimon')
export class DigimonController {
  constructor(private readonly digimonService: DigimonService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The digimon has been successfully created.', type: CreateDigimonSuccessResponseDTO })
  @ApiBadRequestResponse({ description: 'Some fields are missing!', type: BadRequestErrorResponseDTO })
  @ApiBadRequestResponse({ description: 'Invalid Digimon Level', type: InvalidDigimonLevelErrorResponseDTO })
  async create(@Body() data: DigimonDTO) {
    if (!data.name || !data.level || !data.imgUrl) {
      throw new BadRequestException('Some fields are missing!');
    }

    if (!DigimonsLevels.includes(data.level.split(' ').join('').toUpperCase())) {
      throw new BadRequestException('Invalid Digimon Level');
    }

    return {
      statusCode: 201,
      message: 'The digimon has been successfully created.',
      data: await this.digimonService.create(data),
    };
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of all digimons.', type: FindAllDigimonSuccessResponseDTO })
  async findAll() {
    return {
      statusCode: 200,
      message: 'List of all digimons.',
      data: await this.digimonService.findAll(),
    };
  }

  @Get('/name/:name')
  @ApiResponse({ status: 200, description: 'The digimon with the specified name.', type: GetDigimonByNameSuccessResponseDTO })
  @ApiNotFoundResponse({ description: 'Digimon not found', type: NotFoundErrorResponseDTO })
  async getDigimonByName(@Param('name') name: string) {
    const digimon = await this.digimonService.getDigimonByName(name);

    if (digimon.length === 0) {
      throw new NotFoundException('Digimon not found');
    }

    return {
      statusCode: 200,
      message: 'Digimon found successfully',
      data: digimon,
    };
  }

  @Get('/level/:level')
  @ApiResponse({ status: 200, description: 'The digimon with the specified level.', type: GetDigimonByLevelSuccessResponseDTO })
  @ApiBadRequestResponse({ description: 'Invalid Digimon Level', type: InvalidDigimonLevelErrorResponseDTO })
  @ApiNotFoundResponse({ description: 'Level not found', type: LevelNotFoundErrorResponseDTO })
  async getDigimonByLevel(@Param('level') level: string) {
    if (!DigimonsLevels.includes(level.split(' ').join('').toUpperCase())) {
      throw new BadRequestException('Invalid Digimon Level');
    }

    const digimon = await this.digimonService.getDigimonByLevel(level);

    if (digimon.length === 0) {
      throw new NotFoundException('Level not found');
    }

    return {
      statusCode: 200,
      message: 'Digimon found successfully',
      data: digimon,
    };
  }
}
