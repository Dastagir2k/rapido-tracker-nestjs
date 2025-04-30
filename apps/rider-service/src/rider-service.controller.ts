import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RiderServiceService } from './rider-service.service';

@Controller("rider")
export class RiderServiceController {
  constructor(private readonly riderServiceService: RiderServiceService) {}

  @MessagePattern({ cmd: 'getRider' }) // <-- this listens for TCP command
 async getRiderById(
 
  data: any
) {
    console.log("Received data:", data);
    return Promise.resolve({ id: data.id, firstName: 'Jane', lastName: 'Doe', email: 'jane@gmail.com' })
  } 
}
