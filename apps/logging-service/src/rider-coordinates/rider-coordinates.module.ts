import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { RiderCoordinatesSchema } from './schemas/rider-coordinates.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RiderCoordinates', schema: RiderCoordinatesSchema },
    ]),
    ClientsModule.register([
      { name: 'RIDER_SERVICE', transport: Transport.TCP }
    ])
  ],
  providers: [RiderCoordinatesService],
  exports: [RiderCoordinatesService],
})
export class RiderCoordinatesModule {}
