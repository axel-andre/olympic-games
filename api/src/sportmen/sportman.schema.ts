import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SportmenDocument = Sportmen & Document;

@Schema()
export class Sportmen {
    @Prop()
    firstName: string;
    @Prop()
    lastName: string;
}
export const SportmenSchema = SchemaFactory.createForClass(Sportmen);