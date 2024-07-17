import { Injectable } from '@nestjs/common';
import { DigimonSeedDTO } from './digimon.seed.dto';
import { PrismaService } from 'src/database/PrismaService';
import axios from 'axios';

@Injectable()
export class SeedsService {
    constructor(private prisma: PrismaService){    }

    async seed() {

        const existsDigimons = await this.prisma.digimon.findMany()
        if(existsDigimons.length === 0){
            const response = await axios.get('https://digimon-api.vercel.app/api/digimon')
            const data:DigimonSeedDTO[] = response.data 
           
            await Promise.all(data.map(async (digimon) => {
                await this.prisma.digimon.create({
                    data: {
                        name: digimon.name,
                        level: digimon.level,
                        imgUrl: digimon.img
                    }
                })
            }))
            
            return data
        }

        else{
            return existsDigimons
        }
        
        
    }

}
