import { ContentDto } from './content.dto';

export class CreateGalleryDto {
  title: string;

  type: string;

  link: string;

  content: ContentDto[];
}
