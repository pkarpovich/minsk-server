import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ImageContentDocument = ImageContent & Document;

@Schema()
export class ImageContent extends Document {
  @Prop()
  id: string;

  @Prop()
  value: string;

  @Prop()
  type: string;
}

export const ImageContentSchema = SchemaFactory.createForClass(ImageContent);
