import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RiderServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3000,        
      },
    },
  );

  await app.listen(); // Start the microservice
}
bootstrap();