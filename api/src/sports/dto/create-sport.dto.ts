import { IsString, IsMongoId } from 'class-validator';

export class CreateSportDto {
    @IsString()
    readonly name: string;
}