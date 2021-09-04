import { IsDate, IsMongoId, IsOptional, IsString } from "class-validator";

export class EditEventDto {
    @IsString()
    @IsOptional()
    readonly name: string;
    @IsDate()
    @IsOptional()
    readonly date: Date;
    @IsMongoId()
    @IsOptional()
    readonly sport: string;
}