import { IsOptional, IsString } from "class-validator";

export class EditSportDto {
    @IsOptional()
    @IsString()
    readonly name?: string;
};