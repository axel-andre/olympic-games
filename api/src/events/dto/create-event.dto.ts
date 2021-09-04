import { IsString, IsMongoId, IsDate } from 'class-validator';

export class CreateEventDto {
    @IsString()
    readonly name: string;
    @IsDate()
    readonly date: Date;
    @IsMongoId()
    readonly sport: string;
}