import { IsMongoId } from "class-validator";

export class editOneParams {
    @IsMongoId()
    id: string;
}

export class deleteOneParams {
    @IsMongoId()
    id: string;
}
export class findOneParams {
    @IsMongoId()
    id: string;
}