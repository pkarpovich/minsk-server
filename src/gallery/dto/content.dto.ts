import { ImageContentDto } from './image-content.dto';

export class ContentDto {
  id: string;

  value: ImageContentDto[] | string;

  type: string;
}
