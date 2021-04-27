import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Content } from './content.entity';

export type GalleryDocument = Gallery & Document;

@Schema()
export class Gallery {
  @Prop()
  title: string;

  @Prop()
  type: string;

  @Prop()
  link: string;

  @Prop()
  content: Content[];
}

export const GallerySchema = SchemaFactory.createForClass(Gallery);
