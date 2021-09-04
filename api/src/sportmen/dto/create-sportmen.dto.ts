import { IsString } from 'class-validator';

export class CreateSportmenDto {
    @IsString()
    readonly firstName: string;
    @IsString()
    readonly lastName: string;
}