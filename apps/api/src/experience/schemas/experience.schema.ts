import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExperienceDocument = Experience & Document;

@Schema()
export class Experience {
    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true })
    role: string;

    @Prop({ required: true })
    company: string;

    @Prop()
    url: string;

    @Prop({ required: true })
    start: string;

    @Prop({ required: true })
    end: string;

    @Prop()
    location: string;

    @Prop([String])
    bullets: string[];

    @Prop([String])
    tech: string[];
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
