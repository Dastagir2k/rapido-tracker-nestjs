import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggingServiceController } from './logging-service.controller';
import { RiderCoordinatesController } from './rider-coordinates/rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates/rider-coordinates.service';
import { LoggingServiceService } from './logging-service.service';
import { RiderCoordinates, RiderCoordinatesSchema } from './rider-coordinates/schemas/rider-coordinates.schema';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    MongooseModule.forRoot(process.env.MONGODB_URL ?? 'mongodb://localhost:27017/logging-service'), 
    MongooseModule.forFeature([
      { name: 'RiderCoordinates', schema: RiderCoordinatesSchema },
    ]),
    ClientsModule.register([
      {
        name: 'RIDER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3000,
        },
      },
    ]),
  ],
  controllers: [LoggingServiceController, RiderCoordinatesController],
  providers: [LoggingServiceService, RiderCoordinatesService],
})
export class LoggingServiceModule {}
