import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingServiceService } from './logging-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';
import { RiderCoordinatesController } from './rider-coordinates/rider-coordinates.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://das:LoggingService@cluster0.zkyukie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), RiderCoordinatesModule],
  controllers: [LoggingServiceController ],
  providers: [LoggingServiceService],
})
export class LoggingServiceModule {}
