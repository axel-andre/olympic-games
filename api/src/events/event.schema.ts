import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Sport } from 'src/sports/sport.schema';

export type EventDocument = Event & Document;

@Schema()
export class Event {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true, default: new Date() })
    date: Date;
    @Prop({ type: Types.ObjectId, ref: 'Sport' })
    sport: Sport | string
    @Prop({ type: [{ type: Types.ObjectId, ref: 'Sportmen' }] })
    medalHolders: Sport | string
}

export interface FormatedEvent extends Event {
    day: string;
    hours: string
}
export const EventSchema = SchemaFactory.createForClass(Event);