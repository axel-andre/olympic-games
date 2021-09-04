import { Module } from '@nestjs/common';
import { Sport, SportSchema } from './sport.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SportsController } from './sports.controller';
import { SportsService } from './sports.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Sport.name, schema: SportSchema }])],
    controllers: [SportsController],
    providers: [SportsService]
})
export class SportsModule { }
