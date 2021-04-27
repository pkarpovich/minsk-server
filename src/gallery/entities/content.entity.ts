import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ImageContent } from './image-content.entity';

export type ContentDocument = Content & Document;

@Schema()
export class Content extends Document {
  @Prop({ required: true })
  value: ImageContent[];

  @Prop({ required: true })
  type: string;
}

export const ContentSchema = SchemaFactory.createForClass(Content);
