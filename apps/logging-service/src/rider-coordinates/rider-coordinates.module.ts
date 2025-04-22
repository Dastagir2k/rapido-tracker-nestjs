import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Module({
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService]
})
export class RiderCoordinatesModule {}
