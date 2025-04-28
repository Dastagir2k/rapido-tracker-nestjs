import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinates } from './schemas/rider-coordinates.schema';
import { Mode } from 'fs';
import { Model } from 'mongoose';
import { createCoordinatesDTO } from './dto/create-coordinates.dto';

@Injectable()
export class RiderCoordinatesService {
   constructor(
    @InjectModel(RiderCoordinates.name) 
    private readonly riderCoordinatesModel: Model<RiderCoordinates>,
   ){}
   async saveRiderCoordinates(createCoordinateDTO: createCoordinatesDTO) {
        // Logic to save rider coordinates to the database
        return await this.riderCoordinatesModel.create(createCoordinateDTO);
    }
}
