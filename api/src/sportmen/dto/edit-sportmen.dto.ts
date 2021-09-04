import { IsOptional, IsString } from "class-validator";

export class EditSportmenDto {
    @IsOptional()
    @IsString()
    readonly firstName?: string;
    @IsOptional()
    @IsString()
    readonly lastName?: string;
};