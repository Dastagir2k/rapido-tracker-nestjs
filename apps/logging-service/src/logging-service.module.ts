import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggingServiceController } from './logging-service.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesController } from './rider-coordinates/rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates/rider-coordinates.service';
import { LoggingServiceService } from './logging-service.service';
import { RiderCoordinates, RiderCoordinatesSchema } from './rider-coordinates/schemas/rider-coordinates.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://das:LoggingService@cluster0.zkyukie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),

    // Import the RiderCoordinates Model
    MongooseModule.forFeature([
      { name: 'RiderCoordinates', schema: RiderCoordinatesSchema },
    ]),

    // Register the Rider Service Microservice Client
    ClientsModule.register([
      {
        name: 'RIDER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3000, // Port of the Rider Service Microservice
        },
      },
    ]),
  ],
  controllers: [LoggingServiceController, RiderCoordinatesController],
  providers: [LoggingServiceService, RiderCoordinatesService],
})
export class LoggingServiceModule {}
