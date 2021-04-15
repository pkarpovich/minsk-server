import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { GalleryDto } from './dto/gallery.dto';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post()
  create(@Body() createGalleryDto: CreateGalleryDto) {
    return this.galleryService.create(createGalleryDto);
  }

  @Get()
  async findAll(@Query('type') type) {
    let gallery = await this.galleryService.findAll();

    if (type) {
      gallery = gallery.filter((g) => g.type === type);
    }

    return gallery.map((g) => {
      const galleryDto = new GalleryDto();

      galleryDto.id = g._id;
      galleryDto.title = g.title;
      const firstImage = g.content.find((c) => c.type === 'IMAGE');

      galleryDto.preview = firstImage?.value ?? '';
      galleryDto.content = g.content;
      galleryDto.type = g.type;

      return galleryDto;
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.galleryService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGalleryDto: UpdateGalleryDto) {
    return this.galleryService.update(id, updateGalleryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galleryService.remove(id);
  }
}
