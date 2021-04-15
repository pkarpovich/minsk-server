import { Injectable } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gallery, GalleryDocument } from './entities/gallery.entity';
import { Content, ContentDocument } from './entities/content.entity';

@Injectable()
export class GalleryService {
  constructor(
    @InjectModel(Gallery.name) private galleryModel: Model<GalleryDocument>,
    @InjectModel(Content.name) private contentModel: Model<ContentDocument>,
  ) {}

  async create(createGalleryDto: CreateGalleryDto): Promise<Gallery> {
    const content = await Promise.all(
      createGalleryDto.content?.map(
        (a) =>
          new this.contentModel({
            value: a.value,
            type: a.type,
          }),
      ) ?? [],
    );

    const createdCat = new this.galleryModel({ ...createGalleryDto, content });

    return createdCat.save();
  }

  async findAll(): Promise<GalleryDocument[]> {
    return this.galleryModel.find({});
  }

  findOne(id: string) {
    return `This action returns a #${id} gallery`;
  }

  update(id: string, updateGalleryDto: UpdateGalleryDto) {
    return `This action updates a #${id} gallery`;
  }

  remove(id: string) {
    return this.galleryModel.deleteOne({ _id: id });
  }
}
