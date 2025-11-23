import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SkillCategory, SkillCategoryDocument } from './schemas/skill.schema';

@Injectable()
export class SkillsService {
  constructor(@InjectModel(SkillCategory.name) private skillModel: Model<SkillCategoryDocument>) { }

  async create(createSkillDto: any): Promise<SkillCategory> {
    const createdSkill = new this.skillModel(createSkillDto);
    return createdSkill.save();
  }

  async findAll(): Promise<SkillCategory[]> {
    return this.skillModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} skill`;
  }

  update(id: number, updateSkillDto: any) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
