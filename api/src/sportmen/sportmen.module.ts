import { Module } from '@nestjs/common';
import { Sportmen, SportmenSchema } from './sportman.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SportmensController } from './sportmen.controller';
import { SportmenService } from './sportmen.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Sportmen.name, schema: SportmenSchema }])],
    controllers: [SportmensController],
    providers: [SportmenService]
})
export class SportmensModule { }
