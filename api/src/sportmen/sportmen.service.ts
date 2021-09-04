import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sportmen, SportmenDocument } from './sportman.schema';
import { CreateSportmenDto } from './dto/create-sportmen.dto';
import { EditSportmenDto } from './dto/edit-sportmen.dto';

@Injectable()
export class SportmenService {
    constructor(@InjectModel(Sportmen.name) private sportmenModel: Model<SportmenDocument>) { }

    async findOne(id: string): Promise<Sportmen> {
        const [sportmen] = await this.sportmenModel.find({ _id: id });
        if (!sportmen)
            throw new NotFoundException('Sportmen not found');
        return sportmen;
    }

    async findAll(): Promise<Sportmen[]> {
        return await this.sportmenModel.find();
    }

    async create(createSportmenDto: CreateSportmenDto): Promise<Sportmen> {
        const sportmen = new this.sportmenModel(createSportmenDto);
        return sportmen.save();
    }

    async updateOne(id: string, editSportmenDto: EditSportmenDto): Promise<Sportmen> {
        let sportmen = await this.sportmenModel.findOne({ _id: id });
        if (!sportmen)
            throw new NotFoundException('Sportmen not found');
        const updateSportmen = await this.sportmenModel.findOneAndUpdate({ _id: id }, editSportmenDto, { new: true });
        return updateSportmen ?? sportmen;
    }

    async deleteOne(id: string): Promise<Sportmen> {
        let sportmen = await this.sportmenModel.findOne({ _id: id });
        if (!sportmen)
            throw new NotFoundException('Sportmen not found');
        return await this.sportmenModel.findOneAndRemove({ _id: id });
    }
}