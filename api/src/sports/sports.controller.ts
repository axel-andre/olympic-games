import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Sport } from './sport.schema';
import { SportsService } from './sports.service';
import { CreateSportDto } from './dto/create-sport.dto';
import { EditSportDto } from './dto/edit-sport.dto';
import { editOneParams, deleteOneParams, findOneParams } from './validation.pipe';

@Controller('sports')
export class SportsController {

    constructor(private service: SportsService) { }

    @Get()
    async getAllSports(): Promise<Sport[]> {
        const sports = await this.service.findAll();
        return sports;
    }

    @Get('/:id')
    async getOneSport(@Param() params: findOneParams): Promise<Sport> {
        return await this.service.findOne(params.id);
    }

    @Post()
    async createOneSport(@Body() createSportDto: CreateSportDto) {
        await this.service.create(createSportDto);
    }

    @Patch('/:id')
    async editOneSport(@Param() params: editOneParams, @Body() editSportDto: EditSportDto) {
        return await this.service.updateOne(params.id, editSportDto);
    }

    @Delete('/:id')
    async deleteOneSport(@Param() params: deleteOneParams) {
        return await this.service.deleteOne(params.id);
    }
}
