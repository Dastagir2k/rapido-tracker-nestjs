import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';

import { RiderCoordinatesSchema } from './schemas/rider-coordinates.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // The MongooseModule is used to import the Mongoose module and register the RiderCoordinates schema.
  imports: [MongooseModule.forFeature([{ name: 'RiderCoordinates', schema: RiderCoordinatesSchema }])],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService]
})
export class RiderCoordinatesModule {}
