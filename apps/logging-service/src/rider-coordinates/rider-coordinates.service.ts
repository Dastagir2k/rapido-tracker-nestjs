import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import { RiderCoordinates } from './schemas/rider-coordinates.schema';
import { createCoordinatesDTO } from './dto/create-coordinates.dto';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel('RiderCoordinates')
    private readonly riderCoordinatesModel: Model<RiderCoordinates>,

    @Inject('RIDER_SERVICE')
    private readonly client: ClientProxy, // Inject the microservice client
  ) {}

  // Method to get all rider coordinates from the database
  async getRiderCoordinates(riderId: string) {
    console.log('riderId', riderId);
  
    const coordinates = await this.riderCoordinatesModel.find({ riderId });
    console.log('coordinates', coordinates);
  
    let rider = null;
    try {
        console.log('Fetching rider info from microservice...');
        
      const pattern = { cmd: 'getRider' };
      const payload = { riderId };
      rider = await firstValueFrom(this.client.send(pattern, payload));
    } catch (error) {
      console.error('Failed to fetch rider info:', error.message);
      rider = null; // fallback to null if service unavailable
    }
  
    return { coordinates, rider };
  }
  

  // Method to save rider coordinates to the database
  async saveRiderCoordinates(createCoordinateDTO: createCoordinatesDTO) {
    return await this.riderCoordinatesModel.create(createCoordinateDTO);
  }
}
