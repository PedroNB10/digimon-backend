import { Injectable } from '@nestjs/common';
import { DigimonDTO } from './digimon.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class DigimonService {

    constructor(private prisma: PrismaService){    }

    async create(data: DigimonDTO) {

        const digimon = await this.prisma.digimon.create({
            data: {
                name: data.name,
                level: data.level,
                imgUrl: data.imgUrl
                
            }
        })

        return digimon
    }

    async findAll() {
        return this.prisma.digimon.findMany()
    }
}
