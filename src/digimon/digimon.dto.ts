import { ApiProperty } from "@nestjs/swagger"

import { Matches } from 'class-validator';
export class DigimonDTO  {

  
    id?: string

    @ApiProperty({
      description: 'Digimon Name',
      example: 'Agumon'
    })
    @Matches(/mon$/, { message: 'Name must end with "mon"' })
    name: string

    @ApiProperty({
      description: 'Digimon Level',
      example: 'Rookie'
    })
    level: string

    @ApiProperty({
      description: 'Digimon Image URL',
      example: 'https://digimon.shadowsmith.com/img/agumon.jpg'
    })
    imgUrl: string
  }