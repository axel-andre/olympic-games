import { IsString, IsMongoId, IsDateString } from 'class-validator';

export class CreateEventDto {
    @IsString()
    readonly name: string;
    @IsDateString()
    readonly date: Date;
    @IsMongoId()
    readonly sport: string;
}