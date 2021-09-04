import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Event, FormatedEvent } from './event.schema';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { EditEventDto } from './dto/edit-event.dto';
import { editOneParams, deleteOneParams, findOneParams } from './validation.pipe';

@Controller('events')
export class EventsController {

    constructor(private service: EventsService) { }

    @Get()
    async getAllEvents() {
        const events = await this.service.findAll();
        return events.map((event: any) => {
            return {
                ...event._doc,
                day: event.date.toLocaleDateString('fr-FR'),
                hours: event.date.toLocaleTimeString('fr-FR')
            }
        });
    }

    @Get('/:id')
    async getOneEvent(@Param() params: findOneParams): Promise<FormatedEvent> {
        const event = await this.service.findOne(params.id);
        return {
            ...event,
            day: event.date.toLocaleDateString('fr-FR'),
            hours: event.date.toLocaleTimeString('fr-FR')
        }
    }

    @Post()
    async createOneEvent(@Body() createEventDto: CreateEventDto) {
        await this.service.create(createEventDto);
    }

    @Patch('/:id')
    async editOneEvent(@Param() params: editOneParams, @Body() editEventDto: EditEventDto) {
        return await this.service.updateOne(params.id, editEventDto);
    }

    @Delete('/:id')
    async deleteOneEvent(@Param() params: deleteOneParams) {
        return await this.service.deleteOne(params.id);
    }
}
