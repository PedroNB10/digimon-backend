import { ApiProperty } from '@nestjs/swagger';
// digimon.dto.ts
export class DigimonDTO {
    @ApiProperty({ example: 'Agumon' })
    name: string;
  
    @ApiProperty({ example: 'Rookie' })
    level: string;
  
    @ApiProperty({ example: 'http://example.com/agumon.png' })
    imgUrl: string;
  }
  
// success-response.dto.ts
export class SuccessResponseDTO<T> {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'Operation successful.' })
  message: string;

  @ApiProperty()
  data: T;
}

// specific-success-response.dto.ts
export class CreateDigimonSuccessResponseDTO {
  @ApiProperty({ example: 201 })
  statusCode: number;

  @ApiProperty({ example: 'The digimon has been successfully created.' })
  message: string;

  @ApiProperty({ type: DigimonDTO })
  data: DigimonDTO;
}

export class FindAllDigimonSuccessResponseDTO {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'List of all digimons.' })
  message: string;

  @ApiProperty({ type: [DigimonDTO] })
  data: DigimonDTO[];
}

export class GetDigimonByNameSuccessResponseDTO {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'The digimon with the specified name.' })
  message: string;

  @ApiProperty({ type: DigimonDTO })
  data: DigimonDTO;
}

export class GetDigimonByLevelSuccessResponseDTO {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'The digimon with the specified level.' })
  message: string;

  @ApiProperty({ type: [DigimonDTO] })
  data: DigimonDTO[];
}

// error-response.dto.ts
export class BadRequestErrorResponseDTO {
  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty({ example: 'Some fields are missing!' })
  message: string;
}

export class InvalidDigimonLevelErrorResponseDTO {
  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty({ example: 'Invalid Digimon Level' })
  message: string;
}

export class NotFoundErrorResponseDTO {
  @ApiProperty({ example: 404 })
  statusCode: number;

  @ApiProperty({ example: 'Digimon not found' })
  message: string;
}

export class LevelNotFoundErrorResponseDTO {
  @ApiProperty({ example: 404 })
  statusCode: number;

  @ApiProperty({ example: 'Level not found' })
  message: string;
}


