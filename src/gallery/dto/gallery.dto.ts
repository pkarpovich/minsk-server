import { ContentDto } from './content.dto';
import { Content } from '../entities/content.entity';

export class GalleryDto {
  id: string;

  title: string;

  type: string;

  link: string;

  preview: string;

  content: Content[];
}
