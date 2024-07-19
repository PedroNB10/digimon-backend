import { ApiProperty } from "@nestjs/swagger"

export class DigimonDTO  {

  
    id?: string

    @ApiProperty({
      description: 'Digimon Name',
      example: 'Agumon'
    })
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