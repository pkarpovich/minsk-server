import { Content } from '../entities/content.entity';

export class GalleryDto {
  id: string;

  title: string;

  type: string;

  preview: string;

  content: Content[];
}
