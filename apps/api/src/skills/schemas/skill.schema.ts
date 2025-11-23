import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillCategoryDocument = SkillCategory & Document;

@Schema()
export class SkillItem {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    level: string;
}
export const SkillItemSchema = SchemaFactory.createForClass(SkillItem);

@Schema()
export class SkillCategory {
    @Prop({ required: true })
    title: string;

    @Prop({ type: [SkillItemSchema], default: [] })
    items: SkillItem[];
}

export const SkillCategorySchema = SchemaFactory.createForClass(SkillCategory);
