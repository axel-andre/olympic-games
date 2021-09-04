import { Module } from '@nestjs/common';
import { Event, EventSchema } from './event.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }])],
    controllers: [EventsController],
    providers: [EventsService]
})
export class EventsModule { }
