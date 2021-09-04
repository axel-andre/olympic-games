import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Event, EventDocument } from './event.schema';
import { CreateEventDto } from './dto/create-event.dto';
import { EditEventDto } from './dto/edit-event.dto';

@Injectable()
export class EventsService {
    constructor(@InjectModel(Event.name) private eventModel: Model<EventDocument>) { }

    async findOne(id: string): Promise<Event> {
        const [event] = await this.eventModel
            .find({ _id: id })
            .populate('sport');
        if (!event)
            throw new NotFoundException('Event not found');
        return event;
    }

    async findAll(): Promise<Event[]> {
        return await this.eventModel
            .find()
            .populate('sport');
    }

    async create(createEventDto: CreateEventDto): Promise<Event> {
        const event = new this.eventModel(createEventDto);
        return event.save();
    }

    async updateOne(id: string, editEventDto: EditEventDto): Promise<Event> {
        const { date, name, sport } = editEventDto;
        let event = await this.eventModel.findOne({ _id: id });
        if (!event)
            throw new NotFoundException('Event not found');
        const updateEvent = await this.eventModel.findOneAndUpdate({ _id: id }, editEventDto, { new: true });
        return updateEvent ?? event;
    }

    async deleteOne(id: string): Promise<Event> {
        let event = await this.eventModel.findOne({ _id: id });
        if (!event)
            throw new NotFoundException('Event not found');
        return await this.eventModel.findOneAndRemove({ _id: id });
    }
}