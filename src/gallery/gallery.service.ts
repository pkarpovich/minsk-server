import { Injectable } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gallery, GalleryDocument } from './entities/gallery.entity';

@Injectable()
export class GalleryService {
  constructor(
    @InjectModel(Gallery.name) private galleryModel: Model<GalleryDocument>,
  ) {}

  async create(createGalleryDto: CreateGalleryDto): Promise<Gallery> {
    const createdCat = new this.galleryModel(createGalleryDto);

    return createdCat.save();
  }

  async findAll(): Promise<Gallery[]> {
    return this.galleryModel.find({});
  }

  findOne(id: string) {
    return `This action returns a #${id} gallery`;
  }

  update(id: string, updateGalleryDto: UpdateGalleryDto) {
    return `This action updates a #${id} gallery`;
  }

  remove(id: string) {
    return this.galleryModel.remove({ _id: id });
  }
}
