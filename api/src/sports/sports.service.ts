import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sport, SportDocument } from './sport.schema';
import { CreateSportDto } from './dto/create-sport.dto';
import { EditSportDto } from './dto/edit-sport.dto';

@Injectable()
export class SportsService {
    constructor(@InjectModel(Sport.name) private sportModel: Model<SportDocument>) { }

    async findOne(id: string): Promise<Sport> {
        const [sport] = await this.sportModel.find({ _id: id });
        if (!sport)
            throw new NotFoundException('Sport not found');
        return sport;
    }

    async findAll(): Promise<Sport[]> {
        return await this.sportModel.find();
    }

    async create(createSportDto: CreateSportDto): Promise<Sport> {
        const sport = new this.sportModel(createSportDto);
        return sport.save();
    }

    async updateOne(id: string, editSportDto: EditSportDto): Promise<Sport> {
        let sport = await this.sportModel.findOne({ _id: id });
        if (!sport)
            throw new NotFoundException('Sport not found');
        const updateSport = await this.sportModel.findOneAndUpdate({ _id: id }, editSportDto, { new: true });
        return updateSport ?? sport;
    }

    async deleteOne(id: string): Promise<Sport> {
        let sport = await this.sportModel.findOne({ _id: id });
        if (!sport)
            throw new NotFoundException('Sport not found');
        return await this.sportModel.findOneAndRemove({ _id: id });
    }
}