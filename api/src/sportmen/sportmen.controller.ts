import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Sportmen } from './sportman.schema';
import { SportmenService } from './sportmen.service';
import { CreateSportmenDto } from './dto/create-sportmen.dto';
import { EditSportmenDto } from './dto/edit-sportmen.dto';
import { editOneParams, deleteOneParams, findOneParams } from './validation.pipe';

@Controller('sportmens')
export class SportmensController {

    constructor(private service: SportmenService) { }

    @Get()
    async getAllSportmens(): Promise<Sportmen[]> {
        const sportmens = await this.service.findAll();
        return sportmens;
    }

    @Get('/:id')
    async getOneSportmen(@Param() params: findOneParams): Promise<Sportmen> {
        return await this.service.findOne(params.id);
    }

    @Post()
    async createOneSportmen(@Body() createSportmenDto: CreateSportmenDto) {
        await this.service.create(createSportmenDto);
    }

    @Patch('/:id')
    async editOneSportmen(@Param() params: editOneParams, @Body() editSportmenDto: EditSportmenDto) {
        return await this.service.updateOne(params.id, editSportmenDto);
    }

    @Delete('/:id')
    async deleteOneSportmen(@Param() params: deleteOneParams) {
        return await this.service.deleteOne(params.id);
    }
}
